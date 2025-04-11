/**
 * Filter Component
 * - Allows the user to filter job applications based on status
 */
import React from 'react';
import '../styles/Filter.css'; // Importing CSS for styling

const Filter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="filter-container">
      <label htmlFor="statusFilter">Filter:</label>
      <select
        id="statusFilter"
        className="filter-select"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default Filter;
