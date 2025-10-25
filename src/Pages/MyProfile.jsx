import React, { useContext, useState } from "react";
import { Mail, Phone, Linkedin, Github, Twitter, X } from "lucide-react";
import { AuthContext } from "../Context/AuthProvider";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUser({ displayName: name, photoURL }); 
      alert("✅ Profile updated successfully!");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mt-10 relative">
      {/* Cover Photo */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={user?.photoURL || "https://via.placeholder.com/1200x400"}
          alt="Cover"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>

      {/* Profile Info */}
      <div className="relative px-6 md:px-10 -mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900">
              {user?.displayName || "No Name"}
            </h2>
            <p className="text-gray-500 mb-2">{user?.email}</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all"
          >
            Update Profile
          </button>
        </div>

        
        <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-800 mb-5">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <Mail size={18} /> {user?.email}
          </div>

          {user?.phoneNumber && (
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <Phone size={18} /> {user.phoneNumber}
            </div>
          )}

          <div className="flex items-center gap-4 ml-auto">
            {user?.social?.linkedin && (
              <a href={user.social.linkedin}>
                <Linkedin
                  className="text-blue-600 hover:scale-110 transition-transform"
                  size={22}
                />
              </a>
            )}
            {user?.social?.github && (
              <a href={user.social.github}>
                <Github className="hover:scale-110 transition-transform" size={22} />
              </a>
            )}
            {user?.social?.twitter && (
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

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[400px] p-6 rounded-2xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Update Your Profile
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  placeholder="Enter your photo URL"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
