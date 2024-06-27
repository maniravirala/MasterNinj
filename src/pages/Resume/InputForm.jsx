/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const InputForm = ({ data, options, activeTabResume }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }
    , [data]);


  const handleAdd = () => {
    const newSet = data[0].map(field => ({
      ...field,
      key: field.label.toLowerCase().replace(' ', '-') + '-' + Math.random().toString(36).substring(7),
    }));
    setFormData([...formData, newSet]);
    console.log('newSet:', newSet);
  };

  const handleRemove = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setFormData(data);
  };

  const handleChange = (e, setIndex, fieldIndex) => {
    const { value } = e.target;
    const newFormData = [...formData];
    newFormData[setIndex][fieldIndex].value = value;
    setFormData(newFormData);
  };

  return (
    <div>
      {formData.map((fields, setIndex) => (
        <div key={setIndex} className="mb-4 border p-4 rounded">
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={field.key}
                className="block text-gray-700">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.key}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  rows="3"
                  onChange={(e) => handleChange(e, setIndex, index)}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.key}
                  className="mt-1 block w-full bg-gray-300 p-2 rounded-md border-gray-300 shadow-sm"
                  onChange={(e) => handleChange(e, setIndex, index)}
                />
              )}
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
