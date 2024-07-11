import { ArrowDown, Star } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "../../components/Image";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${project.id}`);
  };

  const techStack = project.techStack || [];

  return (
    <motion.div 
    className='flex items-center w-full gap-4 p-4 rounded-xl sm:bg-transparent border border-borderPrimary '>
      {project.thumbnailUrl && (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="sm:block hidden flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer" onClick={handleNavigate}>
          <Image src={project.thumbnailUrl} alt={project.title} className={`w-full h-full object-cover`} />
        </motion.div>
      )}

      <div className="flex-grow flex flex-col gap-2 justify-evenly">
        <div className="flex gap-2 items-center">
          <span className="text-lg font-semibold truncate hover:text-brand-700 cursor-pointer" onClick={handleNavigate}>{project.title}</span>
          <span className="sm:block hidden h-[1px] w-3 bg-black mb-1"></span>
          <span className="sm:block hidden text-sm">{project.author}</span>
        </div>
        <div className="overflow-hidden line-clamp-2">
          <p className="text-sm ">{project.description}</p>
        </div>
        <div className="text-sm items-center gap-4 flex">
          <div className={`flex items-center justify-center transition-colors duration-200`}>
            <Star size={20} variant={'TwoTone'} className="mb-1" />
            <span className="ml-1">{project.rating}</span>
          </div>
          <div className="flex items-center justify-center transition-colors duration-200">
            <ArrowDown size={20} variant={'TwoTone'} className="mb-1" />
            <span className="ml-1">{project.downloadCount}</span>
          </div>
          <span className="capitalize truncate">{project.category}</span>
          <div className="items-center gap-2 sm:flex hidden ">
            {techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-1.5 py-1 bg-bgActive text-textSecondary rounded-md text-xs">{tech}</span>
            ))}
            {techStack.length > 3 && (
              <span className="px-1.5 py-1 bg-bgActive text-textSecondary rounded-md text-xs">+{techStack.length - 3} more</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
