import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function StudentProfile({ name, imageUrl }) {
    return (
      <div className="flex items-center justify-center flex-col">
        <img src={imageUrl} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-xl font-semibold">{name}</h2>
        {/* Add other profile details if needed */}
      </div>
    );
  }

  const StudentSubmissionTab = () => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    };
  
    const handleSubmit = () => {
      // Logic to handle submission
      console.log('Submitting file:', file);
      // You can implement your submission logic here, such as sending the file to the server
    };
  }

const Dashboard = () => {
    const student = {
        name: "John Doe",
        imageUrl: "data:image/jpeg;base64,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", // Replace with actual image URL
        // Add other profile details as needed
    }
  return (
    <>
      <div>
          <h1 className='flex justify-center text-2xl font-bold'>Welcome to Student Dashboard</h1>
      </div>
      <Tabs size='lg'>
  <TabList gap={4}>
    <Tab>Profile</Tab>
    <Tab>Assignments</Tab>
    <Tab>Courses</Tab>
    <Tab>Scores</Tab>
    <Tab>Submissions</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Student Profile</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p className="text-gray-700">John Doe</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
            <p className="text-gray-700">12</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Grade:</label>
            <p className="text-gray-700">76%</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <p className="text-gray-700">Greenwood street, Alabama, USA</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contact:</label>
            <p className="text-gray-700">4993400388</p>
          </div>
        </div>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Assignment</h2>
      <div>
        <p className="mb-2"><span className="font-bold">Subject:</span> Mathematics</p>
        <p className="mb-2"><span className="font-bold">Topic:</span> Algebra</p>
        <p className="mb-2"><span className="font-bold">Due Date:</span> January 30, 2023</p>
        {/* Add more assignment details here */}
        Write history on creation of Slave trade
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="courseName">
          Course Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="courseName"
          type="text"
          placeholder="Enter course name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="courseCode">
          Course Code
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="courseCode"
          type="text"
          placeholder="Enter course code"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="instructor">
          Instructor
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="instructor"
          type="text"
          placeholder="Enter instructor's name"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Save
      </button>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Scores</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
          Subject
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          type="text"
          placeholder="Enter subject"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="score">
          Score
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="score"
          type="text"
          placeholder="Enter score"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Save
      </button>
    </div>
    </TabPanel>
<TabPanel>
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-bold mb-4">Submission</h2>
      <div className="mb-4">
        <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
          Choose File
        </label>
        <input
          type="file"
          id="file"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
    </TabPanel>
  </TabPanels>
</Tabs>
  </>
  );
};

export default Dashboard;
