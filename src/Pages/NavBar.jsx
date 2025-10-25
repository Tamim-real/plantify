import React, { useState, useContext } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
// adjust path according to your project

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { user, setUser, logOut } = useContext(AuthContext);

  const handleLogout=()=>{
    logOut().then(()=>{
      alert('loggeed out')
    })
    
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-600 cursor-pointer">
            🌱 Plantify
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <NavLink to="/" className="hover:text-green-600">Home</NavLink>
            <NavLink to="/plants" className="hover:text-green-600">Plants</NavLink>
            <NavLink to="/my-profile" className="hover:text-green-600">My Profile</NavLink>
            <a href="#" className="hover:text-green-600">Community</a>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2"
                >
                  <User size={24} className="text-green-600" />
                  <span className="font-medium text-gray-700">{user.name}</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="px-4 py-2 text-gray-700 font-medium">{user.name}</div>
                    <div className="px-4 py-2 text-gray-500 text-sm">{user.email}</div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-green-600 hover:text-white transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink>
            <NavLink to="/plants" className="text-gray-700 hover:text-green-600">Plants</NavLink>
            <NavLink to="/my-profile" className="text-gray-700 hover:text-green-600">My Profile</NavLink>
            <a href="#" className="text-gray-700 hover:text-green-600">Community</a>

            {user ? (
              <div className="flex flex-col items-center space-y-2">
                <div className="text-gray-700 font-medium">{user.name}</div>
                <div className="text-gray-500 text-sm">{user.email}</div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 w-full text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link to="/login-regi">
                  <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
