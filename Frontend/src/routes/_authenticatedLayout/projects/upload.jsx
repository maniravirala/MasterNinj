import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import Dropdown from "../../../components/Dropdown";
import Icon from "@/utils/Icon";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Buttons/Button";
import { toast } from "sonner";
import FileUploader from "../../../components/FileUploader";

const Upload = () => {
  const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        category: "",
        uploadType: "file", // 'file' or 'link'
        uploadFile: null,
        githubLink: "",
        thumbnailUrls: [],
        selectedThumbnailUrl: "",
        techStack: [],
        free: true,
        readme: "",
      });

  const categoriesOptions = [
    { key: "Web Development", name: "Web Development" },
    { key: "Mobile Development", name: "Mobile Development" },
    { key: "Data Science", name: "Data Science" },
    { key: "Machine Learning", name: "Machine Learning" },
    { key: "Artificial Intelligence", name: "Artificial Intelligence" },
    { key: "Cyber Security", name: "Cyber Security" },
    { key: "Game Development", name: "Game Development" },
    { key: "UI/UX", name: "UI/UX" },
    { key: "Cloud Computing", name: "Cloud Computing" },
    { key: "DevOps", name: "DevOps" },
    { key: "Blockchain", name: "Blockchain" },
    { key: "Internet of Things", name: "Internet of Things" },
    { key: "Other", name: "Other" },
  ];

  const techStackOptions = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const isRequired = () => {
    return formData.title && formData.description && formData.author && formData.category && formData.githubLink;
  };

  const handleSubmit = () => {
    if (isRequired()) {
      console.log(formData);
    } else {
      toast.error("Please fill all the required fields");
    }
  };

  const handleDropdownChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <FileUploader onFileSelect={(file) => setFormData((prevData) => ({ ...prevData, uploadFile: file }))} />
        <Input
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          name="title"
        />
        <TextArea
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
        />
        <Input
          label="Author"
          value={formData.author}
          onChange={handleInputChange}
          name="author"
        />
        <Dropdown
          tabsData={categoriesOptions}
          activeTabResume={formData.category}
          setActiveTabResume={handleDropdownChange}
        />
        {/* <Dropdown label="Tech Stack" value={formData.techStack} onChange={handleInputChange} name="techStack" options={techStackOptions} /> */}
        <Input
          label="Github Link"
          value={formData.githubLink}
          onChange={handleInputChange}
          name="githubLink"
          type="Link"
        />
        <Input
          label="Thumbnail URL"
          value={formData.selectedThumbnailUrl}
          onChange={handleInputChange}
          name="selectedThumbnailUrl"
        />
        <Checkbox
          label="Free"
          checked={formData.free}
          onChange={handleCheckBox}
          name="free"
        />
        <TextArea
          label="Readme"
          value={formData.readme}
          onChange={handleInputChange}
          name="readme"
        />
        <Button onClick={handleSubmit}>Upload Project</Button>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_authenticatedLayout/projects/upload")({
  beforeLoad: ({ context }) => {
    const { isStudent } = context.authentication;
    if (isStudent) {
      throw redirect({ to: "/access-denied" });
    }
  },
  component: Upload,
});
