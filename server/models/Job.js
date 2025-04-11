const mongoose = require('mongoose');

// Job Schema & Model
const jobSchema = new mongoose.Schema({
    company: String,
    role: String,
    status: {
      type: String,
      enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
      default: 'Applied',
    },
    date: Date,
    link: String,
  });
  
  module.exports= mongoose.model('Job', jobSchema);
// This model defines the structure of a job document in the MongoDB database. It includes fields for the company name, job role, application status, date of application, and a link to the job posting. The status field is an enumerated type with predefined values. The model is then exported for use in other parts of the application.
// This model is used to interact with the MongoDB database, allowing for CRUD operations on job documents. The schema defines the structure of the data, including types and constraints, while the model provides methods for querying and manipulating the data in the database. The model is created using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js.