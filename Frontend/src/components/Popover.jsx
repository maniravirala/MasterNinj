import { useState, useRef, useEffect } from 'react';

const Popover = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('bottom');
    const popoverRef = useRef(null);
    const triggerRef = useRef(null);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const calculatePosition = () => {
        if (popoverRef.current && triggerRef.current) {
            const popoverHeight = popoverRef.current.clientHeight;
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const spaceAbove = triggerRect.top;
            const spaceBelow = window.innerHeight - triggerRect.bottom;
            
            console.log('spaceAbove', spaceAbove);

            if (spaceBelow >= popoverHeight + 10) {
                setPosition('bottom');
            } else if (spaceAbove >= popoverHeight + 10) {
                setPosition('top');
            } else {
                setPosition('bottom');
            }
        }
    };

    useEffect(() => {
        if (isOpen) {
            calculatePosition();
            // Add event listener to recalculate position on scroll or resize
            window.addEventListener('scroll', calculatePosition);
            window.addEventListener('resize', calculatePosition);

            // Cleanup event listeners on popover close
            return () => {
                window.removeEventListener('scroll', calculatePosition);
                window.removeEventListener('resize', calculatePosition);
            };
        }
    }, [isOpen]);

    return (
        <div className="relative inline-block" ref={triggerRef}>
            <button
                onClick={togglePopover}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow"
            >
                Open Popover
            </button>
            {isOpen && (
                <div
                    ref={popoverRef}
                    className={`absolute ${position === 'top' ? 'bottom-full' : 'top-full'} right-0 bg-white shadow-lg rounded p-2`}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default Popover;
