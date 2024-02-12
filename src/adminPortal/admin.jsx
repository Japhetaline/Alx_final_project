import React, { useState } from 'react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h2>Welcome to the Admin Portal</h2>
      <div className="tabs">
        <button className={`tab-button ${activeTab === 'dashboard' && 'active'}`} onClick={() => handleTabClick('dashboard')}>Dashboard</button>
        <button className={`tab-button ${activeTab === 'users' && 'active'}`} onClick={() => handleTabClick('users')}>Users</button>
        <button className={`tab-button ${activeTab === 'department' && 'active'}`} onClick={() => handleTabClick('department')}>Department</button>
        <button className={`tab-button ${activeTab === 'settings' && 'active'}`} onClick={() => handleTabClick('settings')}>Settings</button>
      </div>
      <div className="tab-content">
        {activeTab === 'dashboard' && <DashboardContent />}
        {activeTab === 'users' && <UsersContent />}
        {activeTab === 'department' && <DepartmentContent />}
        {activeTab === 'settings' && <SettingsContent />}
      </div>
    </div>
  );
}

const DashboardContent = () => {
  return (
    <div>
      {/* Dashboard content */}
      <p>Dashboard content goes here...</p>
    </div>
  );
};

const UsersContent = () => {
  return (
    <div>
      {/* Users content */}
      <p>Users content goes here...</p>
    </div>
  );
};

const DepartmentContent = () => {
  return (
    <div>
      {/* Department content */}
      <p>Department content goes here...</p>
      <button>Create New Department</button>
    </div>
  );
};

const SettingsContent = () => {
  return (
    <div>
      {/* Settings content */}
      <p>Settings content goes here...</p>
    </div>
  );
};

export default Admin;
