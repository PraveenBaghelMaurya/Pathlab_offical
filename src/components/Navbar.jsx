import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
// import { Auth0Provider } from "@auth0/auth0-react";

import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#cce6ff] shadow-lg text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to={`/`}>
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="./images/PathLab_logo.png"
                  alt="PathLab Logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  PathLab
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>

            <Link
              to="/ServicesPage"
              className="text-gray-600 hover:text-gray-900"
            >
              Services
            </Link>

            <Link to="/AboutUs" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>

            <Link
              to="/CareersPage"
              className="text-gray-600 hover:text-gray-900"
            >
              Careers
            </Link>

            <div className="flex items-center">
              {/* <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <User size={20} />
                <span>Profile</span>
              </button> */}
              {isAuthenticated && (
                <li>
                  <p> {user.name} </p>
                </li>
              )}
              {/* {isAuthenticated ? (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              ) : (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              )} */}
              {isAuthenticated ? (
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </button>
              ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="/services"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              About Us
            </a>
            <a
              href="/careers"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Careers
            </a>
            <div className="px-3 py-2">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <User size={20} />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
