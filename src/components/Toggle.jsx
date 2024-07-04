import React, { useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';

const Toggle = forwardRef(({ checked, onChange }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    useImperativeHandle(ref, () => ({
        toggle: () => onChange(!checked),
    }));

    return (
        <motion.div
            className={`w-12 h-6 rounded-full p-1 flex cursor-pointer ${checked ? 'justify-end' : 'justify-start'}`}
            onClick={() => onChange(!checked)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ backgroundColor: checked ? '#47CD89' : '#F97066' }}
        >
            <motion.div
                className="bg-white w-4 h-4 rounded-full"
                layout
                transition={spring}
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            />
        </motion.div>
    );
});

export default Toggle;

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};
