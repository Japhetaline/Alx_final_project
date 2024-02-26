import React, { useState } from 'react';

function SettingsTab() {
  const [theme, setTheme] = useState('light'); // Default theme
  const [language, setLanguage] = useState('en'); // Default language
  const [notifications, setNotifications] = useState(true); // Default notification setting

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  // Function to toggle notifications
  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      {/* Theme selection */}
      <div className="flex items-center mb-4">
        <label className="mr-2">Theme:</label>
        <button
          className={`px-3 py-1 rounded ${
            theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Language selection */}
      <div className="flex items-center mb-4">
        <label className="mr-2">Language:</label>
        <button
          className={`px-3 py-1 rounded ${
            language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={toggleLanguage}
        >
          {language === 'en' ? 'English' : 'French'}
        </button>
      </div>

      {/* Notification preferences */}
      <div className="flex items-center mb-4">
        <label className="mr-2">Notifications:</label>
        <button
          className={`px-3 py-1 rounded ${
            notifications ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={toggleNotifications}
        >
          {notifications ? 'Enabled' : 'Disabled'}
        </button>
      </div>

      {/* Account management options */}
      <div className="flex flex-col space-y-2">
        <button className="px-4 py-2 rounded bg-blue-500 text-white">Change Password</button>
        <button className="px-4 py-2 rounded bg-red-500 text-white">Delete Account</button>
      </div>
    </div>
  );
}

export default SettingsTab;
