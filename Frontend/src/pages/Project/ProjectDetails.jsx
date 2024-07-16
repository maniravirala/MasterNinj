import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowDown, Star } from 'iconsax-react';
import { useClickAway } from "@uidotdev/usehooks";
import ReactMarkdown from 'react-markdown';
import ProjectCard from './ProjectCard';
import Rating from '../../components/Rating';
import Button from '../../components/Buttons/Button';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [readme, setReadme] = useState('');
  const [rating, setRating] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const [ratingHover, setRatingHover] = useState(false);
  const ratingRef = useClickAway(() => { setRatingHover(false) });
  const [ratingLoading, setRatingLoading] = useState(false);

  useEffect(() => {
    // Fetch project details and README from API or use dummy data
    setProject({
      id,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce website with user authentication, product listings, shopping cart, and payment gateway integration. Built using React, Node.js, and MongoDB.',
      category: 'Web Development',
      downloadLink: '/downloads/ecommerce-website.zip',
      rating: 4.5,
      downloadCount: 100,
      thumbnailUrls: [
        'https://picsum.photos/200/300?random=5',
        'https://picsum.photos/200/300?random=6',
        'https://picsum.photos/200/300?random=7',
        'https://picsum.photos/200/300?random=8',
        'https://picsum.photos/200/300?random=9',
      ],
      author: 'John Doe',
      techStack: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      timestamp: 1630512000000,
      relatedProjects: [
        {
          id: 4,
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
      ],
    });

    // Fetch README instructions from API or use dummy data
    setReadme(`
## Project Setup Instructions

1. Clone the repository from GitHub.
2. Install the required dependencies using npm or yarn.
3. Set up the database connection in the .env file.
4. Run the development server.
5. Open the application in your browser.

### Additional Notes

- Ensure you have Node.js and MongoDB installed on your machine.
- Use environment variables to configure sensitive information like API keys and database credentials.
- Follow the coding conventions and best practices for a clean and maintainable codebase.

### Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

- Thanks to the contributors and maintainers of the open-source libraries used in this project.
- Inspired by the amazing work of developers in the community.

### Support

For any queries or issues, please contact the project maintainer at [ [email protected]](mailto: [email protected]).

## Project Structure

- **/public**: Contains the static assets and HTML template files.
- **/src**: Contains the source code for the application.
  - **/components**: Reusable UI components and helper functions.
  - **/pages**: Top-level pages for the application.
  - **/styles**: Global styles and theme configuration.
  - **/utils**: Utility functions and constants.
  - **App.js**: Main entry point for the application.
  - **index.js**: Root file for rendering the application.
- **.env**: Environment variables for configuring the application.
- **package.json**: List of dependencies and scripts for the project.
- **README.md**: Instructions and information about the project.

## Contribution Guidelines

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make the changes and commit them to your branch.
4. Push the changes to your fork.
5. Create a pull request to the main repository's branch.
6. Wait for the maintainers to review your changes.
7. Once approved, your changes will be merged into the main branch.


    `);
  }, [id]);

  const handleRating = () => {
    // Submit the user rating to the API
    setRatingLoading(true);
    setTimeout(() => {
      setRatingHover(false);
      setRatingLoading(false);
      console.log(`Rating submitted: ${rating}`);
    }, 3000);
  };

  if (!project) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="mx-auto text-textPrimary">
      <div className="flex flex-col-reverse md:flex-row mt-4">
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">README:</h2>
          <ReactMarkdown className="prose text-textSecondary">{readme}</ReactMarkdown>
        </div>
        <div className="md:w-1/2 p-4 md:sticky top-4 h-full">
          <h1 className="text-4xl font-semibold mb-2">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{project.author}</span>
            <span>&middot; {new Date(project.timestamp).toLocaleDateString('en-US', { day: 'numeric', year: 'numeric', month: 'short' })}</span>
            <span>&middot; {project.category}</span>
            <span className='flex gap-1'>&middot; {project.downloadCount} <ArrowDown size={16} className="text-blue-500" /></span>
            <div className="flex gap-1 relative" onMouseEnter={() => setRatingHover(true)}>
              &middot; {project.rating} <Star size={16} className="text-yellow-500" />
              {ratingHover && downloaded && (
                <div ref={ratingRef} className="absolute top-6 left-0 z-10">
                  <div className="flex flex-col gap-2 p-4 bg-bgPrimary border border-borderPrimary rounded-xl shadow-sm">
                    <p>Rate this project:</p>
                    <Rating value={rating} setValue={setRating} />
                    <Button onClick={handleRating} disabled={ratingLoading} loading={ratingLoading}>Submit</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-textSecondary mb-4">{project.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Technologies Used</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <li key={index} className="px-2 py-1 bg-bgSecondary text-textSecondary text-sm rounded-md">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="my-8 flex justify-center items-center">
            <Button onClick={() => setDownloaded(true)}><a href={project.downloadLink} download>Download</a></Button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.thumbnailUrls.map((url, index) => (
              <img key={index} src={url} alt={`Project Screenshot ${index + 1}`} className="rounded-md shadow-md" />
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4 mt-8">Related Projects</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {project.relatedProjects.map((relatedProject) => (
          <ProjectCard key={relatedProject.id} project={relatedProject} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
