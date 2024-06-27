/* eslint-disable react/prop-types */
import { Dislike, Like1 } from 'iconsax-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };
    

    return (
        <div className="bg-white dark:bg-bgSecondary w-full max-w-[300px] flex flex-col gap-2 shadow-xl\ rounded-lg p-2 m-2 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className='cursor-pointer relative' onClick={() => window.open(resource.url, '_blank')}>
                <img
                    src={resource.thumbnailUrl || 'https://via.placeholder.com/150'}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-md"
                />
                <motion.div
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2, type: 'tween' }}
                    className="inset-0 absolute bg-black bg-opacity-30 dark:bg-opacity-50 opacity-0 flex items-center justify-center rounded-md">
                    <span className="text-white text-sm">Click to view</span>
                </motion.div>
            </div>

            <h2 className="text-xl px-2 truncate font-semibold text-gray-800 dark:text-gray-100" >{resource.title}</h2>
            <div className='flex justify-between items-center px-2'>
                <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(resource.time)}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">{resource.type}</span>
            </div>
            <div className="flex gap-4 items-center mb-3 px-2">
                <button
                    onClick={handleLike}
                    className={`flex items-center ${isLiked ? 'text-green-400' : 'text-gray-500 dark:text-gray-400'} transition-colors duration-200`}
                >
                    <Like1 size={20} variant={isLiked ? 'Bold' : 'TwoTone'} /> <span className="text-sm ml-1">{resource.likes}</span>
                </button>
                <button
                    onClick={handleDislike}
                    className={`flex items-center ${isDisliked ? 'text-red-400' : 'text-gray-500 dark:text-gray-400'} transition-colors duration-200`}
                >
                    <Dislike size={20} variant={isDisliked ? 'Bold' : 'TwoTone'} /> <span className="text-sm ml-1">{resource.dislikes}</span>
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
        </div >
    );
};

export default Card;
