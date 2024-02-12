import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homePage/homePage'
import AdminPage from './adminPortal/admin'
import StudentPage from './studentPortal/studentPortal'
import TeacherPage from './teacherPortal/teacherPortal'
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <div>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
     </div>
     </BrowserRouter>
      
    </>
  )
}

export default App
