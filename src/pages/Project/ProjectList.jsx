import { useState, useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useThrottle } from "@custom-react-hooks/all";
import { SearchNormal1 } from 'iconsax-react';

const projectData = [
    { id: 1, title: 'Project A', description: 'Description A', category: 'Web Development', downloadLink: '/downloads/project-a.zip', rating: 4.5, thumbnailUrl: 'https://picsum.photos/200/300?random=1' },
    { id: 2, title: 'Project B', description: 'Description B', category: 'Data Science', downloadLink: '/downloads/project-b.zip', rating: 4.0, thumbnailUrl: 'https://picsum.photos/200/300?random=2' },
    { id: 3, title: 'Project C', description: 'Description C', category: 'Machine Learning', downloadLink: '/downloads/project-c.zip', rating: 4.8, thumbnailUrl: 'https://picsum.photos/200/300?random=3' },
    { id: 4, title: 'React Project', description: 'Description React', category: 'Web Development', downloadLink: '/downloads/react-project.zip', rating: 4.7, thumbnailUrl: 'https://picsum.photos/200/300?random=4' },
    { id: 5, title: 'Data Analysis Project', description: 'Description Data Analysis', category: 'Data Science', downloadLink: '/downloads/data-analysis-project.zip', rating: 4.3, thumbnailUrl: 'https://picsum.photos/200/300?random=5' },
    { id: 6, title: 'Machine Learning Project', description: 'Description ML', category: 'Machine Learning', downloadLink: '/downloads/ml-project.zip', rating: 4.9, thumbnailUrl: 'https://picsum.photos/200/300?random=6' },
];

const ProjectList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const throttledSearchTerm = useThrottle(searchTerm, 1000);
    const uniqueId = useId();

    useEffect(() => {
        setFilteredData(projectData);
    }, []);

    const filteredProjects = filteredData.filter(project => {
        const searchTermToUse = throttledSearchTerm || '';
        const searchParts = searchTermToUse.toLowerCase().split(' ').filter(part => part);
        return searchParts.every(part => project.title.toLowerCase().includes(part));
    });

    const bestProject = filteredData.reduce((best, project) => {
        return (project.rating > best.rating) ? project : best;
    }, filteredData[0] || {});

    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold">Projects</h1>
            
            {bestProject && (
                <div className="mb-4 p-4 rounded-2xl bg-green-300">
                    <h2 className="text-2xl font-bold">Best Project</h2>
                    <ProjectCard project={bestProject} />
                </div>
            )}
            <div className="search-bar my-4 flex items-center justify-center gap-x-2">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-l-lg bg-bgSecondary p-2 pl-4 pr-1 outline-none focus:outline-none sm:w-4/5"
                />
                <div className="-ml-2 cursor-pointer rounded-r-lg bg-bgSecondary p-2">
                    <SearchNormal1 className="text-gray-500 dark:text-gray-400" />
                </div>
            </div>
            {filteredProjects.length === 0 && <p>No projects found</p>}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={`${project.id}-${uniqueId}-${throttledSearchTerm || 'empty'}`}
                        id={`${project.id}-${uniqueId}-${throttledSearchTerm || 'empty'}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className='flex justify-center'
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
