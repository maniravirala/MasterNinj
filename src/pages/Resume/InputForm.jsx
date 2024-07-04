import { useResume } from "../../contexts/ResumeContext";
import Input from "../../components/Input";
import Icon from "../../utils/Icon";

const InputForm = ({ activeTabResume, options }) => {
  const { resumeData, handleRemove, handleChange, handleReset } = useResume();

  const currentData = resumeData[activeTabResume] || [];

  return (
    <div className="h-full">
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
                    <LocalTextArea label={item.label} value={item.value} onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)} id={item.key} icon={item.icon} />
                  ) : item.type === "dropdown" ? (
                    <LocalDropdown label={item.label} value={item.value} onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)} id={item.key} options={item.options} />
                  ) : (
                    <LocalInput type={item.type} label={item.label} value={item.value} onChange={(e) => handleChange(e, activeTabResume, index, itemIndex)} id={item.key} icon={item.icon} />
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
    </div>
  );
}

export default InputForm;

const LocalInput = ({ label, type, value, onChange, id, icon }) => {
  const renderIcon = () => {
    if (icon && icon.name && icon.lib) {
      return <Icon name={icon.name} lib={icon.lib} size={20} className="text-gray-400 dark:text-gray-500 hover:text-brand-900" />;
    }
    return null;
  };
  return (
    <div className="flex flex-col">
      <Input type={type} value={value} onChange={onChange} id={id} labelPlaceholder={label} iconBefore={renderIcon()} />
    </div>
  );
}

const LocalTextArea = ({ label, value, onChange, id, icon }) => {
  const renderIcon = () => {
    if (icon && icon.name && icon.lib) {
      return <Icon name={icon.name} lib={icon.lib} size={20} className="bg-bgSecondary hover:bg-brand-900" />;
    }
    return null;
  };
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm text-gray-600">{label}</label>
      {renderIcon()}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

const LocalDropdown = ({ label, value, onChange, id, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm text-gray-600">{label}</label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      >
        <option value="">Select</option>
        {Object.keys(options).map((option, index) => (
          <option key={index} value={option}>{options[option]}</option>
        ))}
      </select>
    </div>
  );
}
