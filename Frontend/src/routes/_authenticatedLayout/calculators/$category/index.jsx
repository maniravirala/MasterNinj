import { createFileRoute, useParams } from '@tanstack/react-router'
import CalculatorCard from '@/components/Calculators/CalculatorCard';
import NotFound from '@/components/Calculators/Categories/404NotFoundCalculator';
import Breadcrumb from '@/components/BreadCrumb';

const categoryCalculators = {
    math: ['Basic', 'Scientific', 'Fraction', 'Percentage', 'Random Number Generator', 'Triangle', 'Standard Deviation'],
    academic: ['GPA', 'Grade', 'Attendance', 'Exam Mark'],
    financial: ['Loan', 'Investment', 'Mortgage', 'Savings', 'Budget'],
    health: ['BMI', 'Calorie', 'Heart Rate', 'Water Intake'],
    programming: ['Binary', 'Decimal to Hexadecimal', 'ASCII', 'Regex Tester'],
    miscellaneous: ['Tip', 'Age', 'Time', 'Date', 'Days' ]
};

const CalculatorCategory = () => {
    const { category } = useParams({strict: false});
    const calculators = categoryCalculators[category];

    if (!calculators) {
        return (
            <div className="max-w-4xl mx-auto p-4">
                <nav className="mb-4">
                    <Breadcrumb />
                </nav>
                <NotFound />

            </div>
        );
    }

    return (
        <div className="p-4">
            <nav className="mb-4">
                <Breadcrumb />
            </nav>
            <h1 className="text-3xl font-semibold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {calculators.map((calculator) => (
                    <CalculatorCard key={calculator} name={calculator} to={`/calculators/${category}/${calculator.toLowerCase().replace(/ /g, '-')}`} />
                ))}
            </div>
        </div>
    );
};

export const Route = createFileRoute('/_authenticatedLayout/calculators/$category/')({
  component: CalculatorCategory
})