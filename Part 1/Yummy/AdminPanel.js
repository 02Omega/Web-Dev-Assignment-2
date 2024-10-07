import React, { useState } from 'react';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2 className="card-title">Complaint Cell</h2>
            </div>
            <div className="card-body">
              <form id="complaintForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Complaint Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter the title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email ID <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Complaint Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Describe your complaint"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Upload Image (Optional)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit Complaint
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
