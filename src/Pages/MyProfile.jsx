import React, { useContext } from "react";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { AuthContext } from "../Context/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-10">
      {/* Cover Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={user.photoURL|| "https://via.placeholder.com/1200x400"}
          alt="Cover"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>

      {/* Profile Picture & Name */}
      <div className="relative px-6 md:px-10 -mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Picture */}
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
          />

          {/* Name & Bio */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900">
              {user.displayName || "No Name"}
            </h2>
            <p className="text-gray-500 mb-2">{user.email}</p>
          </div>

          {/* Edit Button */}
          <button className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all">
            Edit Profile
          </button>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-800 mb-5">
          {/* Email */}
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <Mail size={18} /> {user.email}
          </div>

          {/* Phone */}
          {user.phoneNumber && (
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <Phone size={18} /> {user.phoneNumber}
            </div>
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-auto">
            {user.social?.linkedin && (
              <a href={user.social.linkedin}>
                <Linkedin
                  className="text-blue-600 hover:scale-110 transition-transform"
                  size={22}
                />
              </a>
            )}
            {user.social?.github && (
              <a href={user.social.github}>
                <Github
                  className="hover:scale-110 transition-transform"
                  size={22}
                />
              </a>
            )}
            {user.social?.twitter && (
              <a href={user.social.twitter}>
                <Twitter
                  className="text-blue-400 hover:scale-110 transition-transform"
                  size={22}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
