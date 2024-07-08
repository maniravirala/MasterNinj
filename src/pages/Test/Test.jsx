import Input from "../../components/Input";
import Icon from "../../utils/Icon";
import TextArea from "../../components/TextArea";
import { useTest } from "./Test.context";
import { useState } from "react";

const Test = () => {
  const options = {
    personalInfo: { remove: true, reset: true },
    technicalSkills: { remove: true, reset: true },
    certifications: { remove: true, reset: true },
    extraCurricularActivities: { remove: true, reset: true },
    internships: { remove: true, reset: true },
    summerTraining: { remove: true, reset: true },
    projects: { remove: true, reset: true },
    achievements: { remove: true, reset: true },
    education: { remove: true, reset: true },
  };

  const activeTabResume = "education";

  const {
    handleRemove,
    handleChange,
    handleReset,
    state,
    undo,
    canUndo,
    handleProfilePic
  } = useTest();

  const [notification, setNotification] = useState(null);

  const triggerRemove = (section, index) => {
    handleRemove(section, index);
    setNotification({
      message: `Removed an item from ${section}.`,
      action: undo,
    });
  };

  const triggerReset = (section, index) => {
    handleReset(section, index);
    setNotification({
      message: `Reset an item in ${section}.`,
      action: undo,
    });
  };

  return (
    <div className="h-full">
      {notification && (
        <div className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-lg flex items-center gap-2">
          <span>{notification.message}</span>
          {canUndo && (
            <button
              onClick={() => {
                notification.action();
                setNotification(null);
              }}
              className="ml-4 bg-white text-blue-500 p-2 rounded-lg hover:bg-blue-100"
            >
              Undo
            </button>
          )}
          <button
            onClick={() => setNotification(null)}
            className="ml-4 bg-white text-red-500 p-2 rounded-lg hover:bg-red-100"
          >
            Dismiss
          </button>
        </div>
      )}
      {state[activeTabResume].length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-600">
            No data available
          </h2>
          <p className="text-sm text-gray-400">Click on Add to add new data</p>
        </div>
      ) : (
        <div>
          <p>{JSON.stringify(state[activeTabResume])}</p>
          <input
            type="text"
            value={state.profilePic}
            onChange={(e) => handleProfilePic(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          />

          {state[activeTabResume].map((field, index) => (
            <div key={index} className="flex w-full flex-col gap-6 p-2 pt-5">
              {field.map((item, itemIndex) => (
                <div key={itemIndex}>
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

export default Test;

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
