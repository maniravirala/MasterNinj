import { motion } from "framer-motion";

const sidebarItems = [
  "Academic Essentials",
  "Accommodation Essentials",
  "Personal Essentials",
  "Health & Wellness",
  "Tech Gadgets",
  "Travel Essentials",
  "Clothing & Accessories",
  "Food & Snacks",
  "Fitness Gear",
  "Entertainment",
  "Miscellaneous",
];

const Sidebar = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div className="flex flex-col gap-2">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`relative cursor-pointer rounded-lg px-4 py-2 ${
            selectedCategory === item ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => handleCategoryChange(item)}
        >
          <span className="relative z-10 truncate capitalize">{item}</span>
          {selectedCategory === item && (
            <motion.div
              layoutId="underline"
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-lg border border-gray-300 dark:border-gray-700"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
