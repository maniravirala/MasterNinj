import React, { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import Input from '../../components/Input';
import CalculatorCard from './CalculatorCard';
import { useDebounce } from '@uidotdev/usehooks';

const Calculators = () => {
  const categories = [
    { name: 'Academic', calculators: ['GPA', 'Grade', 'Attendance', 'Exam Marks'] },
    { name: 'Conversion', calculators: ['Currency', 'Length', 'Weight', 'Temperature', 'Volume', 'Time Zone', 'Unit'] },
    { name: 'Financial', calculators: ['Loan', 'Investment', 'Budget', 'Mortgage', 'Savings'] },
    { name: 'Health', calculators: ['BMI', 'Calorie', 'Water Intake', 'Heart Rate'] },
    { name: 'Math', calculators: ['Basic', 'Scientific', 'Percentage', 'Fraction', 'Standard Deviation', 'Triangle'] },
    { name: 'Programming', calculators: ['ASCII', 'Binary'] },
    { name: 'Miscellaneous', calculators: ['Age', 'Date', 'Days', 'Time', 'Tip'] }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Filter categories based on search term
  const filteredCategories = categories.map(category => ({
    ...category,
    calculators: category.calculators.filter(calc =>
      calc.includes(debouncedSearchTerm.toLowerCase())
    )
  })).filter(category => category.calculators.length > 0 || debouncedSearchTerm === '');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Calculators</h1>
      <div className="search-bar flex items-center justify-center gap-x-2 mb-4">
        <Input
          type="search"
          placeholder="Search calculators..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          iconBefore={<SearchNormal1 />}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <div className="grid gap-4">
              {category.calculators.map((calc) => (
                <CalculatorCard
                  key={calc}
                  name={calc}
                  to={`/calculators/${calc.toLowerCase().replace(' ', '-')}`}
                />
              ))}
            </div>
          </div>
        ))}
        {/* Show message if no results found */}
        {debouncedSearchTerm !== '' && filteredCategories.length === 0 && (
          <p className="text-gray-500">No calculators found for "{debouncedSearchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default Calculators;
