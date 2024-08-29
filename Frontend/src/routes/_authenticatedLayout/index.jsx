import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from "react";
import { Calendar } from "iconsax-react";
import { RiProgress1Line } from "react-icons/ri";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Math Assignment", dueDate: "2024-06-25" },
    { id: 2, name: "History Quiz", dueDate: "2024-06-26" },
  ]);
  
  const courses = [
    { id: 1, name: "Mathematics", progress: 70 },
    { id: 2, name: "History", progress: 45 },
  ];
  
  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, [User Name]</h1>
        <p className="text-gray-600">Here's your dashboard overview.</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Courses Overview */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Your Courses</h2>
          {courses.map((course) => (
            <div key={course.id} className="mb-4">
              <Link
                to={`/course/${course.id}`}
                className="text-lg text-blue-500 dark:text-blue-300"
                >
                {course.name}
              </Link>
              <RiProgress1Line percentage={course.progress} />
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Upcoming Events</h2>
          <Calendar />
        </div>

        {/* Tasks */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">To-Do List</h2>
          {tasks.map((task) => (
            <div key={task.id} className="mb-2">
              <p>
                {task.name} - Due: {task.dueDate}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Announcements */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Announcements</h2>
          {/* Announcements Content */}
        </div>

        {/* Recent Activity */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
          {/* Recent Activity Content */}
        </div>

        {/* Performance Summary */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Performance Summary</h2>
          {/* Performance Summary Content */}
        </div>
      </div>
    </div>
  );
}



export const Route = createFileRoute('/_authenticatedLayout/')({
  component: Dashboard,
})
