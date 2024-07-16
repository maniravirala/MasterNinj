import { useState, useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useThrottle } from "@custom-react-hooks/all";
import { ArrowRotateRight, SearchNormal1 } from 'iconsax-react';
import Dropdown from '../../components/Dropdown';
import UploadProjectModal from './UploadProjectModal ';

const projectData = [
    {
        id: 1,
        title: 'E-commerce Website',
        description: 'A full-featured e-commerce website with user authentication, product listings, shopping cart, and payment gateway integration. Built using React, Node.js, and MongoDB.A full-featured e-commerce website with user authentication, product listings, shopping cart, and payment gateway integration. Built using React, Node.js, and MongoDB.A full-featured e-commerce website with user authentication, product listings, shopping cart, and payment gateway integration. Built using React, Node.js, and MongoDB.',
        category: 'Web Development',
        downloadLink: '/downloads/ecommerce-website.zip',
        rating: 2.5,
        downloadCount: 23,
        thumbnailUrl: 'https://picsum.photos/200/300?random=1',
        author: 'John Doe',
        techStack: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Tailwind CSS'],
        free: true,
    },
    {
        id: 2,
        title: 'Customer Churn Prediction',
        description: 'Implemented using Python, Pandas, and Scikit-learn.',
        category: 'Data Science',
        downloadLink: '/downloads/customer-churn-prediction.zip',
        rating: 4.2,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=2',
        author: 'Jane Doe',
        techStack: ['Python', 'Pandas', 'Scikit-learn'],
        free: false,
    },
    {
        id: 3,
        title: 'Healthcare Chatbot',
        description: 'An AI-powered chatbot for providing healthcare advice and scheduling appointments. Developed using Python, Natural Language Processing (NLP), and TensorFlow.',
        category: 'Machine Learning',
        downloadLink: '/downloads/healthcare-chatbot.zip',
        rating: 4.8,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=3',
        author: 'Mary Smith',
        techStack: ['Python', 'NLP'],
        free: true,
    },
    {
        id: 4,
        title: 'Real-time Chat Application',
        description: 'A real-time chat application with features such as user authentication, private and group chats, and media sharing. Built using React, Socket.io, and Node.js.',
        category: 'Web Development',
        downloadLink: '/downloads/real-time-chat-application.zip',
        rating: 4.7,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=4',
        author: 'John Smith',
        techStack: ['React', 'Node.js', 'Socket.io', 'Firebase', 'Tailwind CSS'],
        free: false,
    },
    {
        id: 5,
        title: 'Financial Data Analysis',
        description: 'A data analysis project focusing on financial data to provide insights and visualizations for better decision-making. Tools used include Python, Pandas, Matplotlib, and Seaborn.',
        category: 'Data Science',
        downloadLink: '/downloads/financial-data-analysis.zip',
        rating: 4.4,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=5',
        author: 'Robert Johnson',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        free: true,
    },
    {
        id: 6,
        title: 'Image Classification with CNN',
        description: 'A machine learning project that uses Convolutional Neural Networks (CNN) for image classification tasks. Implemented using Python, TensorFlow, and Keras.',
        category: 'Machine Learning Machine Learning Machine Learning',
        downloadLink: '/downloads/image-classification-cnn.zip',
        rating: 4.9,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=6',
        author: 'Alice Williams',
        techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Matplotlib'],
        free: false,
    },
    {
        id: 7,
        title: 'Social Media Dashboard',
        description: 'A web application that provides a dashboard for managing multiple social media accounts. Features include post scheduling, analytics, and user engagement tracking. Built using React and Node.js.',
        category: 'Web Development',
        downloadLink: '/downloads/social-media-dashboard.zip',
        rating: 4.6,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=7',
        author: 'Alice Williams',
        techStack: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
        free: true,
    },
    {
        id: 8,
        title: 'Sales Forecasting',
        description: 'A data science project that uses time series analysis and machine learning algorithms to forecast sales. Developed using Python, Pandas, Scikit-learn, and Statsmodels.',
        category: 'Data Science',
        downloadLink: '/downloads/sales-forecasting.zip',
        rating: 4.3,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=8',
        author: 'Alice Williams',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Statsmodels', 'Time Series Analysis'],
        free: false,
    },
    {
        id: 9,
        title: 'Recommendation System',
        description: 'A machine learning project that builds a recommendation system for suggesting products to users based on their preferences and behaviors. Implemented using Python, Pandas, and Scikit-learn.',
        category: 'Machine Learning',
        downloadLink: '/downloads/recommendation-system.zip',
        rating: 4.8,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=9',
        author: 'Alice Williams',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Collaborative Filtering', 'Content-Based Filtering'],
        free: true,
    },
    {
        id: 10,
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase projects, skills, and achievements. Features include a blog, contact form, and responsive design. Built using React and Tailwind CSS.',
        category: 'Web Development',
        downloadLink: '/downloads/portfolio-website.zip',
        rating: 4.7,
        downloadCount: 100,
        thumbnailUrl: 'https://picsum.photos/200/300?random=10',
        author: 'Alice Williams',
        techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Iconsax', 'Firebase', 'Netlify', 'Vercel'],
        free: false,
    }
];

