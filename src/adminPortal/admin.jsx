import React, { useState } from 'react';
import SettingsTab from './SettingsTab';
import DepartmentTab from './DepartmentTab';
import Admin_teacherPage from './Admin_teacherPage';
import Admin_studentPage from './Admin_studentPage';
import AddTeacherForm from './AddTeacherForm';
// import LineChart from './chart';

function Admin() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update active tab
  };

  return (
    <>
      
      <div className="mt-5">
        {/* Tabs */}
        <div>
            <h1 className='flex justify-center text-2xl font-bold'>Welcome to Admin Dashboard</h1>
        </div>
        <div className="ml-5">
        <AddTeacherForm />
      </div>
        <div className="flex justify-end mb-5">
           <button
        type="button"
        className={`px-4 py-4 mr-4 bg-gray-200 hover:bg-gray-300 rounded-md ${
          activeTab === 'USERS' && 'bg-gray-300'
        }`}
        onClick={() => handleTabChange('USERS')}
      >
        USERS
      </button>
      {/* Dropdown menu */}
          <button
            className={`px-4 py-2 mr-4 bg-gray-200 hover:bg-gray-300 rounded-md ${
              activeTab === 'DEPARTMENTS' && 'bg-gray-300'
            }`}
            onClick={() => setActiveTab('DEPARTMENTS')}
          >
            DEPARTMENTS
          </button>
          <button
            className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md ${
              activeTab === 'SETTINGS' && 'bg-gray-300'
            }`}
            onClick={() => setActiveTab('SETTINGS')}
          >
            SETTINGS
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'USERS' && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {/* Teacher section */}
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={() => handleTabChange('TEACHERS')}
            >
              Teacher
            </button>
            {/* Student section */}
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={() => handleTabChange('STUDENTS')}
            >
              Student
            </button>
          </div>
        </div>
      )}
{/* Render form based on active tab */}
      {activeTab === 'TEACHERS' && <Admin_teacherPage />}
      {activeTab === 'STUDENTS' && <Admin_studentPage />}
        {activeTab === 'DEPARTMENTS' && (
          <>
            <DepartmentTab />
          </>
        )}

        {activeTab === 'SETTINGS' && (
          <>
             <SettingsTab />
          </>
        )}
      </div>

      {/* <LineChart /> */}
    </>
  );
}

export default Admin;
