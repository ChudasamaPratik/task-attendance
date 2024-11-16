// src/components/NavButtons.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavButtons = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = (route) => {
        if (route === 'logout') {
            navigate('/login'); // Redirect to login page on logout
        } else {
            navigate(`/${route}`);
        }
    };

    return (
        <div className="flex space-x-6 mt-6">
            {/* Conditionally render each button only if the current path is not the route of that button */}
            {location.pathname !== '/dashboard' && (
                <button
                    onClick={() => handleButtonClick('dashboard')}
                    className="px-6 py-3 bg-transparent text-blue-600 font-semibold hover:text-white transition-colors duration-200"
                >
                    Dashboard
                </button>
            )}
            {location.pathname !== '/attendance' && (
                <button
                    onClick={() => handleButtonClick('attendance')}
                    className="px-6 py-3 bg-transparent text-blue-600 font-semibold hover:text-white transition-colors duration-200"
                >
                    Attendance
                </button>
            )}
            {location.pathname !== '/task' && (
                <button
                    onClick={() => handleButtonClick('task')}
                    className="px-6 py-3 bg-transparent text-blue-600 font-semibold hover:text-white transition-colors duration-200"
                >
                    Task
                </button>
            )}
            {location.pathname !== '/projects' && (
                <button
                    onClick={() => handleButtonClick('projects')}
                    className="px-6 py-3 bg-transparent text-blue-600 font-semibold hover:text-white transition-colors duration-200"
                >
                    Projects
                </button>
            )}
            {/* Log out button should always be shown */}
            <button
                onClick={() => handleButtonClick('logout')}
                className="px-6 py-3 bg-transparent text-red-600 font-semibold hover:text-white transition-colors duration-200"
            >
                Log out
            </button>
        </div>
    );
};

export default NavButtons;
