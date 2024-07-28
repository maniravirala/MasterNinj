
const Button = ({ children, onClick, disabled, loading, className, variant='fill' }) => {

    const getClassByVariant = (variant) => {
        const classes = {
            fill: 'bg-bgBrand hover:bg-brand-700 active:bg-bgBrand text-white',
            outline: 'border border-borderPrimary hover:border-brand-400 active:border-brand-600 text-gray-600 dark:text-gray-400',
            text: 'text-brand-700 hover:text-bgBrand active:text-brand-700'
        };
        return classes[variant.toLowerCase()] || classes.fill;
    };
    
    const localClass = getClassByVariant(variant);
    

    return (
        <button
            className={`${localClass} px-4 py-2 rounded-md shadow-md hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};

export default Button;