
import React from 'react';
import { Link, Links } from 'react-router';

const Cards = ({plants}) => {

    console.log(plants);
    
    return (
            <div
      className="relative w-80 bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 group"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
      }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={plants.image}
          alt={plants.plantName}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Shining overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      </div>

      {/* Info Section */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {plants.plantName}
        </h2>

        <div className="flex justify-center items-center gap-3 mb-3">
          <span className="text-lg font-bold text-green-600">
            ${plants.price}
          </span>
          <span className="flex items-center text-yellow-500 font-medium">
            ⭐ {plants.rating}
          </span>
        </div>

        {/* Button */}
        
        <Link to={`/plant/${plants.plantId}`}><button className="relative overflow-hidden px-5 py-2 bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
          <span className="relative z-10">View Details</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button></Link>
      </div>
    </div>
    );
};

export default Cards;