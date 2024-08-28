import { useState } from 'react';
import Button from '../Buttons/Button';
import Dropdown from '../Dropdown';
import Modal from '../Modal';
import Input from '../Input';
import TextArea from '../TextArea';
import { Radio, RadioGroup } from '@nextui-org/react';

const UploadProjectModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Web Development',
        uploadType: 'file', // 'file' or 'link'
        uploadFile: null,
        githubLink: '',
        carouselUrls: [],
        selectedThumbnailUrl: '',
        author: '',
        techStack: '',
    });

    const categoriesOptions = [
        { key: 'Web Development', name: 'Web Development' },
        { key: 'Mobile Development', name: 'Mobile Development' },
        { key: 'Data Science', name: 'Data Science' },
        { key: 'Machine Learning', name: 'Machine Learning' },
        { key: 'Artificial Intelligence', name: 'Artificial Intelligence' },
        { key: 'Cyber Security', name: 'Cyber Security' },
        { key: 'Game Development', name: 'Game Development' },
        { key: 'UI/UX', name: 'UI/UX' },
        { key: 'Cloud Computing', name: 'Cloud Computing' },
        { key: 'DevOps', name: 'DevOps' },
        { key: 'Blockchain', name: 'Blockchain' },
        { key: 'Internet of Things', name: 'Internet of Things' },
        { key: 'Other', name: 'Other' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFormData(prevData => ({
            ...prevData,
            uploadFile: file
        }));
    };

    const handleAddCarouselUrl = () => {
        const newUrl = prompt('Enter carousel URL:');
        if (newUrl) {
            setFormData(prevData => ({
                ...prevData,
                carouselUrls: [...prevData.carouselUrls, newUrl]
            }));
        }
    };

    const handleResetForm = () => {
        setFormData({   
            title: '',
            description: '',
            category: 'Web Development',
            uploadType: 'file',
            uploadFile: null,
            githubLink: '',
            carouselUrls: [],
            selectedThumbnailUrl: '',
            author: '',
            techStack: '',
        });
    };

    const handleSubmit = () => {
        // Handle form submission here (e.g., API call to save the project)
        console.log('Form data:', formData);
        handleResetForm();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Upload Project">
            <div className="flex w-full flex-col gap-6 ">
                <Input type='text' name='title' value={formData.title} onChange={handleInputChange} labelPlaceholder='Title' />
                <Input type='text' name='author' value={formData.author} onChange={handleInputChange} labelPlaceholder='Author' />
                <TextArea name='description' value={formData.description} onChange={handleInputChange} labelPlaceholder='Description' />
                <Dropdown name="category" tabsData={categoriesOptions} activeTabResume={formData.category}
                    setActiveTabResume={(value) => handleInputChange({ target: { name: 'category', value } })}/>
                <RadioGroup label="Upload Type" defaultValue={formData.uploadType} >
                    <Radio value="file" onChange={() => handleInputChange({ target: { name: 'uploadType', value: 'file' } })}>
                        Upload File
                    </Radio>
                    <Radio value="link" onChange={() => handleInputChange({ target: { name: 'uploadType', value: 'link' } })}>
                        Link to GitHub
                    </Radio>
                </RadioGroup>

                <Input
                    name={formData.uploadType === 'file' ? 'uploadFile' : 'githubLink'}
                    type={formData.uploadType}
                    accept={formData.uploadType === 'file' ? 'application/zip' : ''}
                    value={formData.uploadType === 'file' ? '' : formData.githubLink}
                    onChange={formData.uploadType === 'file' ? handleFileUpload : handleInputChange}
                    labelPlaceholder={formData.uploadType === 'file' ? '' : 'GitHub Link'}
                />
                <Button onClick={handleAddCarouselUrl} >Add Carousel URL</Button>
                <div className='flex gap-2 '>
                <Button className={`flex-grow`} variant='outline' onClick={onClose}>Cancel</Button>
                <Button className={`flex-grow`} onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </Modal>
    );
};

export default UploadProjectModal;
