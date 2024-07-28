// src/pages/Calculator/components/Button.jsx

const Button = ({ symbol, onClick, children, className }) => {

  const symbols = ['(', ')', '%', '√', '^'];
  const operators = ['+', '-', '*', '/'];
  const isNumber = (value) => !symbols.includes(value);
  const isOperator = (value) => operators.includes(value);

  const equalClass = 'bg-bgBrand text-white';
  const cancelClass = 'bg-orange-500 text-white';
  const symbolClass = 'bg-orange-100 text-orange-800 dark:bg-orange-400 dark:text-orange-200 dark:bg-opacity-20';
  const operatorClass = 'bg-brand-200 text-brand-800 dark:bg-brand-400 dark:text-brand-200 dark:bg-opacity-20';
  const defaultClass = 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200';

  let buttonClass = defaultClass;
  if (symbol === '=') buttonClass = equalClass;
  if (symbol === 'C') buttonClass = cancelClass;
  if (!isNumber(symbol)) buttonClass = symbolClass;
  if (isOperator(symbol)) buttonClass = operatorClass;

  return (
    <button
      className={`p-4 rounded-xl focus:outline-none ${buttonClass} ${className}`}
      onClick={onClick}
    >
      {symbol || children}
    </button>
  );
};

export default Button;
