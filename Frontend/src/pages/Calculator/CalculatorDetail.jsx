import { useParams } from 'react-router-dom';
import { BasicCalculator, ScientificCalculator } from './Categories/Math';
import { AttendanceCalculator } from './Categories/Academic';
// import LoanCalculator from './calculators/financial/LoanCalculator';
// import InvestmentCalculator from './calculators/financial/InvestmentCalculator';
// import UnitConverter from './calculators/others/UnitConverter';
// import DateDifferenceCalculator from './calculators/others/DateDifferenceCalculator';
import NotFound from './Categories/404NotFoundCalculator';
import Breadcrumb from '../../components/BreadCrumb';

const calculators = {
    basic: BasicCalculator,
    scientific: ScientificCalculator,
    attendance: AttendanceCalculator,
    // 'loan-calculator': LoanCalculator,
    // 'investment-calculator': InvestmentCalculator,
    // 'unit-converter': UnitConverter,
    // 'date-difference-calculator': DateDifferenceCalculator,
};

const CalculatorDetail = () => {
    const { calculator } = useParams();
    const CalculatorComponent = calculators[calculator] || NotFound;

    return (
        <div className="p-4">
            <nav className="mb-4">
                <Breadcrumb />
            </nav>
            <CalculatorComponent />
        </div>
    );
};

export default CalculatorDetail;
