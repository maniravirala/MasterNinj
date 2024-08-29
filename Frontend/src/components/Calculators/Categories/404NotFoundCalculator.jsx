// src/components/Calculators/404NotFoundCalculator.jsx

const NotFound = () => {
  return (
    <div className="text-center text-red-500">
      <h1 className="text-2xl font-bold">404 - Calculator Not Found</h1>
      <p className="text-lg">The calculator you are looking for does not exist.</p>
      <p className="text-lg">Please check the URL and try again.</p>
      <p className="text-lg">If you think this is a mistake, please contact us.</p>
    </div>
  );
};

export default NotFound;
