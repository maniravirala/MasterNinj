/* eslint-disable react/prop-types */
import { useLocalStorage } from "../../hooks";
import InputForm from "./InputForm";
import ResumePreview from "./ResumePreview";
import Dropdown from "./Dropdown";

const ResumeBuilder = () => {

  const [activeTabResume, setActiveTabResume] = useLocalStorage("activeTabResume", "personalInfo");

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="p-2">
          <Dropdown tabsData={tabsData} activeTabResume={activeTabResume} setActiveTabResume={setActiveTabResume} />
          <InputForm activeTabResume={activeTabResume} />
        </div>
        <div className="md:col-span-2 p-2">
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
