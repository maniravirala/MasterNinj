/* eslint-disable react/prop-types */
import { Dislike, Like1 } from "iconsax-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Counter from "../../components/Counter";

const Card = ({ resource }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      resource.likes -= 1;
    } else {
      resource.likes += 1;
      if (isDisliked) {
        resource.dislikes -= 1;
        setIsDisliked(false);
      }
    }
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    if (isDisliked) {
      resource.dislikes -= 1;
    } else {
      resource.dislikes += 1;
      if (isLiked) {
        resource.likes -= 1;
        setIsLiked(false);
      }
    }
    setIsDisliked(!isDisliked);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="shadow-xl\\ m-2 flex w-full max-w-[300px] flex-col gap-2 rounded-lg bg-white p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-bgSecondary">
      <div
        className="relative cursor-pointer"
        onClick={() => window.open(resource.url, "_blank")}
      >
        <img
          src={resource.thumbnailUrl || "https://via.placeholder.com/150"}
          alt={resource.title}
          className="h-48 w-full rounded-md object-cover"
        />
        <motion.div
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2, type: "tween" }}
          className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-30 opacity-0 dark:bg-opacity-50"
        >
          <span className="text-sm text-white">Click to view</span>
        </motion.div>
      </div>

      <h2 className="truncate px-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
        {resource.title}
      </h2>
      <div className="flex items-center justify-between px-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {formatDate(resource.time)}
        </p>
        <span className="text-sm capitalize text-gray-500 dark:text-gray-400">
          {resource.type}
        </span>
      </div>
      <div className="mb-3 flex items-center gap-4 px-2">
        <button
          onClick={handleLike}
          className={`flex items-center ${isLiked ? "text-green-400" : "text-gray-500 dark:text-gray-400"} transition-colors duration-200`}
        >
          <Like1 size={20} variant={isLiked ? "Bold" : "TwoTone"} />{" "}
          <span className="ml-1 text-sm"><Counter value={resource.likes}/></span>
        </button>
        <button
          onClick={handleDislike}
          className={`flex items-center ${isDisliked ? "text-red-400" : "text-gray-500 dark:text-gray-400"} transition-colors duration-200`}
        >
          <Dislike size={20} variant={isDisliked ? "Bold" : "TwoTone"} />{" "}
          <span className="ml-1 text-sm"><Counter value={resource.dislikes}/></span>
        </button>
      </div>
      {/* <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
                View Resource
            </a> */}
    </div>
  );
};

export default Card;
