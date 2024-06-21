/* eslint-disable react/prop-types */
import { Dislike, Like1 } from 'iconsax-react';
import { useState } from 'react';

const Card = ({ resource }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    }

    const handleDislike = () => {
        setDislikes((prevDislikes) => prevDislikes + 1);
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
            <img
                src={resource.thumbnailUrl || 'default-thumbnail.png'}
                alt={resource.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold mb-2">{resource.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 truncate">{resource.description}</p>
            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">{resource.type}</div>
                <div className="flex items-center space-x-4">
                    <button onClick={handleLike} className="flex items-center text-green-600">
                        <Like1 /> <span className="ml-1">{likes}</span>
                    </button>
                    <button onClick={handleDislike} className="flex items-center text-red-600">
                        <Dislike /> <span className="ml-1">{dislikes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
