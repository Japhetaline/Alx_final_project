import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homePage/homePage';
import AdminPage from './adminPortal/admin'
import StudentLogin from './studentPortal/Login'
import StudentSignup from './studentPortal/SignUp'
import StudentDashboard from './studentPortal/Dashboard'
import TeacherPage from './teacherPortal/teacher'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <div>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/student_signup" element={<StudentSignup />} />
      <Route path="/student_login" element={<StudentLogin />} />
      <Route path="/student_dashboard" element={<StudentDashboard />} />
      <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
     </div>
     </BrowserRouter>
      
    </>
  )
}

export default App
