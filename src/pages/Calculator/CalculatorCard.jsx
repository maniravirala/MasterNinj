import { Link } from 'react-router-dom';

const CalculatorCard = ({ name, to }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <Link to={to} className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-700">
        <h2 className="text-lg font-semibold text-textBrand">{name}</h2>
      </Link>
    </div>
  );
};

export default CalculatorCard;
