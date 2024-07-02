/* eslint-disable react/prop-types */
import { useResume } from "../../contexts/ResumeContext";
import Input from "../../components/Input";

const InputForm = ({ activeTabResume }) => {
  const { resumeData, handleAdd, handleRemove, handleChange, handleReset } = useResume();

  const inputFields = {
    personalInfo: [
      { label: "Name", type: "text", key: "name" },
      { label: "Email", type: "email", key: "email" },
      { label: "Phone", type: "tel", key: "phone" },
      { label: "Address", type: "address", key: "address" },
      { label: "Github", type: "link", key: "github" },
      { label: "LinkedIn", type: "link", key: "linkedin" },
      { label: "Position", type: "text", key: "position" }
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
                  {/* <label htmlFor={item.key} className="text-sm text-gray-600">{item.label}</label> */}
                  {item.type === "textArea" ? (
                    <textarea
                      id={item.key}
                      value={item.value}
                      onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  ) : item.type === "dropdown" ? (
                    <select
                      id={item.key}
                      name={item.key}
                      value={item.value}
                      onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select</option>
                      {Object.keys(item.options).map((option, index) => (
                        <option key={index} value={option}>{item.options[option]}</option>
                      ))}
                    </select>
                  ) : (
                    //<input
                    //   type="text"
                    //   id={item.key}
                    //   value={item.value}
                    //   onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)}
                    //   className="bg-white dark:bg-slate-700 text-background-dark dark:text-gray-300"
                    // />
                    <LocalInput type={item.type} label={item.label} value={item.value} onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)} id={item.key} />
                  )
                  }
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

const LocalInput = ({ label, type, value, onChange, id }) => {
  return (
    <div className="flex flex-col">
      <Input type={type} value={value} onChange={onChange} id={id} labelPlaceholder={label} />
    </div>
  );
}
