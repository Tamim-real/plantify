import React, { useState, useContext } from "react";
import { Mail, Lock, User, Image as ImageIcon, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photo = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    setError("");
    setSuccess(false);
    setLoading(true);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // ✅ Update name & photo in Firebase profile
        updateUser({
          displayName: name,
          photoURL: photo || "https://via.placeholder.com/150",
        })
          .then(() => {
            // ✅ Update local state too
            setUser({
              ...user,
              displayName: name,
              photoURL: photo || "https://via.placeholder.com/150",
            });
            setSuccess(true);
            e.target.reset();
          })
          .catch((err) => {
            console.error("Profile update failed:", err);
            setError("Failed to update profile info.");
          });
      })
      .catch((err) => {
        console.error("Registration error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f9fc] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold mb-1">Photo URL</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <ImageIcon className="text-gray-400 mr-2" size={18} />
              <input
                type="url"
                name="photo"
                placeholder="Paste your photo URL"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Lock className="text-gray-400 mr-2" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error & Success */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">Registration successful!</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          {/* Login Link */}
          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
