import { useState } from "react";
import { motion } from "framer-motion";

const Star = ({ className, fill }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill={fill}
        viewBox="0 0 24 24"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const Rating = ({ value, setValue }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className="flex gap-1">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <motion.span
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        key={index}
                        className="cursor-pointer"
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => setValue(index)}
                    >
                        <Star
                            className="size-6"
                            fill={index <= (hover || value) ? '#ffc107' : '#d0d5dd'}
                        />
                    </motion.span>
                );
            })}
        </div>
    );
}

export default Rating;