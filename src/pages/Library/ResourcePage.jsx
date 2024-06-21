/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from './Card';


const ResourcePage = ({ title, data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filterOption, setFilterOption] = useState('');

    const filteredData = data
        .filter(resource => 
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === 'Most relevant') return 0; // implement relevance logic
            if (sortOption === 'Most recent') return new Date(b.date) - new Date(a.date);
            if (sortOption === 'Most pages') return b.pages - a.pages;
            if (sortOption === 'Fewest pages') return a.pages - b.pages;
            return 0;
        })
        .filter(resource => 
            filterOption ? resource.type === filterOption : true
        );

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                />
                <div className="flex space-x-4">
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="">Sort by</option>
                        <option value="Most relevant">Most relevant</option>
                        <option value="Most recent">Most recent</option>
                        <option value="Most pages">Most pages</option>
                        <option value="Fewest pages">Fewest pages</option>
                    </select>
                    <select
                        value={filterOption}
                        onChange={(e) => setFilterOption(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="">Filter by</option>
                        <option value="Document">Document</option>
                        <option value="Ebook">Ebook</option>
                        <option value="Note">Note</option>
                        <option value="Video">Video</option>
                        <option value="Slide">Slide</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {filteredData.map(resource => (
                    <Card key={resource.id} resource={resource} />
                ))}
            </div>
        </div>
    );
};

export default ResourcePage;
