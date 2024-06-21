import React, { useState } from 'react';

const AllResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const resources = [
    { type: 'Document', title: 'Document 1', description: 'Description of document 1', link: '#' },
    { type: 'Ebook', title: 'Ebook 1', author: 'Author 1', description: 'Description of ebook 1', link: '#' },
    { type: 'Note', title: 'Note 1', subject: 'Subject 1', description: 'Description of note 1', link: '#' },
    { type: 'Video', title: 'Video 1', description: 'Description of video 1', link: '#' },
    { type: 'Slide', title: 'Slide 1', subject: 'Subject 1', description: 'Description of slide 1', link: '#' },
    // Add more resources here
  ];

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Resources</h2>
      <input
        type="text"
        placeholder="Search all resources..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index} className="mb-2">
            <h3 className="text-lg font-bold">{resource.type}: {resource.title}</h3>
            <p>{resource.description}</p>
            {resource.author && <p>Author: {resource.author}</p>}
            {resource.subject && <p>Subject: {resource.subject}</p>}
            <a href={resource.link} className="text-blue-500">Access</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllResources;
