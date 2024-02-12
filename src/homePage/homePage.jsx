import React from 'react'
import Navbar from '../Navbar/Navbar'
function homePage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-lg bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 center">Welcome to the Student Information Management System</h1>
      <p className="text-lg mb-6">Please select your portal:</p>
      <ul className="space-y-2">
        <li>
          <a href="/admin" className="block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">Admin Portal</a>
        </li>
        <li>
          <a href="/teacher" className="block px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300">Teacher Portal</a>
        </li>
        <li>
          <a href="/student" className="block px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">Student Portal</a>
        </li>
      </ul>
    </div>
  </div>
  </>
  )
}

export default homePage