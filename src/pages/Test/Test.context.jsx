import { createContext, useContext, useEffect, useState } from "react";
import { useHistoryState } from "@uidotdev/usehooks";

const TestContext = createContext();

export const useTest = () => {
    return useContext(TestContext);
};

export const TestProvider = ({ children }) => {

    const initialState = () => {
        const savedFormData = localStorage.getItem("resumeData");
        return savedFormData
            ? JSON.parse(savedFormData)
            : {
                personalInfo: [],
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
    }

    const { state, set, undo, canUndo } = useHistoryState(initialState())

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
            personalInfo: transformSection(data.personalInfo),
            profilePic: data.profilePic,
            technicalSkills: transformSection(data.technicalSkills),
            certifications: transformSection(data.certifications),
            extraCurricularActivities: transformSection(data.extraCurricularActivities),
            internships: transformSection(data.internships),
            summerTraining: transformSection(data.summerTraining),
            projects: transformSection(data.projects),
            achievements: transformSection(data.achievements),
            education: transformSection(data.education),
            visibility: data.visibility,
            settings: data.settings,
        };

        return transformedData;
    };

    const [resumePreviewData, setResumePreviewData] = useState(transformResumeData(state));

    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(state));
        setResumePreviewData(transformResumeData(state));
    }, [state, set]);

    const handleChange = (e, section, index, itemIndex) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData[section][index][itemIndex].value = e.target.value;
        set(updatedData);
    };

    const handleAdd = (section, data) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData[section].push(data);
        set(updatedData);
    }

    const handleRemove = (section, index) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData[section].splice(index, 1);
        set(updatedData);
    }

    const handleReset = (section, index) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData[section][index].forEach((item) => {
            item.value = "";
        });
        set(updatedData);
    }

    const handleProfilePic = (url) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData.profilePic = url;
        console.log(updatedData)
        set(updatedData);
    }

    const handleVisibility = (section) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData.visibility[section] = !updatedData.visibility[section]
        set(updatedData)
    }

    const handleSettings = (setting, value) => {
        const updatedData = JSON.parse(JSON.stringify(state));
        updatedData.settings[setting] = value
        set(updatedData)
    }

    const getFontSizeClass = () => {
        return `text-[${state.settings.fontSize}px]`
    }

    const getHeadingFontSizeClass = () => {
        return `text-[${parseInt(state.settings.fontSize) + 4}px]`
    }

    const getLineHeightClass = () => {
        return `gap-[${state.settings.lineHeight}px]`
    }

    const getPageMarginClass = () => {
        return `p-[${state.settings.pageMargins}px]`
    }

    const getFontFamilyClass = () => {
        switch (state.settings.fontFamily) {
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
    }

    const getTitleCaseClass = () => {
        switch (state.settings.titleCase) {
            case "Uppercase":
                return "uppercase";
            case "Lowercase":
                return "lowercase";
            case "Capitalize":
                return "capitalize";
            default:
                return "uppercase";
        }
    }

    const getPaperClass = () => {
        switch (state.settings.paper) {
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
        <TestContext.Provider value={{
            state,
            undo,
            canUndo,
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
            getPaperClass

        }}>
            {children}
        </TestContext.Provider>
    );

};

export default TestContext;