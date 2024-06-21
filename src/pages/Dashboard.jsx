import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Calendar } from 'iconsax-react';
import { RiProgress1Line } from 'react-icons/ri';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Math Assignment', dueDate: '2024-06-25' },
    { id: 2, name: 'History Quiz', dueDate: '2024-06-26' },
  ]);

  const courses = [
    { id: 1, name: 'Mathematics', progress: 70 },
    { id: 2, name: 'History', progress: 45 },
  ];

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, [User Name]</h1>
        <p className="text-gray-600">Here's your dashboard overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Courses Overview */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
          {courses.map((course) => (
            <div key={course.id} className="mb-4">
              <Link to={`/course/${course.id}`} className="text-lg text-blue-500 dark:text-blue-300">
                {course.name}
              </Link>
              <RiProgress1Line percentage={course.progress} />
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <Calendar />
        </div>

        {/* Tasks */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
          {tasks.map((task) => (
            <div key={task.id} className="mb-2">
              <p>{task.name} - Due: {task.dueDate}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Announcements */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          {/* Announcements Content */}
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          {/* Recent Activity Content */}
        </div>

        {/* Performance Summary */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Performance Summary</h2>
          {/* Performance Summary Content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
