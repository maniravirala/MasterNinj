/* eslint-disable react/prop-types */
import { useResume } from "../../contexts/ResumeContext";

const InputForm = ({ activeTabResume }) => {
  const { resumeData, handleAdd, handleRemove, handleChange, handleReset } = useResume();

  const inputFields = {
    personalInfo: [
      { label: "Name", type: "text", key: "name" },
      { label: "Email", type: "email", key: "email" },
      { label: "Phone", type: "tel", key: "phone" },
      { label: "Address", type: "address", key: "address" },
      { label: "Github", type: "text", key: "github" },
      { label: "LinkedIn", type: "text", key: "linkedin" },
      { label: "Position", type: "text", key: "position" }
    ],
    education: [
      { label: "Degree", type: "text", key: "education-degree", value: "" },
      { label: "Institute", type: "text", key: "education-institute", value: "" },
      { label: "Year", type: "number", key: "education-year", value: "" },
    ],
    internships: [
      { label: "Company", type: "text", key: "internship-company", value: "" },
      { label: "Role", type: "text", key: "internship-role", value: "" },
      { label: "Duration", type: "text", key: "internship-duration", value: "" },
    ],
    summerTraining: [
      { label: "Company", type: "text", key: "summerTraining-company", value: "" },
      { label: "Role", type: "text", key: "summerTraining-role", value: "" },
      { label: "Duration", type: "text", key: "summerTraining-duration", value: "" },
    ],
    achievements: [
      { label: "Title", type: "text", key: "achievement-title", value: "" },
      { label: "Date", type: "date", key: "achievement-date", value: "" },
      { label: "Description", type: "text", key: "achievement-description", value: "" },
    ],
    extraCurricularActivities: [
      { label: "Activity", type: "text", key: "activity", value: "" },
      { label: "Date", type: "date", key: "activity-date", value: "" },
    ],
    technicalSkills: [
      { label: "Domain", type: "text", key: "domain", value: "" },
      { label: "Skill", type: "text", key: "skill", value: "" },
    ],
    projects: [
      { label: "Project", type: "text", key: "project", value: "" },
    ],
    certifications: [
      { label: "Title", type: "text", key: "certification-title", value: "" },
      { label: "Issued By", type: "text", key: "certification-issuedBy", value: ""},
      { label: "Link", type: "text", key: "certification-link", value: ""},
      { label: "Date", type: "date", key: "certification-date", value: "" },
    ],
  };

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

  const currentFields = inputFields[activeTabResume] || [];
  const transformedField = currentFields.map(field => ({
    ...field,
    key: field.key + '-' + Math.random().toString(36).substring(7)
  })); // Extract the first transformed object


  const currentData = resumeData[activeTabResume] || [];

  return (
    <div className="bg-green-200">
      {currentData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-xl font-semibold text-gray-600">No data available</h2>
          <p className="text-sm text-gray-400">Click on Add to add new data</p>
        </div>
      ) : (
        <div>
          {currentData.map((field, index) => (
            <div key={index} className="flex flex-col w-full p-5 gap-8">
              {field.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <label htmlFor={item.key} className="text-sm text-gray-600">{item.label}</label>
                  <input
                    type="text"
                    id={item.key}
                    value={item.value}
                    onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)}
                    className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
                  />
                </div>
              ))}
              {options[activeTabResume].remove && (
                <button
                  onClick={() => { handleRemove(activeTabResume, index) }}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >Remove</button>
              )}
              {options[activeTabResume].reset && (
                <button
                  type="button"
                  onClick={() => handleReset(activeTabResume, index)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >Reset</button>
              )}
            </div>
          ))
          }
        </div>
      )}
      {options[activeTabResume].add && (
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => {
            handleAdd(activeTabResume, transformedField);
          }}
        >Add</button>
      )}
    </div>
  );
}

export default InputForm;
