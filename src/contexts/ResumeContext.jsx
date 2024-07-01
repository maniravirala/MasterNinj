/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext, createContext } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    const savedFormData = localStorage.getItem('resumeData');
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
        personalInfo: [
          [{ label: "Name", type: "text", key: "name", value: "" },
          { label: "Email", type: "email", key: "email", value: "" },
          { label: "Phone", type: "tel", key: "phone", value: "" },
          { label: "Address", type: "address", key: "address", value: "" },
          { label: "Github", type: "text", key: "github", value: "" },
          { label: "LinkedIn", type: "text", key: "linkedin", value: "" },
          { label: "Position", type: "text", key: "position", value: "" },]
        ],
        profilePic: "",
        technicalSkills: [],
        certifications: [],
        extraCurricularActivities: [],
        internships: [],
        summerTraining: [],
        projects: [],
        achievements: [],
        education: [],
        visibility: {
          certifications: true,
          extraCurricularActivities: true,
          internships: true,
          summerTraining: true,
          projects: true,
          achievements: true,
        },
        settings: {
          fontSize: "12",
          fontFamily: "Poppins",
          titleCase: "Uppercase",
          pageMargins: "24",
          lineHeight: "8",
          paper: "A4",
        },
      };
  });

  const transformResumeData = (data) => {
    const transformSection = (section) => {
      return section.map((item) => {
        return item.reduce((acc, curr) => {
          const keysList = curr.key.split("-");
          const keysListLength = keysList.length;
          acc[keysList[keysListLength - 2]] = curr.value;
          return acc;
        }, {});
      });
    };

    const transformedData = {
      personalInfo: data.personalInfo[0].reduce((acc, curr) => {
        acc[curr.key] = curr.value;
        return acc;
      }, {}),
      profilePic: data.profilePic,
      technicalSkills: data.technicalSkills.map(skill => ({ skill: skill[0].value })),
      certifications: transformSection(data.certifications),
      extraCurricularActivities: transformSection(data.extraCurricularActivities),
      internships: transformSection(data.internships),
      summerTraining: transformSection(data.summerTraining),
      projects: transformSection(data.projects),
      achievements: transformSection(data.achievements),
      education: transformSection(data.education),
      visibility: data.visibility,
      settings: data.settings
    };

    return transformedData;
  };

  const [resumePreviewData, setResumePreviewData] = useState(transformResumeData(resumeData));

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    setResumePreviewData(transformResumeData(resumeData));
  }, [resumeData]);

  const handleChange = (e, section, index, itemIndex) => {
    const { value } = e.target;
    setResumeData((prevData) => {
      const updatedData = { ...prevData };
      if (itemIndex !== undefined) {
        updatedData[section][index][itemIndex].value = value;
      } else {
        updatedData[section][index].value = value;
      }
      return updatedData;
    });
  };

  const handleAdd = (section, data) => {
    setResumeData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section].push(data);
      return updatedData;
    });
  };

  const handleRemove = (section, index) => {
    setResumeData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section].splice(index, 1);
      return updatedData;
    });
  };

  const handleReset = (section, index) => {
    setResumeData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[section][index].forEach((item) => {
        item.value = "";
      });
      return updatedData;
    });
  };

  const handleProfilePic = (url) => {
    setResumeData((prevData) => ({
      ...prevData,
      profilePic: url,
    }));
  };

  const handleVisibility = (section) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        visibility: {
          ...prevData.visibility,
          [section]: !prevData.visibility[section],
        },
      };
    });
  };

  const handleSettings = (name, value) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        settings: {
          ...prevData.settings,
          [name]: value,
        },
      };
    });
  };

  const getFontSizeClass = () => {
    if (resumeData.settings.fontSize <= 12) return 'text-xs';
    else if (resumeData.settings.fontSize <= 14) return 'text-sm';
    else if (resumeData.settings.fontSize <= 16) return 'text-base';
    else if (resumeData.settings.fontSize <= 18) return 'text-lg';
    else if (resumeData.settings.fontSize <= 20) return 'text-xl';
    else return 'text-xs';
  };

  const getHeadingFontSizeClass = () => {
    if (resumeData.settings.fontSize <= 12) return 'text-sm';
    else if (resumeData.settings.fontSize <= 14) return 'text-base';
    else if (resumeData.settings.fontSize <= 16) return 'text-lg';
    else if (resumeData.settings.fontSize <= 18) return 'text-xl';
    else if (resumeData.settings.fontSize <= 20) return 'text-2xl';
    else return 'text-sm';
  }

  const getLineHeightClass = () => {
    if (resumeData.settings.lineHeight === 0) return 'gap-0';
    else if (resumeData.settings.lineHeight <= 2) return 'gap-0.5';
    else if (resumeData.settings.lineHeight <= 4) return 'gap-1';
    else if (resumeData.settings.lineHeight <= 6) return 'gap-1.5';
    else if (resumeData.settings.lineHeight <= 8) return 'gap-2';
    else if (resumeData.settings.lineHeight <= 10) return 'gap-2.5';
    else if (resumeData.settings.lineHeight <= 12) return 'gap-3';
    else if (resumeData.settings.lineHeight <= 14) return 'gap-3.5';
    else if (resumeData.settings.lineHeight <= 16) return 'gap-4';
    else if (resumeData.settings.lineHeight <= 18) return 'gap-[1.125rem]';
    else if (resumeData.settings.lineHeight <= 20) return 'gap-5';
    else return 'gap-2';
  }

  const getPageMarginClass = () => {
    if (resumeData.settings.pageMargins <= 12) return 'p-3';
    else if (resumeData.settings.pageMargins <= 14) return 'p-3.5';
    else if (resumeData.settings.pageMargins <= 16) return 'p-4';
    else if (resumeData.settings.pageMargins <= 20) return 'p-5';
    else if (resumeData.settings.pageMargins <= 24) return 'p-6';
    else if (resumeData.settings.pageMargins <= 28) return 'p-7';
    else if (resumeData.settings.pageMargins <= 32) return 'p-8';
    else if (resumeData.settings.pageMargins <= 36) return 'p-9';
    else if (resumeData.settings.pageMargins <= 40) return 'p-10';
    else return 'p-6';
  }

  const getFontFamilyClass = () => {
    switch (resumeData.settings.fontFamily) {
      case "Arial":
        return "'Arial', 'sans-serif'";
      case "Courier New":
        return "'Courier New', 'monospace'";
      case "Poppins":
        return "'Poppins', 'sans-serif'";
      case "Times New Roman":
        return "'Times New Roman', 'serif'";
      case "Verdana":
        return "'Verdana', 'sans-serif'";
      default:
        return "'Poppins', 'sans-serif'";
    }
  };

  const getTitleCaseClass = () => {
    switch (resumeData.settings.titleCase) {
      case "Uppercase":
        return "uppercase";
      case "Lowercase":
        return "lowercase";
      case "Capitalize":
        return "capitalize";
      default:
        return "uppercase";
    }
  };

  const getPaperClass = () => {
    switch (resumeData.settings.paper) {
      case "A4":
        return "w-[210mm] h-[297mm]";
      case "Letter":
        return "w-[8.5in] h-[11in]";
      case "Legal":
        return "w-[8.5in] h-[14in]";
      default:
        return "w-[210mm] h-[297mm]";
    }
  };


  return (
    <ResumeContext.Provider value={{
      resumeData,
      resumePreviewData,
      handleChange,
      handleAdd,
      handleRemove,
      handleReset,
      handleProfilePic,
      handleVisibility,
      handleSettings,
      getFontSizeClass,
      getHeadingFontSizeClass,
      getLineHeightClass,
      getPageMarginClass,
      getFontFamilyClass,
      getTitleCaseClass,
      getPaperClass,
    }}>
      {children}
    </ResumeContext.Provider>
  );

};

export default ResumeContext;