import React from "react";
import { Leaf, Droplets, Sun, Scissors } from "lucide-react";

const careTips = [
  {
    id: 1,
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    title: "Provide Adequate Sunlight",
    description:
      "Place your plants where they can get enough indirect sunlight. Avoid harsh, direct rays that can burn the leaves.",
  },
  {
    id: 2,
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    title: "Water Wisely",
    description:
      "Overwatering is one of the most common mistakes. Water only when the top inch of soil feels dry.",
  },
  {
    id: 3,
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    title: "Keep Leaves Clean",
    description:
      "Dust can block sunlight. Wipe your plant’s leaves gently with a damp cloth once a week.",
  },
  {
    id: 4,
    icon: <Scissors className="w-8 h-8 text-rose-500" />,
    title: "Prune Regularly",
    description:
      "Trim dead or yellowing leaves to promote healthy new growth and prevent disease.",
  },
];

const Tips = () => {
  return (
    <section className="bg-green-50 py-12 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">
        🌿 Plant Care Tips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {careTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex justify-center mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
