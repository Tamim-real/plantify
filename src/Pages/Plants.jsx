import React from "react";
import { Star } from "lucide-react";
import usePlants from "../hooks/usePlants";

const Plants = () => {
  const { plants, loading, error } = usePlants();
  console.log(plants);
  

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading plants!</p>;

  return (
    <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {plants.map((plant) => (
        <div
          key={plant.plantId}
          className="w-11/12 max-w-md bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {/* Image */}
          <div
            className="relative h-64 overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
            }}
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {plant.plantName}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {plant.description}
            </p>

            <div className="flex items-center justify-between mt-3">
              <span className="text-lg font-bold text-green-600">
                ${plant.price}
              </span>

              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={18} fill="#facc15" />
                <span className="text-sm font-medium text-gray-700">
                  {plant.rating}
                </span>
              </div>

              <span
                className={`text-sm font-medium ${
                  plant.availableStock > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {plant.availableStock> 0 ? `${plant.availableStock} in stock` : "Out of stock"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plants;
