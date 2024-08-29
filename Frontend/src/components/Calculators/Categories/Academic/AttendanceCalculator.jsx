import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Buttons/Button';
import Card from '@/components/Card';

const AttendanceCalculator = () => {
    const [totalClasses, setTotalClasses] = useState('');
    const [attendedClasses, setAttendedClasses] = useState('');
    const [requiredPercentage, setRequiredPercentage] = useState('');
    const [result, setResult] = useState('');

    const calculateAttendance = () => {
        const total = parseInt(totalClasses);
        const attended = parseInt(attendedClasses);
        const required = parseFloat(requiredPercentage);

        if (!total || !attended || !required || total <= 0 || required <= 0 || attended > total || required > 100) {
            setResult('<span>Please enter valid values.</span>');
            return;
        }

        const currentPercentage = (attended / total) * 100;
        if (currentPercentage > required) {
            const days = daysToBunk(attended, total, required);
            setResult(`
                <span>You can bunk <strong>${days}</strong> more class${days > 1 ? 'es' : ''}</span>
                <span>Current attendance: <strong>${currentPercentage.toFixed(2)}%</strong></span>
                <span>Required attendance: <strong>${required}%</strong></span>
            `);
        } else if (currentPercentage === required) {
            setResult(`
                <span>You have met the requirements.</span>
                <span>Current attendance: <strong>${currentPercentage.toFixed(2)}%</strong></span>
                <span>Required attendance: <strong>${required}%</strong></span>
                `);
        } else {
            const requiredClasses = reqAttendance(attended, total, required);
            setResult(`
                <span>You need to attend <strong>${requiredClasses}</strong> more class${requiredClasses > 1 ? 'es' : ''}</span>
                <span>Current attendance: <strong>${currentPercentage.toFixed(2)}%</strong></span>
                <span>Required attendance: <strong>${required}%</strong></span>
                `);
        }
    };

    const reqAttendance = (attended, total, percentage) => {
        return Math.ceil((percentage * total - 100 * attended) / (100 - percentage));
    };

    const daysToBunk = (attended, total, percentage) => {
        return Math.floor((100 * attended - percentage * total) / percentage);
    };

    return (
        <div className="max-w-sm mx-auto mt-20">
            <Card className='p-6'>
                <div className='mb-10'>
                    <h1 className="text-2xl font-bold text-center">Attendance Calculator</h1>
                </div>
                <div className="space-y-6">
                    <Input
                        labelPlaceholder='Percentage Required'
                        name='requiredPercentage'
                        type="number"
                        value={requiredPercentage}
                        onChange={(e) => setRequiredPercentage(e.target.value)}
                    />
                    <Input
                        labelPlaceholder="Attended Classes"
                        name='attendedClasses'
                        type="number"
                        value={attendedClasses}
                        onChange={(e) => setAttendedClasses(e.target.value)}
                    />
                    <Input
                        labelPlaceholder="Total Classes"
                        name='totalClasses'
                        type="number"
                        value={totalClasses}
                        onChange={(e) => setTotalClasses(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <Button onClick={calculateAttendance} className='flex-1 mx-10'>Calculate</Button>
                    </div>
                </div>
                {result && (
                    <div
                        className="mt-4 p-4 flex items-center flex-col "
                        dangerouslySetInnerHTML={{ __html: result }}
                    />
                )}
            </Card>
        </div>
    );
};

export default AttendanceCalculator;
