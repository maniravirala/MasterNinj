import { Link } from "react-router-dom";
import { Star } from "iconsax-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Counter from "../../components/Counter";

const ProjectCard = ({ project }) => {
  const [isRated, setIsRated] = useState(false);

  const handleRate = () => {
    setIsRated(!isRated);
  }

  return (
    <div className="shadow-xl m-2 flex w-full max-w-[300px] gap-2 rounded-lg bg-white p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-bgSecondary">
      <div className="flex flex-col gap-2 w-3/5">
        <h2 className="truncate px-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
          {project.title}
        </h2>
        <div className="flex items-center justify-between px-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {/* {formatDate(resource.time)} */}
            25th July 2021
          </p>
          <span className="text-sm capitalize text-gray-500 dark:text-gray-400">
            {project.category}
          </span>
        </div>
        <div className="mb-3 flex items-center gap-4 px-2">
          <button
            onClick={handleRate}
            className={`flex items-center ${isRated ? "text-green-400" : "text-gray-500 dark:text-gray-400"} transition-colors duration-200`}
          >
            <Star size={20} variant={isRated ? "Bold" : "TwoTone"} />{" "}
            <span className="ml-1 text-sm"><Counter value={Number(project.rating)} /></span>
          </button>
        </div>
      </div>
      <div className="relative cursor-pointer w-2/5" >
        <Link to={`/projects/${project.id}`}>
          <img
            src={project.thumbnailUrl || "https://via.placeholder.com/150"}
            alt={project.title}
            className="h-48 w-full rounded-md object-cover"
          />
          <motion.div
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-30 opacity-0 dark:bg-opacity-50"
          >
            <span className="text-sm text-white">Click to view</span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
