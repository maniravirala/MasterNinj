// src/components/Test.jsx

import { useState } from 'react';

const Test = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Use a safer evaluation method in production
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition duration-500">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs w-full">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">
              {input || '0'}
            </div>
            <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              {result || '0'}
            </div>
          </div>
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={() => clearInput()}
          >
            C
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['(', ')', '√', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%', '='].map(
            (symbol) => (
              <button
                key={symbol}
                className={`p-4 rounded-lg focus:outline-none ${
                  symbol === '='
                    ? 'bg-bgBrand text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}
                onClick={() =>
                  symbol === '=' ? calculate() : handleClick(symbol)
                }
              >
                {symbol}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;



        {/* {filteredCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <div className="grid gap-4">
              {category.calculators.map((calc) => (
                <CalculatorCard
                  key={calc}
                  name={calc}
                  to={`/calculators/${calc.toLowerCase().replace(' ', '-')}`}
                />
              ))}
            </div>
          </div>
        ))}
        
        {debouncedSearchTerm !== '' && filteredCategories.length === 0 && (
          <p className="text-gray-500">No calculators found for "{debouncedSearchTerm}"</p>
        )} */}