import { useState } from "react";

const Image = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full h-full">
      {loading && (
        <div className="relative w-full h-full">
          <div className="absolute z-10 inset-0 flex items-center justify-center bg-gray-200">
            <svg
              className="animate-spin h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${loading ? "hidden" : "block"} ${className}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default Image;
