import React, { use, useState } from "react";
import { Mail, Lock, User, Image as ImageIcon, Eye, EyeOff } from "lucide-react";


import { Link } from "react-router-dom"; // <-- Import Link
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
    const {createUser, setUser} = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;


    const validation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!validation.test(password)) {
      setError(
        "Password must contain at least 6 characters, one uppercase, one lowercase, and one number."
      );
      setLoading(false);
      return;
    }

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
         setSuccess(true);
         setUser(user);
      e.target.reset();
        
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
    })

  }

  const inputClass =
    "pl-10 w-full border rounded-md py-2 px-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none";

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1 relative">
              <User size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <div className="mt-1 relative">
              <ImageIcon size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="url"
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative">
              <Mail size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <Lock size={16} className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                required
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition-all disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {success && <p className="text-green-600 text-center">Account registered successfully!</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>

        {/* Link to Login */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
