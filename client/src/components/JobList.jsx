import React from 'react';
import JobCard from './JobCard';
import '../styles/JobList.css'; // Importing CSS for styling

/**
 * JobList Component
 * - Displays a list of all job applications
 * - Supports updating job status and deleting jobs
 */
const JobList = ({ jobs, onDelete, onStatusChange }) => {
  return (
    <div className="job-list">
      {/* If no jobs available, show a friendly message */}
      {jobs.length === 0 ? (
        <p className="no-jobs-msg">
          🚫 No job applications found. Start by adding one!
        </p>
      ) : (
        // Map and display each job card
        jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        // Pass job ID and new status to the parent component for handling
        ))
      )}
    </div>
  );
};

export default JobList;
