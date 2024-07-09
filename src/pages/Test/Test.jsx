import React, { useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState({
    settings: {
      fontSize: 16, // Default font size
    },
  });

  const inlineStyle = {
    fontSize: `${state.settings.fontSize}px`,
  };

  return (
    <div style={{ backgroundColor: 'lightgray', ...inlineStyle }}>
      <p>This is a paragraph with dynamic font size.</p>
      <button
        className="bg-blue-500 text-white p-2 m-2"
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            settings: { fontSize: prevState.settings.fontSize + 2 },
          }))
        }
      >
        Increase Font Size
      </button>
      <button
        className="bg-blue-500 text-white p-2 m-2"
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            settings: { fontSize: prevState.settings.fontSize - 2 },
          }))
        }
      >
        Decrease Font Size
      </button>
    </div>
  );
};

export default MyComponent;
