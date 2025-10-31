import React from 'react';
import logoLight from '../assets/logo-light-theme.png';
import logoDark from '../assets/logo-dark-theme.png';

const Header = ({ darkMode, toggleTheme }) => {
    return (
        <header className='flex items-center justify-between px-4 py-4 bg-white dark:bg-[#444654] shadow-md'>
            {/* Logo */}
            <img
                src={darkMode ? logoDark : logoLight}
                alt='Logo'
                className='h-10 w-auto'
            />

            {/* Title */}
            <h1 className='text-xl font-bold text-gray-900 dark:text-gray-100'>
                TaskFlow
            </h1>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className='bg-[#10a37f] hover:bg-[#0f8f70] text-white px-4 py-2 rounded transition-colors'
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
};

export default Header;
