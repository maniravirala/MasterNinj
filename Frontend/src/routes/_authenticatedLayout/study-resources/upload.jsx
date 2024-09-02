import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

const Upload = () => {
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState(new FormData());

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFormData(new FormData());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData.set(name, value);
    setFormData(new FormData(formData));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      formData.set(name, files[0]);
      setFormData(new FormData(formData));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate success/failure
          const success = true;
          success ? resolve("Resource uploaded successfully!") : reject("Upload failed!");
        }, 2000);
      }),
      {
        loading: "Uploading resource...",
        success: "Resource uploaded successfully!",
        error: "Failed to upload resource",
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-dark-700">Category</label>
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
          className="border border-dark-300 p-2 rounded w-full"
        >
          <option value="">Select a category</option>
          <option value="video">Video</option>
          <option value="document">Document</option>
          <option value="ebook">Ebook</option>
          <option value="notes">Notes</option>
          <option value="slides">Slides</option>
          <option value="others">Others</option>
        </select>
      </div>

      {category && (
        <>
          <div className="mb-4">
            <label className="block text-dark-700">Title</label>
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              className="border border-dark-300 p-2 rounded w-full"
              required
            />
          </div>

          {category === "video" && (
            <>
              <div className="mb-4">
                <label className="block text-dark-700">Video URL</label>
                <input
                  type="url"
                  name="url"
                  onChange={handleInputChange}
                  className="border border-dark-300 p-2 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-dark-700">Thumbnail Image</label>
                <input
                  type="file"
                  name="thumbnailUrl"
                  onChange={handleFileChange}
                  className="border border-dark-300 p-2 rounded w-full"
                  accept="image/*"
                />
              </div>
            </>
          )}

          {category === "document" && (
            <>
              <div className="mb-4">
                <label className="block text-dark-700">Document File</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="border border-dark-300 p-2 rounded w-full"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-dark-700">Number of Pages</label>
                <input
                  type="number"
                  name="pages"
                  onChange={handleInputChange}
                  className="border border-dark-300 p-2 rounded w-full"
                />
              </div>
            </>
          )}

          {category === "ebook" && (
            <>
              <div className="mb-4">
                <label className="block text-dark-700">Ebook File</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="border border-dark-300 p-2 rounded w-full"
                  accept=".pdf,.epub"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-dark-700">Author</label>
                <input
                  type="text"
                  name="author"
                  onChange={handleInputChange}
                  className="border border-dark-300 p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-dark-700">Number of Pages</label>
                <input
                  type="number"
                  name="pages"
                  onChange={handleInputChange}
                  className="border border-dark-300 p-2 rounded w-full"
                />
              </div>
            </>
          )}

          {/* Add fields for notes, slides, etc., based on the category */}
        </>
      )}

      <button
        type="submit"
        className="bg-dark-600 text-white p-2 rounded hover:bg-dark-700"
      >
        Upload Resource
      </button>
    </form>
  );
};


export const Route = createFileRoute(
  "/_authenticatedLayout/study-resources/upload",
)({
  beforeLoad: ({ context }) => {
    const { isStudent } = context.authentication;
    if (isStudent) {
      throw redirect({ to: "/access-denied" });
    }
  },
  component: Upload,
});
