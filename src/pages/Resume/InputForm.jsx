import { useResume } from "../../contexts/ResumeContext";
import Input from "../../components/Input";
import Icon from "../../utils/Icon";
import TextArea from "../../components/TextArea";

const InputForm = ({ activeTabResume, options }) => {
  const { resumeData, handleRemove, handleChange, handleReset } = useResume();
  const currentData = resumeData[activeTabResume] || [];

  const triggerRemove = (section, index) => {
    handleRemove(section, index);
  }

  const triggerReset = (section, index) => {
    handleReset(section, index);
  }
  
  return (
    <div className="h-full">
      {currentData.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-600">
            No data available
          </h2>
          <p className="text-sm text-gray-400">Click on Add to add new data</p>
        </div>
      ) : (
        <div>
          {currentData.map((field, index) => (
            <div key={index} className="flex w-full flex-col gap-6 p-2 pt-5">
              {field.map((item, itemIndex) => (
                <div key={itemIndex}>
                  {/* <label htmlFor={item.key} className="text-sm text-gray-600">{item.label}</label> */}
                  {item.type === "textArea" ? (
                    <LocalTextArea
                      label={item.label}
                      value={item.value}
                      onChange={(e) =>
                        handleChange(e, activeTabResume, index, itemIndex)
                      }
                      id={item.key}
                      icon={item.icon}
                    />
                  ) : item.type === "dropdown" ? (
                    <LocalDropdown
                      label={item.label}
                      value={item.value}
                      onChange={(e) =>
                        handleChange(e, activeTabResume, index, itemIndex)
                      }
                      id={item.key}
                      options={item.options}
                    />
                  ) : (
                    <LocalInput
                      type={item.type}
                      label={item.label}
                      value={item.value}
                      onChange={(e) =>
                        handleChange(e, activeTabResume, index, itemIndex)
                      }
                      id={item.key}
                      icon={item.icon}
                    />
                  )}
                </div>
              ))}
              <div className="flex flex-wrap justify-center gap-4">
                {options[activeTabResume].remove && (
                  <button
                    onClick={() => {
                      triggerRemove(activeTabResume, index);
                    }}
                    className="rounded-lg border-2 border-red-400 px-4 py-1 text-red-400 hover:bg-red-100"
                  >
                    Remove
                  </button>
                )}
                {options[activeTabResume].reset && (
                  <button
                    type="button"
                    onClick={() => triggerReset(activeTabResume, index)}
                    className="rounded-lg border-2 border-blue-400 px-4 py-1 text-blue-400 hover:bg-blue-100"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputForm;

const LocalInput = ({ label, type, value, onChange, id, icon }) => {
  const renderIcon = () => {
    if (icon && icon.name && icon.lib) {
      return <Icon name={icon.name} lib={icon.lib} size={16} />;
    }
    return null;
  };
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      labelPlaceholder={label}
      iconBefore={renderIcon()}
    />
  );
};

const LocalTextArea = ({ label, value, onChange, id, icon }) => {
  const renderIcon = () => {
    if (icon && icon.name && icon.lib) {
      return (
        <Icon
          name={icon.name}
          lib={icon.lib}
          size={20}
          className="bg-bgSecondary hover:bg-brand-900"
        />
      );
    }
    return null;
  };
  return (
    <TextArea
      labelPlaceholder={label}
      value={value}
      onChange={onChange}
      id={id}
      icon={renderIcon()}
    />
  );
};

const LocalDropdown = ({ label, value, onChange, id, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
      >
        <option value="">Select</option>
        {Object.keys(options).map((option, index) => (
          <option key={index} value={option}>
            {options[option]}
          </option>
        ))}
      </select>
    </div>
  );
};
