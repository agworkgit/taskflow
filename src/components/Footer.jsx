import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full py-4 mt-8 bg-gray-100 dark:bg-[#343541] text-gray-700 dark:text-gray-300 text-center transition-colors'>
            <p>&copy; {currentYear} Alex Grigore. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
