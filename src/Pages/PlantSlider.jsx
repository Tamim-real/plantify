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
    title: "Snake Plant",
    image: "https://media.istockphoto.com/id/1247359811/photo/close-up-of-snake-plants-for-sale.jpg?s=612x612&w=0&k=20&c=brRA3ebqEPedSxm_oOaeGKKtJwfSbUFdGqQRH2UJCXc=",
    gradient: "from-green-100 to-green-300",
  },
  {
    icon: Sprout,
    title: "Monstera Deliciosa",
    image: "https://plantersplace.com/wp-content/uploads/2022/08/20200309_110255-scaled.jpg",
    gradient: "from-green-200 to-green-400",
  },
  {
    icon: TreePine,
    title: "ZZ Plant",
    image: "https://media.istockphoto.com/id/1692980568/photo/zamioculcas-houseplant-in-white-ceramic-pot-on-concrete-table-at-home.jpg?s=612x612&w=0&k=20&c=iviM-GXCYxQoWoFYJ89mmBaZ3CDAtQ1CUV_GUd_67WY=",
    gradient: "from-green-300 to-green-500",
  },
  {
    icon: Sprout,
    title: "Fiddle Leaf Fig",
    image: "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?v=1694161186",
    gradient: "from-green-200 to-green-500",
  },
  {
    icon: Leaf,
    title: "Pothos",
    image: "https://media.istockphoto.com/id/1320269359/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant-in-flower-pot.jpg?s=612x612&w=0&k=20&c=Rc4J3wkUQgd9vN_O7c7wRnbqCy1UUafqRSYLE2KGv_c=",
    gradient: "from-green-100 to-green-400",
  },
  {
    icon: TreePine,
    title: "Peace Lily",
    image: "https://cdn11.bigcommerce.com/s-fr32feerow/images/stencil/832x750/uploaded_images/peace-lily-01.jpg?t=1483630233",
    gradient: "from-green-200 to-green-500",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-white"
                    />
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
