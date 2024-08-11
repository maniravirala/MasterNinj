import { useEffect, useState } from "react";
import { Example } from "../assets";

const Image = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(src || Example);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setImage(Example);
    setLoading(false);
  };

  return (
    <div className="">
      {loading && (
        <div className={`size-full flex items-center justify-center bg-gray-200 ${className}`}>
          <svg
            className="h-5 w-5 animate-spin text-gray-500"
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
      )}
      <img
        src={image}
        alt={alt}
        className={`${loading ? "hidden" : "block"} ${className}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};

export default Image;
