import { useState, useEffect } from "react";

const stateClasses = {
  info: "bg-blue-100 text-blue-700",
  error: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  success: "bg-green-100 text-green-700",
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
}) => {
  const uniqueId =
    id !== ""
      ? id
      : name !== ""
        ? name + Math.random().toString(36).substring(7)
        : Math.random().toString(36).substring(7);

  const [isFocused, setIsFocused] = useState(false);
  const stateClass = stateClasses[state] || state;
  const borderColorClass = className.includes("border-")
    ? ""
    : "border-borderPrimary";

  useEffect(() => {
    const textarea = document.getElementById(uniqueId);
    textarea.style.height = "inherit";
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.scrollTop = textarea.scrollHeight;
  }, [uniqueId, value]);

  return (
    <div className={`relative flex w-full flex-col`}>
      {label && (
        <label className="mb-1 ml-3 text-sm text-gray-600" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {icon}
        </div>
      )}
      <div
        className={`flex items-center rounded-lg px-3 py-2 ${shadow ? shadow : "shadow-sm"} ${
          border ? `border ${borderColorClass}` : ""
        } ${color} ${
          stateClass ? stateClass : "bg-bgSecondary text-textSecondary"
        } h-10 flex-1 ${className}`}
      >
        <div className="relative w-full">
          {labelPlaceholder && (
            <label
              className={`absolute left-0 transform transition-all duration-200 ${
                isFocused || value ? "-top-[26px] text-xs" : "top-0 text-base"
              } pointer-events-none text-gray-500`}
              htmlFor={uniqueId}
            >
              {labelPlaceholder}
            </label>
          )}
          <textarea
            id={id}
            value={value}
            onChange={onChange}
            className="max-h-40 w-full select-none resize-none scroll-smooth bg-transparent focus:outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
