import { useParams } from 'react-router-dom';
import { BasicCalculator, ScientificCalculator } from './Categories/Math';
// import LoanCalculator from './calculators/financial/LoanCalculator';
// import InvestmentCalculator from './calculators/financial/InvestmentCalculator';
// import UnitConverter from './calculators/others/UnitConverter';
// import DateDifferenceCalculator from './calculators/others/DateDifferenceCalculator';
import NotFound from './Categories/404NotFoundCalculator';

const calculators = {
    basic: BasicCalculator,
    scientific: ScientificCalculator,
    // 'loan-calculator': LoanCalculator,
    // 'investment-calculator': InvestmentCalculator,
    // 'unit-converter': UnitConverter,
    // 'date-difference-calculator': DateDifferenceCalculator,
};

const CalculatorDetail = () => {
    const { calculatorId } = useParams();
    const CalculatorComponent = calculators[calculatorId] || NotFound;

    return (
        <div className="max-w-6xl mx-auto p-4">
            <CalculatorComponent />
        </div>
    );
};

export default CalculatorDetail;
