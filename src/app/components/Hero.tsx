import { Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const images = ["/food1.png", "/food2.png", "/food3.png", "/food4.png"];

  const [current, setCurrent] = useState(0);

  // 🔥 Stagger container
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // 🔥 Individual item animation (Left → Right)
  const item = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#FFFFF0] pt-0 pb-16 overflow-hidden"
    > 
  
    
      {/* LOGO */}
      <div className="flex justify-center relative z-20 -mt-6 md:-mt-8">
        <img
          src="/logo1.png"
          alt="Hotel Ashwa Logo"
          className="w-44 sm:w-52 md:w-60 lg:w-72 drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* MAIN GRID */}
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 items-center gap-8 -mt-6">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-800"
          >
            Authentic <span className="text-red-600">South Indian</span> Taste,
            <br />
            <span className="text-green-700">Served Fresh</span> Every Day.
          </motion.h1>

          <motion.div
            variants={item}
            className="flex items-center gap-6 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={scrollToMenu}
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              View Menu
            </motion.button>

            <div className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-full shadow-md">
              <Leaf className="w-5 h-5" />
              <span className="font-semibold text-sm">
                100% Pure Veg
              </span>
            </div>
          </motion.div>
        </motion.div>
        

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* 🔥 Soft Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-[#b8d8b8] rounded-full blur-2xl opacity-70"></div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-6 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          {/* IMAGE WITH ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="South Indian Food"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="relative w-[450px] lg:w-[650px] xl:w-[750px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
            />
          </AnimatePresence>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-6 z-20 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
          
        </div>
      </div>
    </section>
  );
}