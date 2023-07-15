import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../config/firebase.config';
import CircularLoader from '../components/reusable/CircularLoader';
import { apiUrl } from '../config/apiEp';
import axios from 'axios';
console.log(storage)
const Create = () => {
  const [formData, setFormData] = useState({
    title: '',
    resource: '',
    username: '',
    description: '',
    resourceType: '',
    category: '',
    grade: '',
  });

  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false)


  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileUpload = async (e) => {
    try {
      setIsUploading(true)
      const storageRef = ref(storage, 'path/to/upload/' + file.name);
      const snapshot = await uploadBytes(storageRef, file);

      console.log('File uploaded successfully');
      const fileUrl = await getDownloadURL(snapshot.ref);
      // console.log('Download URL:', fileUrl);
      setFormData({ ...formData, resource: fileUrl })
    } catch (error) {
      console.log('Error uploading file:', error);
    }
    finally {
      setIsUploading(false)
    }
  }


  const handleSubmit = async (e) => {

    try {
      e.preventDefault();

      // Validate form data
      const newErrors = {};
      if (formData.title.trim() === '') {
        newErrors.title = 'Title is required';
      }
      if (formData.resource.trim() === '') {
        newErrors.resource = 'Resource is required';
      }
      if (formData.username.trim() === '') {
        newErrors.username = 'Username is required';
      }
      if (formData.resourceType.trim() === '') {
        newErrors.resourceType = 'Resource Type is required';
      }
      setErrors(newErrors);



      if (Object.keys(newErrors).length === 0) {

        const resposne = await axios.post(`${apiUrl}/material/add`, formData)
        if (resposne.status === 201) {
          console.log(resposne.data.data)
        }
      }
    }
    catch (error) {
      alert("There is some error")
    }
    finally {

    }
  };

  const resourceTypes = ['PDF', 'Word', 'Link', 'Image', 'Others'];

  return (
    <div className="container mx-auto mt-20">
      <div className=" rounded-lg shadow p-6 bg-dark text-white">
        <h2 className="text-2xl font-bold mb-4">Add Material</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
              required
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>
          <div>
            <div>
              <label htmlFor="file" className="block text-sm font-medium mb-1">
                File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className={`w-full py-2 px-3 border rounded-sm ${errors.file ? 'border-red-500' : ''}`}
              />
            </div>

            {
              file && <button className="bg-brownish hover:bg-opacity-90 text-white py-2 px-4 rounded-sm transition-colors duration-300 my-4" onClick={handleFileUpload}>
                {
                  isUploading ? <CircularLoader /> : <>{"Upload"}</>
                }
              </button>
            }
            <label htmlFor="resource" className="block text-sm font-medium mb-1">
              Resource<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="resource"
              name="resource"
              value={formData.resource}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
              disabled={true}
              required
            />
            {errors.resource && <p className="text-red-500 text-xs mt-1">{errors.resource}</p>}
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
              required
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
              rows="3"
            ></textarea>
          </div>
          <div>

            <label htmlFor="resourceType" className="block text-sm font-medium mb-1">
              Resource Type
            </label>
            <select
              id="resourceType"
              name="resourceType"
              value={formData.resourceType}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
            >
              <option value="">Select Resource Type</option>
              {resourceTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.resourceType && <p className="text-red-500 text-xs mt-1">{errors.resourceType}</p>}
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
            />
          </div>
          <div>
            <label htmlFor="grade" className="block text-sm font-medium mb-1">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full py-2 px-3 border rounded-sm text-dark font-bold text-xl"
            />
          </div>
          <button
            type="submit"
            className="bg-green1 hover:bg-green2 text-white py-2 px-4 rounded-sm transition-colors duration-300"
          >
            Share Material
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create