const ProjectList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [freeFilter, setFreeFilter] = useState("");
    const [ratingFilter, setRatingFilter] = useState("");
    const [downloadFilter, setDownloadFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [techStackFilter, setTechStackFilter] = useState("");
    const [showUploadModal, setShowUploadModal] = useState(false);
    const throttledSearchTerm = useThrottle(searchTerm, 1000);

    useEffect(() => {
        setFilteredData(projectData);
    }, []);


    const freeOptions = [
        { key: '', name: 'All' },
        { key: 'free', name: 'Free' },
        { key: 'premium', name: 'Premium' }
    ];

    const ratingOptions = [
        { key: '', name: 'All Ratings' },
        { key: '4.5', name: '4.5 and above' },
        { key: '4', name: '4 and above' },
        { key: '3.5', name: '3.5 and above' }
    ];

    const downloadOptions = [
        { key: '', name: 'All Downloads' },
        { key: '50', name: '50 and above' },
        { key: '100', name: '100 and above' }
    ];

    const categoryOptions = [
        { key: '', name: 'All Categories' },
        { key: 'Web Development', name: 'Web Development' },
        { key: 'Data Science', name: 'Data Science' },
        { key: 'Machine Learning', name: 'Machine Learning' }
    ];


    const filteredProjects = filteredData.filter(project => {
        const searchTermToUse = throttledSearchTerm || '';
        const searchParts = searchTermToUse.toLowerCase().split(' ').filter(part => part);
        // return searchParts.every(part => project.title.toLowerCase().includes(part));
        const matchesSearch = searchParts.every(part => project.title.toLowerCase().includes(part));
        const matchesFree = freeFilter ? (freeFilter === 'free' ? project.free : !project.free) : true;
        const matchesRating = ratingFilter ? project.rating >= parseFloat(ratingFilter) : true;
        const matchesDownloadCount = downloadFilter ? project.downloadCount >= parseInt(downloadFilter) : true;
        const matchesCategory = categoryFilter ? project.category.toLowerCase().includes(categoryFilter.toLowerCase()) : true;
        const matchesTechStack = techStackFilter ? project.techStack.map(stack => stack.toLowerCase()).includes(techStackFilter.toLowerCase()) : true;

        return matchesSearch && matchesFree && matchesRating && matchesDownloadCount && matchesCategory && matchesTechStack;
    });

    const handleFilterReset = () => {
        setFreeFilter("");
        setRatingFilter("");
        setDownloadFilter("");
        setCategoryFilter("");
        setTechStackFilter("");
    };

    const uniqueId = useId() + filteredProjects.length || 'empty';

    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold">Projects</h1>
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
            <div className="filter-bar my-4 flex md:flex-row flex-wrap items-center justify-center gap-4">
                <Dropdown tabsData={ratingOptions} activeTabResume={ratingFilter} setActiveTabResume={setRatingFilter} />
                <Dropdown tabsData={downloadOptions} activeTabResume={downloadFilter} setActiveTabResume={setDownloadFilter} />
                <Dropdown tabsData={categoryOptions} activeTabResume={categoryFilter} setActiveTabResume={setCategoryFilter} />
                <Dropdown tabsData={freeOptions} activeTabResume={freeFilter} setActiveTabResume={setFreeFilter} />

                <button onClick={handleFilterReset} className="p-2 rounded-lg bg-bgSecondary text-tPrimary">
                    <ArrowRotateRight className="text-gray-500 dark:text-gray-400" />
                </button>
                <button onClick={() => setShowUploadModal(true)} className="btn-primary">Upload Project</button>
            </div>
            {filteredProjects.length === 0 && <p>No projects found</p>}
            <div className="flex flex-col w-full sm:px-4 gap-4">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={`${project.id}-${uniqueId}`}
                        id={`${project.id}-${uniqueId}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className='flex justify-center'
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
            <UploadProjectModal onClose={() => setShowUploadModal(false)} isOpen={showUploadModal} />
        </div>
    );
};

export default ProjectList;
