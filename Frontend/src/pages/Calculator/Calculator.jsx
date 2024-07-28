import { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import Input from '../../components/Input';
import CalculatorCard from './CalculatorCard';
// import { useDebounce } from '@uidotdev/usehooks';

const Calculators = () => {
  const categories = [
    { name: 'Academic', path: 'academic', icon: { name: "Book1", lib: "iconsax" } },
    { name: 'Conversion', path: 'conversion', icon: { name: "Convertshape2", lib: "iconsax" } },
    { name: 'Financial', path: 'financial', icon: { name: "MoneySend", lib: "iconsax" } },
    { name: 'Health', path: 'health', icon: { name: "Health", lib: "iconsax" } },
    { name: 'Math', path: 'math', icon: { name: "Math", lib: "iconsax" } },
    { name: 'Programming', path: 'programming', icon: { name: "Code", lib: "iconsax" } },
    { name: 'Miscellaneous', path: 'miscellaneous', icon: { name: "More", lib: "iconsax" } },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="">
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
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CalculatorCard key={category.name} name={category.name} to={`/calculators/${category.path}`} icon={category.icon} />
        ))}

      </div>
    </div>
  );
};

export default Calculators;
