import React, { useState } from 'react';
import Calender from './calender';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function teacher() {

      // Sample data for courses and departments
  const [courses] = useState(['Mathematics', 'Physics', 'English']);
  const [departments] = useState(['Science', 'Arts', 'Commerce']);


    //Assignment Submission Functionality
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState('');

  // Function to handle submission of new assignment
  const submitNewAssignment = () => {
    if (newAssignment.trim() !== '') {
      // Add new assignment to the list of submitted assignments
      setSubmittedAssignments([...submittedAssignments, newAssignment]);
      // Clear the input field
      setNewAssignment('');
    }
  };

  //Resources Functionality
    const [resourceLinks, setResourceLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  // Function to add a new external resource link
  const addResourceLink = () => {
    if (newLink.trim() !== '') {
      setResourceLinks([...resourceLinks, newLink]);
      setNewLink('');
    }
  };

  // Function to handle input change for new link
  const handleInputChange = (event) => {
    setNewLink(event.target.value);
  };

  // Function to send external links to students
  const sendLinksToStudents = () => {
    // Code to send links to students
    console.log('Links sent to students:', resourceLinks);
    // You can implement functionality to send links via email, messaging, or other means
  };
  return (
    <>
    <div className="">
        <h1>Welcome to Teacher Portal</h1>
    </div>
      <Tabs>
  <TabList gap={4}>
    <Tab>Student Course</Tab>
    <Tab>Assignment</Tab>
    <Tab>Resources/Materials</Tab>
    <Tab>Calender</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Teacher Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index} className="mb-2">{course}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Departments</h2>
        <ul>
          {departments.map((department, index) => (
            <li key={index} className="mb-2">{department}</li>
          ))}
        </ul>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Teacher Assignments</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Submitted Assignments</h2>
        <ul>
          {submittedAssignments.map((assignment, index) => (
            <li key={index} className="mb-2">{assignment}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Write New Assignment</h2>
        <textarea
          value={newAssignment}
          onChange={(e) => setNewAssignment(e.target.value)}
          placeholder="Write your new assignment here..."
          rows="4"
          cols="50"
          className="w-full border border-gray-300 rounded p-2 mb-2"
        ></textarea>
        <button
          onClick={submitNewAssignment}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Assignment
        </button>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Teacher Dashboard</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">External Resource Links</h2>
        <ul className="mb-4">
          {resourceLinks.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{link}</a>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newLink}
          onChange={handleInputChange}
          placeholder="Enter new link"
          className="w-full border border-gray-300 rounded p-2 mb-2"
        />
        <button
          onClick={addResourceLink}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Link
        </button>
      </div>
      <div>
        <button
          onClick={sendLinksToStudents}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Send Links to Students
        </button>
      </div>
    </div>
    </TabPanel>
    <TabPanel>
      <Calender/>
    </TabPanel>
  </TabPanels>
</Tabs>
  </>
  )
}

export default teacher