import { useState, useEffect } from "react";
const stateClasses = {
  info: "ring-1 ring-blue-500 text-blue-500 focus-within:ring-blue-600",
  error: "ring-1 ring-red-500 text-red-500 focus-within:ring-red-600",
  warning: "ring-1 ring-yellow-500 text-yellow-500 focus-within:ring-yellow-600 ",
  success: "ring-1 ring-green-500 text-green-500 focus-within:ring-green-600",
  default: "ring-1 ring-borderPrimary text-textSecondary focus-within:ring-brand-500",
};

const textStateClasses = {
  info: "text-blue-500",
  error: "text-red-500",
  warning: "text-yellow-500",
  success: "text-green-500",
  default: "text-textSecondary",
};

const textFocusStateClasses = {
  info: "text-blue-600",
  error: "text-red-600",
  warning: "text-yellow-600",
  success: "text-green-600",
  default: "text-brand-600",
};


const TextArea = ({
  id,
  name,
  label = "",
  labelPlaceholder = "",
  color = "",
  value,
  onChange,
  icon,
  border = false,
  shadow = false,
  state,
  className = "",
  message = "",
}) => {
  const uniqueId = id
    ? id
    : name
      ? name + Math.random().toString(36).substring(7)
      : Math.random().toString(36).substring(7);



  const [isFocused, setIsFocused] = useState(false);
  const stateClass = stateClasses[state] || stateClasses["default"];
  const textStateClass = textStateClasses[state] || textStateClasses["default"];
  const textFocusStateClass = textFocusStateClasses[state] || textFocusStateClasses["default"];
  const borderColorClass = className.includes("border-")
    ? ""
    : "border-borderPrimary";

  useEffect(() => {
    const textarea = document.getElementById(uniqueId);
    if (!textarea) return;
    textarea.style.height = "inherit";
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.scrollTop = textarea.scrollHeight;
  }, [uniqueId, value]);


  const Label = () => {
    return (
      label && (
        <label className="mb-1 ml-3 text-sm text-gray-600" htmlFor={uniqueId}>
          {label}
        </label>
      )
    );
  };

  const Icon = () => {
    return (
      icon && (
        <div
        className={`mr-2 ${isFocused ? textFocusStateClass : textStateClass}`}
      >
          {icon}
        </div>
      )
    );
  };

  const LabelPlaceholder = () => {
    return (
      labelPlaceholder && (
        <label
          className={`absolute left-0 transform transition-all duration-200 ${isFocused || value ? "-top-[26px] text-xs" : "top-0 text-base"
            } pointer-events-none text-gray-500`}
          htmlFor={uniqueId}
        >
          {labelPlaceholder}
        </label>
      )
    );
  };

  const Message = () => {
    return (
      message && (
        <div className={`mt-1 text-xs ${textStateClass}`}>{message}</div>
      )
    )
  }

  return (
    <div className={`relative flex w-full flex-col`}>
      <Label />
      <div
        className={`relative flex items-center rounded-lg px-3 py-2 ${shadow ? shadow : "shadow-sm"} ${border ? `border ${borderColorClass}` : ""
          } ${color} ${stateClass} ${className} h-10 flex-1 transition-all duration-200 focus-within:ring-2 `}
      >
        <Icon />
        <div className="relative w-full">
          <LabelPlaceholder />
          <LocalTextArea
            id={uniqueId}
            value={value}
            onChange={onChange}
            name={name}
            className="max-h-40 w-full select-none resize-none scroll-smooth bg-transparent focus:outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
      <Message />
    </div>
  );
};

export default TextArea;

const LocalTextArea = ({ ...props }) => {
  return (
    <textarea {...props} />
  )
};
