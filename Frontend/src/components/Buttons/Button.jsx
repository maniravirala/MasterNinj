
const Button = ({ children, onClick, disabled, loading, className }) => {
    return (
        <button
            className={`bg-bgBrand hover:bg-brand-700 active:bg-bgBrand text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};

export default Button;