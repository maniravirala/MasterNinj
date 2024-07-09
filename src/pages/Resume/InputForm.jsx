import { useResume } from "../../contexts/ResumeContext";
import Input from "../../components/Input";
import Icon from "../../utils/Icon";
import TextArea from "../../components/TextArea";
import { useState } from "react";
import Lottie from "react-lottie";
import { arrowLottie } from "../../assets"; 

const InputForm = ({ activeTabResume, options }) => {
  const { state, handleRemove, handleChange, handleReset, undo, canUndo } = useResume();
  const currentData = state[activeTabResume] || [];
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
      {currentData.length === 0 ? (<EmptyBlock />) : (
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

const EmptyBlock = () => {
  return (
    <div className="grid grid-rows-12 grid-cols-12 gap-4">
      <div className="h-48 col-start-5 col-end-13 row-start-1 row-end-6 relative overflow-hidden">
        <div className="flex items-center gap-2 z-10 absolute -right-5 transform translate-x-1/4 -translate-y-1/4 rotate-180">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: arrowLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            isClickToPauseDisabled={true}
            height={300}
            width={300}
          />
        </div>
      </div>

      <div className="row-start-6 row-end-13 col-span-12 flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-semibold text-gray-600">No data available</h2>
          <p className="text-sm text-gray-400">Click on Add to add new data</p>
        </div>
      </div>
    </div>
  );
};
