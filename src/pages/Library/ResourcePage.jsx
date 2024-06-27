/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useThrottle } from '@custom-react-hooks/all';
import { SearchNormal1 } from 'iconsax-react';
import Card from './Card';
import { Skeleton } from "@nextui-org/skeleton";
import { AnimatePresence, motion } from 'framer-motion';

const ResourcePage = ({ data, loading }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [sortCriteria, setSortCriteria] = useState('time');

    const throttledSearchTerm = useThrottle(searchTerm, 1000);

    useEffect(() => {
        if (!data) return;

        let filtered = data;
        if (throttledSearchTerm) {
            filtered = data.filter(item =>
                item.title.toLowerCase().includes(throttledSearchTerm.toLowerCase())
            );
        }

        const sorted = [...filtered].sort((a, b) => {
            if (sortCriteria === 'time') return b.time - a.time;
            if (sortCriteria === 'likes') return b.likes - a.likes;
            if (sortCriteria === 'dislikes') return b.dislikes - a.dislikes;
            if (sortCriteria === 'pages') return b.pages - a.pages;
            return 0;
        });

        setFilteredData(sorted);
    }, [throttledSearchTerm, data, sortCriteria]);

    return (
        <div className="resource-page">
            <div className="search-bar my-4 flex justify-center items-center gap-x-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 pl-4 pr-1 rounded-l-lg sm:w-4/5 w-full bg-bgSecondary outline-none focus:outline-none"
                />
                <div className='bg-bgSecondary cursor-pointer -ml-2 p-2 rounded-r-lg'>
                    <SearchNormal1 className="text-gray-500 dark:text-gray-400" />
                </div>

                {filterContent({ sortCriteria, setSortCriteria })}
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* {filteredData.length === 0 && <p>No resources found.</p>} */}
                <AnimatePresence>
                    {loading && Array.from({ length: 4 }).map((_, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            exit={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 150 }}
                            key={index} className="w-full flex justify-center">
                            <SkeletonCard />
                        </motion.div>
                    ))}
                </AnimatePresence>
                <AnimatePresence>
                    {!loading && filteredData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1+1.4, type: 'spring', stiffness: 150 }}
                            className='w-full flex justify-center'
                        >
                            <Card resource={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

const filterContent = ({ sortCriteria, setSortCriteria }) => {
    return (
        <div className="sort-bar my-4 flex justify-center items-center">
            <select
                id="sort"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
                className="p-2 rounded-lg bg-bgSecondary outline-none focus:outline-none"
            >
                <option value="time">Latest</option>
                <option value="likes">Likes</option>
                <option value="dislikes">Dislikes</option>
                <option value="pages">Pages</option>
            </select>
        </div>
    );
};

const SkeletonCard = () => {
    return (
        <div className="w-full max-w-[300px] space-y-5 p-4 rounded-lg">
            <Skeleton className="rounded-lg bg-bgSecondary dark:bg-bgSecondary">
                <div className="h-24 rounded-lg"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg bg-bgSecondary dark:bg-bgSecondary">
                    <div className="h-3 w-3/5 rounded-lg"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg bg-bgSecondary dark:bg-bgSecondary">
                    <div className="h-3 w-4/5 rounded-lg"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg bg-bgSecondary dark:bg-bgSecondary">
                    <div className="h-3 w-2/5 rounded-lg "></div>
                </Skeleton>
            </div>
        </div>
    );
};

export default ResourcePage;
