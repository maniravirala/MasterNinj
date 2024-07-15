import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SwipeCarousel from '../../components/SwipeCarousel';
import { ArrowDown, Star } from 'iconsax-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details from API or use dummy data
    setProject({
      id,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce website with user authentication, product listings, shopping cart, and payment gateway integration. Built using React, Node.js, and MongoDB.',
      category: 'Web Development',
      downloadLink: '/downloads/ecommerce-website.zip',
      rating: 4.5,
      downloadCount: 100,
      thumbnailUrls: [
        'https://picsum.photos/200/300?random=1',
        'https://picsum.photos/200/300?random=2',
        'https://picsum.photos/200/300?random=3'
      ],
      author: 'John Doe',
      techStack: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Tailwind CSS'],
      timestamp: 1630512000000,
      contributors: [
        { name: 'Jane Smith', role: 'Frontend Developer', profileUrl: 'https://picsum.photos/50?random=2' },
        { name: 'Mike Johnson', role: 'Backend Developer', profileUrl: 'https://picsum.photos/50?random=3' },
      ],
      relatedProjects: [
        {
          id: '2', title: 'Social Media Platform', thumbnailUrl: 'https://picsum.photos/200/300?random=4',
          description: 'A social media platform with user profiles, posts, comments, and likes. Built using React, Node.js, and MongoDB.'
        },
        {
          id: '3', title: 'Task Management App', thumbnailUrl: 'https://picsum.photos/200/300?random=5',
          description: 'A task management app with user authentication, task lists, and reminders. Built using React, Node.js, and MongoDB.'
        },
      ],
    });
  }, [id]);

  if (!project) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* <SwipeCarousel images={project.thumbnailUrls} /> */}
      <div className="flex mt-14">
        <div className="p-4">
          <h1 className="text-4xl font-semibold mb-2">{project.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>{project.author}</span>
            <span>&middot;</span>
            <span>{new Date(project.timestamp).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric', month: 'short' })}</span>
            <span>&middot;</span>
            <span>{project.category}</span>
            <span>&middot;</span>
            <span className='flex gap-1'>{project.rating} <Star size={16} className="text-yellow-500" /></span>
            <span>&middot;</span>
            <span className='flex gap-1'>{project.downloadCount} <ArrowDown size={16} className="text-blue-500" /></span>
          </div>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Technologies Used</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <li key={index} className="px-2 py-1 bg-gray-200 text-sm rounded-md">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4 flex justify-center items-center">
          <button className="bg-bgBrand text-white px-6 py-2 rounded-md shadow-md">
            <a href={project.downloadLink} download >Download</a>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Contributors</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {project.contributors.map((contributor) => (
            <div key={contributor.name} className="flex items-center space-x-2 bg-gray-100 p-4 rounded shadow w-1/2 md:w-1/4">
              <img src={contributor.profileUrl} alt={contributor.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-bold">{contributor.name}</p>
                <p className="text-gray-500">{contributor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {project.relatedProjects.map((relatedProject) => (
            <div key={relatedProject.id} className="bg-gray-100 p-4 rounded shadow">
              <img
                src={relatedProject.thumbnailUrl}
                alt={relatedProject.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="font-bold">{relatedProject.title}</p>
              <p className="text-gray-600">{relatedProject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
