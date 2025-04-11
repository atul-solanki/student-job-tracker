# 🎓 Student Job Tracker

A full-stack web application to help students keep track of their job applications. Built with **React**, **Node.js**, **Express**, and **MongoDB**, and deployed on **Vercel** and **Render**.

---

## 🚀 Features

- ✅ Add new job applications with details
- ✅ Update application status (Applied / Interview / Offer / Rejected)
- ✅ Delete applications
- ✅ Filter applications by status
- ✅ Responsive design for all screen sizes
- ✅ Company-based role suggestions (auto-fill feature)

---

## 🛠️ Tech Stack

**Frontend:**
- React (with Hooks)
- Axios
- CSS (custom, responsive)

**Backend:**
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)

**Deployment:**
- Vercel (Frontend)
- Render or Railway (Backend)

---

## 📂 Folder Structure

student-job-tracker/ ├── client/ # React frontend │ ├── components/ # Reusable UI components │ ├── App.jsx │ ├── main.jsx │ └── index.css ├── server/ # Express backend │ ├── models/ # Mongoose schemas │ ├── routes/ # API routes │ ├── controllers/ # Route logic │ ├── config/ # DB config │ └── server.js # App entry point ├── .env # Environment variables ├── README.md # You're here!

---

## 📦 Installation

### 1. Clone the repository
```
git clone https://github.com/atul-solanki/student-job-tracker.git
cd student-job-tracker
```

### 2. Setup the Backend
```
cd server
npm install
```
- Create a .env file: 
```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```
- Run the backend:
```
npm run dev
```
### 3. Setup the Frontend
```
cd ../client
npm install
npm run dev
```

# 🔌 API Endpoints

| **Method** | **Endpoint**     | **Description**                 |
|------------|------------------|---------------------------------|
| GET        | `/api/jobs`      | Get all job applications        |
| POST       | `/api/jobs`      | Add a new application           |
| PUT        | `/api/jobs/:id`  | Update application status       |
| DELETE     | `/api/jobs/:id`  | Delete a job application        |



# 🧪 Testing
You can use **Postman** or **Thunder Client** to test the API. Example test:

- POST `/api/jobs`
```
{
  "company": "Google",
  "role": "Frontend Developer",
  "status": "Applied",
  "date": "2025-04-10",
  "link": "https://careers.google.com"
}
``` 
# 🖼️ Screenshots
![image](https://github.com/user-attachments/assets/d433e2b0-fe8a-418b-8072-dfa41c910506)


# 💡 Future Improvements 

✅ Authentication (Login/Register)

✅ Resume upload & job notes

✅ Dark/light theme toggle

# 📄 License
This project is licensed under the MIT License.

# 🤝 Contributing
Pull requests and contributions are welcome!
Please open an issue to discuss before submitting PRs.

# 👨‍💻 Author
Made with ❤️ by **ATUL SOLANKI**

[GitHub](https://github.com/atul-solanki)

---