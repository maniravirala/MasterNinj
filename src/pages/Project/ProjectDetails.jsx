import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch project details from API or use dummy data
    setProject({
      id,
      title: 'Project A',
      description: 'Detailed description of Project A',
      category: 'Web Development',
      downloadLink: '/downloads/project-a.zip',
      technologies: ['React', 'TailwindCSS'],
      dateAdded: '2024-07-01',
      author: 'John Doe',
      previewImage: '/images/project-a-preview.png',
      rating: 4.5,
      reviews: [
        { id: 1, author: 'Alice', content: 'Great project!', rating: 5 },
        { id: 2, author: 'Bob', content: 'Very useful.', rating: 4 },
      ],
    });
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
      <p>Date Added: {project.dateAdded}</p>
      <p>Author: {project.author}</p>
      <img src={project.previewImage} alt={`${project.title} preview`} className="my-4" />
      <h2 className="text-2xl font-bold mt-4">Technologies Used</h2>
      <ul>
        {project.technologies.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a
        href={project.downloadLink}
        className="text-white bg-blue-500 hover:bg-blue-700 mt-4 inline-block px-4 py-2 rounded"
        download
      >
        Download
      </a>
      <h2 className="text-2xl font-bold mt-4">Reviews</h2>
      <div className="mt-2">
        {project.reviews.map(review => (
          <div key={review.id} className="border-t py-2">
            <p className="font-bold">{review.author}</p>
            <p>{review.content}</p>
            <p className="text-sm text-gray-500">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
