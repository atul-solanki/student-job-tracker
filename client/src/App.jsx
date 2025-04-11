import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Filter from './components/Filter';
import './App.css';

const API_URL = 'https://student-job-tracker-2em4.onrender.com/api/jobs';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  // Fetch all jobs
  const fetchJobs = async () => {
    const res = await axios.get(API_URL);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add job
  const addJob = async (formData) => {
    await axios.post(API_URL, formData);
    fetchJobs();
  };

  // Delete job
  const deleteJob = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchJobs();
  };

  // Update job status
  const updateStatus = async (id, status) => {
    await axios.put(`${API_URL}/${id}`, { status });
    fetchJobs();
  };

  // Filter jobs
  const filteredJobs = filterStatus === 'All'
    ? jobs
    : jobs.filter((job) => job.status === filterStatus);

  return (
    <div className="app-container">
      <header className="header">
        <h1>🎓 Student Job Tracker</h1>
      </header>

      <JobForm onAdd={addJob} />

      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

      <JobList jobs={filteredJobs} onDelete={deleteJob} onStatusChange={updateStatus} />
    </div>
  );
}

export default App;
