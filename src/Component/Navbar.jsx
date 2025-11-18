import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Food', path: '/food' },
    { id: 3, label: 'Cart', path: '/cart' },
    { id: 4, label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1 text-sm font-bold text-white hover:shadow-lg transition duration-200 sm:px-4 sm:text-base"
          >
            <span className="text-lg">🍽️</span>
            Recipe
          </Link>

          {/* Desktop Menu (md and above) */}
          
          <div className="hidden md:flex  gap-6 mx-auto">
            {navLinks.map((link) => (
              <Link     
                key={link.id}
                to={link.path}
                onClick={closeMenu} 
                className="rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
              >
                {link.label}





              </Link>
            ))}


            </div>
            <Link
              to="/signup"
              onClick={closeMenu}
              className=" hidden md:flex ml-4 rounded-lg bg-black py-2 px-4 text-base font-semibold text-white hover:bg-gray-800 transition duration-200"
            >
              Sign Up
            </Link>
          


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 md:hidden"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <ul className="space-y-2 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/signup"
            onClick={closeMenu}
            className="mt-3 block w-full rounded-lg bg-black py-2 text-center text-base font-semibold text-white hover:bg-gray-800 transition duration-200"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
