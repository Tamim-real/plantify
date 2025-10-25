import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {
      alert("Logged out successfully!");
    });
  };

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 border-b-2 border-green-600 pb-1"
      : "text-gray-700 hover:text-green-600";

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600 cursor-pointer">
            🌱 Plantify
          </Link>
          <div className="hidden md:flex space-x-8 font-medium">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/plants" className={linkClass}>Plants</NavLink>
            <NavLink to="/my-profile" className={linkClass}>My Profile</NavLink>
            <NavLink to="/community" className={linkClass}>Community</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={user.photoURL || defaultAvatar}
                    alt="User Avatar"
                    className="w-9 h-9 rounded-full border-2 border-green-500 object-cover"
                  />
                  <span className="font-medium text-gray-700">
                    {user.displayName || "User"}
                  </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="px-4 py-2 border-b text-gray-700 font-medium">
                      {user.displayName || "User"}
                    </div>
                    <div className="px-4 py-2 text-gray-500 text-sm truncate">
                      {user.email}
                    </div>
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
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/plants" className={linkClass}>Plants</NavLink>
            <NavLink to="/my-profile" className={linkClass}>My Profile</NavLink>
            <NavLink to="/community" className={linkClass}>Community</NavLink>
            {user ? (
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={user.photoURL || defaultAvatar}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
                />
                <div className="text-gray-700 font-medium">
                  {user.displayName || "User"}
                </div>
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
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
