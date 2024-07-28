import Icon from '../../utils/Icon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useHover } from '@uidotdev/usehooks';

const CalculatorCard = ({ name, to, icon }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-[rgba(71,75,255,0.075)_0px_2px_3px] rounded-lg overflow-hidden transition-all duration-200">
      <Link to={to} className="flex flex-col items-center justify-center p-6 h-full">
        {icon &&
          <motion.div
            animate={{ scale: isHovered ? 1.3 : 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className='text-blue-500 mb-4'>
            <Icon name={icon.name} lib={icon.lib} size={24} />
          </motion.div>
        }
        <h2 className="text-lg font-medium text-center text-gray-800 dark:text-gray-200">{name}</h2>
      </Link>
    </div>
  );
};

export default CalculatorCard;
