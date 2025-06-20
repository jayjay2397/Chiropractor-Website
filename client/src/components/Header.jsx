import React from "react";

const Header = () => (
    <header className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-800 mb-4 sm:mb-0">🌀 CHIROPRACTOR</div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
        </nav>
    </header>
);

export default Header;