import React, { useEffect } from "react";
import { useLocalStorage } from "../../hooks";
import InputForm from "./InputForm";
import ResumePreview from "./ResumePreview";
import Dropdown from "./Dropdown";
import { useResume } from "../../contexts/ResumeContext";
import Toggle from "../../components/Toggle";
import { AddCircle } from 'iconsax-react';

const ResumeBuilder = () => {

  const [activeTabResume, setActiveTabResume] = useLocalStorage("activeTabResume", "personalInfo");
  const { resumeData, handleAdd, handleVisibility } = useResume();

  const tabsData = [
    { key: "personalInfo", name: "Personal Info" },
    { key: "education", name: "Education" },
    { key: "technicalSkills", name: "Technical Skills" },
    { key: "internships", name: "Internships" },
    { key: "summerTraining", name: "Summer Training" },
    { key: "achievements", name: "Achievements" },
    { key: "projects", name: "Projects" },
    { key: "certifications", name: "Certifications" },
    { key: "extraCurricularActivities", name: "Extra Curricular Activities" },
  ];

  const options = {
    personalInfo: { add: false, remove: false, reset: false },
    education: { add: true, remove: true, reset: true },
    projects: { add: true, remove: true, reset: true },
    certifications: { add: true, remove: true, reset: true },
    achievements: { add: true, remove: true, reset: true },
    internships: { add: true, remove: true, reset: true },
    summerTraining: { add: true, remove: true, reset: true },
    extraCurricularActivities: { add: true, remove: true, reset: true },
    technicalSkills: { add: true, remove: true, reset: true },
  };

  const inputFields = {
    personalInfo: [
      { label: "Name", type: "text", key: "name", value: "", icon: { name: "User", lib: "lucide" } },
      { label: "Email", type: "email", key: "email", value: "", icon: { name: "Mail", lib: "lucide" } },
      { label: "Phone", type: "tel", key: "phone", value: "", icon: { name: "Phone", lib: "lucide" } },
      { label: "Address", type: "address", key: "address", value: "", icon: { name: "MapPin", lib: "lucide" } },
      { label: "Github", type: "link", key: "github", value: "", icon: { name: "Github", lib: "lucide" } },
      { label: "Portfolio", type: "link", key: "portfolio", value: "", icon: { name: "CircleUser", lib: "lucide" } },
      { label: "LinkedIn", type: "link", key: "linkedin", value: "", icon: { name: "Linkedin", lib: "lucide" } },
      { label: "Position", type: "text", key: "position", value: "", icon: { name: "Briefcase", lib: "lucide" } },
    ],
    education: [
      { label: "Degree", type: "text", key: "education-degree", value: "" },
      { label: "Institute", type: "text", key: "education-institute", value: "" },
      { label: "Location", type: "text", key: "education-location", value: "" },
      { label: "Score", type: "text", key: "education-score", value: "" },
      { label: "Score Type", type: "dropdown", key: "education-scoreType", value: "", options: { "cgpa": "CGPA", "percentage": "Percentage" } },
      { label: "Date", type: "text", key: "education-date", value: "" },
    ],
    internships: [
      { label: "Company", type: "text", key: "internship-company", value: "" },
      { label: "Role", type: "text", key: "internship-role", value: "" },
      { label: "Location", type: "text", key: "internship-location", value: "" },
      { label: "Date", type: "text", key: "internship-date", value: "" },
      { label: "Description", type: "textArea", key: "internship-description", value: "" }
    ],
    summerTraining: [
      { label: "Title", type: "text", key: "summerTraining-title", value: "" },
      { label: "Organization", type: "text", key: "summerTraining-organization", value: "" },
      { label: "Location", type: "text", key: "summerTraining-location", value: "" },
      { label: "Date", type: "text", key: "summerTraining-date", value: "" },
      { label: "Description", type: "textArea", key: "summerTraining-description", value: "" }
    ],
    achievements: [
      { label: "Title", type: "text", key: "achievement-title", value: "" },
      { label: "Date", type: "text", key: "achievement-date", value: "" },
      { label: "Description", type: "textArea", key: "achievement-description", value: "" }
    ],
    extraCurricularActivities: [
      { label: "Activity", type: "text", key: "activity", value: "" },
      { label: "Date", type: "text", key: "activity-date", value: "" },
    ],
    technicalSkills: [
      { label: "Domain", type: "text", key: "domain", value: "" },
      { label: "Skill", type: "text", key: "skill", value: "" },
    ],
    projects: [
      { label: "Title", type: "text", key: "project-title", value: "" },
      { label: "Domain", type: "text", key: "project-domain", value: "" },
      { label: "Technologies", type: "text", key: "project-technologies", value: "" },
      { label: "Date", type: "text", key: "project-date", value: "" },
      { label: "Description", type: "textArea", key: "project-description", value: "" }
    ],
    certifications: [
      { label: "Title", type: "text", key: "certification-title", value: "" },
      { label: "Issued By", type: "text", key: "certification-issuedBy", value: "" },
      { label: "Link", type: "text", key: "certification-link", value: "" },
      { label: "Date", type: "text", key: "certification-date", value: "" },
    ],
  };

  const currentFields = inputFields[activeTabResume] || [];
  const transformedField = currentFields.map(field => ({
    ...field,
    key: field.key + '-' + Math.random().toString(36).substring(7)
  }));

  useEffect(() => {
    if (activeTabResume === "personalInfo") {
      handleAdd(activeTabResume, transformedField);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto p-4 pb-0">
      <h1 className="text-3xl font-semibold mb-6">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 sm:h-[calc(100vh-76px)]">
        <div className="p-2 h-full flex flex-col gap-2">
          <Dropdown tabsData={tabsData} activeTabResume={activeTabResume} setActiveTabResume={setActiveTabResume} />
          <div className="flex items-center justify-end gap-4">
            {resumeData.visibility[activeTabResume] !== undefined && (
              <Toggle onChange={() => handleVisibility(activeTabResume)} checked={resumeData.visibility[activeTabResume]} />
            )}

            {options[activeTabResume].add && (
              <button className="p-2 text-textBrand rounded-full"
                onClick={() => {
                  handleAdd(activeTabResume, transformedField);
                }}
              >
                <AddCircle size={24} />
              </button>
            )}
          </div>
          <div className="overflow-y-auto no-scrollbar max-h-[calc(100vh-132px)] rounded-lg">
            <InputForm activeTabResume={activeTabResume} options={options} />
          </div>
        </div>
        <div className="md:col-span-2 p-2 overflow-y-auto">
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
