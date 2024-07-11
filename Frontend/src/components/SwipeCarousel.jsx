import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwipeCarousel = ({ images }) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setCurrentIndex([currentIndex + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex % images.length]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <div
        className="absolute top-0 left-0 h-full w-full flex items-center justify-between px-4"
        style={{ pointerEvents: 'none' }}
      >
        <button
          onClick={() => paginate(-1)}
          className="text-white bg-gray-800 bg-opacity-50 rounded-full p-2 pointer-events-auto"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          className="text-white bg-gray-800 bg-opacity-50 rounded-full p-2 pointer-events-auto"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SwipeCarousel;

