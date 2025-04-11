// JobForm Component
// This component handles the job application form input and submission

import React, { useState } from 'react';
import '../styles/JobForm.css'; // Importing CSS for styling

const JobForm = ({ onAdd }) => {
  // Initial state for form fields
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: ''
  });

  // Handle change for all input/select fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check for empty fields before submitting
    const { company, role, status, date, link } = formData;
    if (!company || !role || !status || !date || !link) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Call the onAdd function passed via props and reset form
    onAdd(formData);
    setFormData({ company: '', role: '', status: 'Applied', date: '', link: '' });
  };

  return (
    // Job Form wrapper with styling class from external CSS
    <form className="job-form" onSubmit={handleSubmit}>

      {/* Company Input */}
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      {/* Role Input */}
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />

      {/* Status Dropdown */}
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      {/* Date Picker */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      {/* Job Link URL Input */}
      <input
        type="url"
        name="link"
        placeholder="Job Link"
        value={formData.link}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button type="submit">
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
