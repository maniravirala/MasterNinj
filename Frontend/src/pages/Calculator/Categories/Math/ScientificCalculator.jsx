import { useState } from 'react';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // For simplicity, but eval should be avoided in production
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-4 border rounded shadow-lg bg-white dark:bg-gray-800">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border rounded mb-2"
        />
        <input
          type="text"
          value={result}
          readOnly
          className="w-full p-2 text-lg text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border rounded"
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {['7', '8', '9', '/', 'sin'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-gray-200 dark:bg-gray-600 text-lg rounded"
          >
            {value}
          </button>
        ))}
        {['4', '5', '6', '*', 'cos'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-gray-200 dark:bg-gray-600 text-lg rounded"
          >
            {value}
          </button>
        ))}
        {['1', '2', '3', '-', 'tan'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className="p-2 bg-gray-200 dark:bg-gray-600 text-lg rounded"
          >
            {value}
          </button>
        ))}
        {['0', '.', '=', '+', 'sqrt'].map((value) => (
          <button
            key={value}
            onClick={value === '=' ? handleCalculate : () => handleButtonClick(value)}
            className={`p-2 ${value === '=' ? 'bg-blue-500 dark:bg-blue-700 text-white' : 'bg-gray-200 dark:bg-gray-600'} text-lg rounded`}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={handleClear} className="w-full p-2 mt-4 bg-red-500 dark:bg-red-700 text-white rounded">
        Clear
      </button>
    </div>
  );
};

export default ScientificCalculator;
