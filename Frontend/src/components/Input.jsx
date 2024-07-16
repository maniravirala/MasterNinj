import PropTypes from "prop-types";
import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";
import { AnimatePresence, motion } from "framer-motion";

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

// Function to calculate password strength
const calculatePasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength += 20;
  if (/[A-Z]/.test(password)) strength += 20;
  if (/[a-z]/.test(password)) strength += 20;
  if (/\d/.test(password)) strength += 20;
  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) strength += 20;
  return strength;
};

const Input = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
  placeholderClassName = "",
  value = "",
  onChange,
  className = "",
  iconBefore = null,
  iconAfter = null,
  label = "",
  labelPlaceholder = "",
  color = "",
  state = "",
  progress = false,
  loading = false,
  border = false,
  shadow = false,
  visiblePassword = false,
  message = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const stateClass = stateClasses[state] || stateClasses['default'];
  const textStateClass = textStateClasses[state] || textStateClasses['default'];
  const textFocusStateClass = textFocusStateClasses[state] || textFocusStateClasses['default'];
  const borderColorClass = className.includes("border-")
    ? ""
    : "border-borderPrimary";

  // Calculate password strength if progress is true and type is password
  const passwordStrength =
    progress && type === "password" ? calculatePasswordStrength(value) : 0;

  const uniqueId =
    id !== ""
      ? id
      : name !== ""
        ? name + Math.random().toString(36).substring(7)
        : Math.random().toString(36).substring(7);

  return (
    <div className={`relative flex w-full flex-col`}>
      {label && (
        <label className="select-none mb-1 ml-3 text-sm text-gray-600" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <div
        className={`flex items-center rounded-lg px-3 py-2 ${shadow ? shadow : "shadow-sm"} ${border ? `border ${borderColorClass}` : ""
          } ${color} ${stateClass} ${className} h-10 flex-1 transition-all duration-200 focus-within:ring-2 `}
      >
        {iconBefore && (
          <div
            className={`mr-2 ${isFocused ? textFocusStateClass : textStateClass}`}
          >
            {iconBefore}
          </div>
        )}
        <AnimatePresence>
          {type === "link" &&
            (isFocused || value) &&
            (value ? (
              <div className="mr-1 select-none text-gray-500">
                <span>https://</span>{" "}
                <span className="h-full w-2 bg-blue-400" />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="mr-2 select-none text-sm text-gray-500"
              >
                <span>https://</span>{" "}
                <span className="h-full w-2 bg-blue-400" />
              </motion.div>
            ))}
        </AnimatePresence>

        <div className="relative w-full">
          {labelPlaceholder && (
            <label
              className={`absolute left-0 select-none transform transition-all duration-200 ${isFocused || value ? "-top-[26px] text-xs" : "top-0 text-base"
                } pointer-events-none text-gray-500`}
              htmlFor={uniqueId}
            >
              {labelPlaceholder}
            </label>
          )}
          <input
            type={visiblePassword ? (showPassword ? "text" : "password") : type}
            id={uniqueId}
            name={name}
            // placeholder={isFocused || value ? placeholder : ""}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full select-none bg-transparent focus:outline-none ${placeholderClassName}`}
            {...props}
          />
          <LocalInput
            type={visiblePassword ? (showPassword ? "text" : "password") : type}
            id={uniqueId}
            name={name}
            // placeholder={isFocused || value ? placeholder : ""}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full select-none bg-transparent focus:outline-none ${placeholderClassName}`}
            {...props}
          />
        </div>
        {iconAfter && <div className="ml-2">{iconAfter}</div>}
        {visiblePassword && type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2"
          >
            {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
          </button>
        )}
        {loading && (
          <div className="ml-2">
            <div className="h-6 w-6 animate-spin rounded-full border-3 border-gray-300 border-t-blue-600" />
          </div>
        )}
      </div>
      {progress && type === "password" && value.length > 0 && (
        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-red-300">
          <div
            className="h-full bg-success-300"
            style={{ width: `${passwordStrength}%` }}
          ></div>
        </div>
      )}
      {message && <div className={`mt-1 text-xs ${textStateClass}`}>{message}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderClassName: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  label: PropTypes.string,
  labelPlaceholder: PropTypes.string,
  color: PropTypes.string,
  state: PropTypes.string,
  progress: PropTypes.bool,
  loading: PropTypes.bool,
  border: PropTypes.bool,
  shadow: PropTypes.bool,
  visiblePassword: PropTypes.bool,
  message: PropTypes.string,
};

export default Input;

const LocalInput = ({ ...props }) => {
  return (
    <input {...props} />
  )
}