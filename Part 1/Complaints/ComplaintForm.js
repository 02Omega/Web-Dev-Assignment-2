import React, { useState } from 'react';

const ComplaintForm = () => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ title, email, description, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Complaint Title */}
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
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Email */}
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
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Complaint Description */}
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
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Image Upload (Optional) */}
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Upload Image (Optional)</label>
        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-success">Submit Complaint</button>
    </form>
  );
};

export default ComplaintForm;
