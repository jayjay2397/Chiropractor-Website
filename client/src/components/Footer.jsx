import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-teal-600  text-white py-6 text-center">
            <p>&copy; {new Date().getFullYear()} ChiroClinic. All rights reserved.</p>
        </footer>
    );
};

export default Footer;