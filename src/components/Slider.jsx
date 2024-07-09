import { useId, useState } from 'react';
import Counter from './Counter';

const Slider = ({ min, max, step, initialValue, onChange, label }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const uniqueId = useId();

    return (
        <div className="w-full flex flex-col gap-4">
            {label &&
                <label htmlFor={uniqueId} className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    {label}<span className='mx-1'>:</span><Counter value={value} />
                </label>
            }
            <div className="flex justify-center items-center gap-3">
                {min && (
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{min}</span>
                    </div>
                )}
                <input
                    id={uniqueId}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                {max && (
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>{max}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
