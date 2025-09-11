import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items, interval = 5000 }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [items]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer); // cleanup
  }, [items.length, interval]);

  return (
    <div className="relative w-full p-6 mx-auto overflow-hidden rounded-2xl ">
      <div className="relative h-64 md:h-96 rounded-md">
        <AnimatePresence mode="wait" custom={index}>
          <motion.img
            key={items[index].id}
            src={items[index].image}
            alt=""
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // lebih smooth
            className="w-full h-full object-contain rounded-xl"
          />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/10 p-2 rounded-full hover:bg-black/60">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/10 p-2 rounded-full hover:bg-black/60">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-blue-800 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
