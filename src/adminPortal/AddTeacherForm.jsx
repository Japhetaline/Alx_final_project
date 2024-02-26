import React, { useState } from 'react';
import { FaUserPlus } from "react-icons/fa";

const AddTeacherForm = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    return (
        <div className="p-4">
            <button  onClick={handleButtonClick} className=" flex bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            <FaUserPlus fontSize={'20px'} className="mr-2" />
               {showForm ? 'Close Form' : 'Add New Teacher'}
            </button>

            {showForm && (
                <form className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Full Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                        <select id="gender" name="gender" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="entryYear" className="block text-gray-700 text-sm font-bold mb-2">Entry Year:</label>
                        <input type="number" id="entryYear" name="entryYear" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Entry Year" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default AddTeacherForm;
