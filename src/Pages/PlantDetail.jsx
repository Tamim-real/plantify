import React from "react";
import usePlants from "../hooks/usePlants";
import { useParams } from "react-router";
import { Star } from "lucide-react";

const PlantDetail = () => {
  const { plants, loading, error } = usePlants();
  const { id } = useParams();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error loading plant!</p>;

  const plant = plants.find((p) => p.plantId.toString() === id);
  if (!plant) return <p className="text-center mt-10">Plant not found!</p>;

  return (
    <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 group mx-auto mt-10">
      
      {/* Cover Image */}
      <div
        className="relative h-80 md:h-96 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
      >
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Shining effect */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent
                     translate-x-[-100%] group-hover:translate-x-[100%]
                     transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{plant.plantName}</h2>
        <p className="text-gray-600 text-md md:text-lg mb-5 line-clamp-3">{plant.description}</p>

        <div className="flex flex-wrap justify-between items-center mb-5 gap-4">
          <span className="text-2xl font-bold text-green-600">${plant.price}</span>
          <span className="flex items-center text-yellow-500 font-medium gap-1">
            <Star size={20} fill="#facc15" />
            {plant.rating}
          </span>
          <span
            className={`text-lg font-medium ${
              plant.availableStock > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {plant.availableStock > 0 ? `${plant.availableStock} in stock` : "Out of stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;
