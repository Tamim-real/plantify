import React from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage= () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-6">
      {/* Icon */}
      <Leaf className="w-20 h-20 text-green-600 mb-6 animate-bounce" />

      {/* Error Code */}
      <h1 className="text-6xl font-extrabold text-green-800 mb-4">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Looks like this plant wandered off into the jungle 🌿.  
        The page you’re looking for doesn’t exist.
      </p>

      {/* Back to Home */}
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
