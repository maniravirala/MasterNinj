/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const InputForm = ({ data, options, setPreviewData }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setPreviewData(formData);
  }, [formData, setPreviewData]);

  const handleAdd = () => {
    const newSet = data[0].map(field => ({ ...field }));
    setFormData([...formData, newSet]);
  };

  const handleRemove = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setFormData(data);
  };

  return (
    <div>
      {formData.map((fields, setIndex) => (
        <div key={setIndex} className="mb-4 border p-4 rounded">
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700">{field.label}</label>
              <input 
                type={field.type} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
                onChange={(e) => {
                  const newFormData = [...formData];
                  newFormData[setIndex][index].value = e.target.value;
                  setFormData(newFormData);
                }}
              />
            </div>
          ))}
          {options.remove && (
            <button 
              type="button" 
              onClick={() => handleRemove(setIndex)} 
              className="text-red-500 ml-2"
            >
              Remove Set
            </button>
          )}
        </div>
      ))}
      {options.add && (
        <button 
          type="button" 
          onClick={handleAdd} 
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Set
        </button>
      )}
      {options.reset && (
        <button 
          type="button" 
          onClick={handleReset} 
          className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default InputForm;
