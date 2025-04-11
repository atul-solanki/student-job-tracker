/**
 * JobCard Component
 * - Responsible for displaying a single job entry
 * - Shows job details and provides status update & delete functionality
*/
import React from 'react';
import '../styles/JobCard.css'; // Importing CSS for styling

const JobCard = ({ job, onDelete, onStatusChange }) => {
  return (
    <div className="job-card" key={job._id}>
      {/* Display company name and role */}
      <h3>{job.company} — {job.role}</h3>

      {/* Show job application status */}
      <p><strong>Status:</strong> {job.status}</p>

      {/* Show application date (formatted to YYYY-MM-DD) */}
      <p><strong>Date:</strong> {job.date?.slice(0, 10)}</p>

      {/* Conditionally render job link if available */}
      {job.link && (
        <a href={job.link} target="_blank" rel="noreferrer">
          Job Link: {job.link}
        </a>
      )}

      {/* Actions: Update status or delete job */}
      <div className="job-actions">
        <span>Status Update:</span>

        {/* Dropdown to change status */}
        <select
          className="status-select"
          value={job.status}
          onChange={(e) => onStatusChange(job._id, e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        {/* Button to delete this job entry */}
        <button className="delete-btn" onClick={() => onDelete(job._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;

