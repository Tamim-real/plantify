import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Leaf, Sprout, TreePine } from "lucide-react";

const slides = [
  {
    icon: Leaf,
    title: "Discover Rare Plants",
    description:
      "Explore our collection of exotic and rare plant species from around the world",
    gradient: "from-green-100 to-green-300",
  },
  {
    icon: Sprout,
    title: "Grow Your Garden",
    description: "Learn expert tips and techniques to nurture your plants to perfection",
    gradient: "from-green-200 to-green-400",
  },
  {
    icon: TreePine,
    title: "Join Our Community",
    description: "Connect with fellow plant enthusiasts and share your green journey",
    gradient: "from-green-300 to-green-500",
  },
];

const PlantSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Welcome to Plantify 🌿
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Discover, grow, and connect with plants. Your green journey starts here!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side slider */}
        <div className="md:w-1/2 w-full h-[400px] md:h-[500px]">
          <Swiper
            modules={[Autoplay, EffectCreative, Pagination, Navigation]}
            effect="creative"
            creativeEffect={{
              prev: { translate: ["-120%", 0, -500], rotate: [0, 0, -15], opacity: 0 },
              next: { translate: ["120%", 0, -500], rotate: [0, 0, 15], opacity: 0 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            loop={true}
            speed={1000}
            className="rounded-2xl overflow-hidden h-full"
          >
            {slides.map((slide, index) => {
              const Icon = slide.icon;
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`h-full w-full bg-gradient-to-br ${slide.gradient} flex flex-col items-center justify-center text-center px-6 py-8`}
                  >
                    <Icon className="w-20 h-20 text-green-800 mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-white text-sm md:text-base max-w-xs">{slide.description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PlantSlider;
