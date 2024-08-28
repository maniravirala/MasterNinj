
import { useState, useEffect } from 'react';
import Button from '@/components/Buttons/Button';
import { create, all } from 'mathjs';
import Icon from '@/utils/Icon';

const math = create(all);

const ScientificCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (key.match(/[0-9+\-*/().%]/)) {
      handleClick(key);
    } else if (key === 'Escape') {
      clearInput();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-20 p-4 border rounded shadow-lg bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">
            {input || '0'}
          </div>
          <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            {result || '0'}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Button symbol="C" onClick={clearInput} />
        {['(', ')', '√', '^'].map((symbol) => (
          <Button key={symbol} symbol={symbol} onClick={() => handleClick(symbol)} />
        ))}

        {['sin', 'cos', 'tan', 'log', 'ln', '7', '8', '9', '+', '-','4', '5', '6', '*', '/','1', '2', '3'].map((symbol) => (
          <Button key={symbol} symbol={symbol} onClick={() => handleClick(symbol)} />
        ))}
        <Button symbol="=" onClick={calculate} className="row-span-2" />
        <Button symbol="00" onClick={() => handleClick('00')} className="row-span-2" />
        {['.', '0'].map((symbol) => (
          <Button key={symbol} symbol={symbol} onClick={() => handleClick(symbol)} />
        ))}

        <Button key={'backspace'} onClick={() => setInput(input.slice(0, -1))} >
          <div className='ml-1'>
            <Icon name="Delete" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
