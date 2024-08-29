/* eslint-disable react/prop-types */
import { useState, useEffect, useId } from "react";
import { SearchNormal1 } from "iconsax-react";
import ResourceCard from "./ResourceCard";
import { Skeleton } from "@nextui-org/skeleton";
import { AnimatePresence, motion } from "framer-motion";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import { useThrottle } from '@uidotdev/usehooks';

const ResourcePage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  
  const [sortFilter, setSortFilter] = useState("time");

  const throttledSearchTerm = useThrottle(searchTerm, 300);

  const sortOptions = [
    { key: "time", name: "Latest" },
    { key: "likes", name: "Likes" },
    { key: "dislikes", name: "Dislikes" },
    { key: "pages", name: "Pages" },
  ];

  useEffect(() => {
    let sortedData = [...data];
    sortedData = sortedData.sort((a, b) => b[sortFilter] - a[sortFilter]);
    setFilteredData(sortedData);
  }, [data, sortFilter]);

  const filteredResources = filteredData.filter((item) => {
    const searchTermToUse = throttledSearchTerm || '';
    return item.title.toLowerCase().includes(searchTermToUse.toLowerCase());
  });

  const uniqueId = useId() + filteredResources.length || 'empty';


  return (
    <div className="resource-page">
      <div className="search-bar my-4 flex items-center justify-center md:flex-row flex-col gap-2">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          iconBefore={<SearchNormal1 />}
        />

        <Dropdown tabsData={sortOptions} activeTabResume={sortFilter} setActiveTabResume={setSortFilter} />
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {filteredResources.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  >
                  <p className="text-center text-lg text-gray-500 dark:text-gray-400">No resources found</p>
                  </motion.div>
              )}

          {filteredResources.map((item, index) => (
            <motion.div
              key={`${item.id}-${uniqueId}`}
              id={`${item.id}-${uniqueId}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex w-full justify-center"
            >
              <ResourceCard resource={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResourcePage;
