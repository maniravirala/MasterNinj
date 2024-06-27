/* eslint-disable react/prop-types */
import React from 'react';

const ResumePreview = ({ previewData }) => {
  return (
    <div className="mt-4">
      {previewData.map((fields, setIndex) => (
        <div key={setIndex} className="mb-4 border p-4 rounded">
          {fields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700">{field.label}:</label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                {field.value || 'N/A'}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;
