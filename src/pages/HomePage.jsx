import { useState } from "react";
import MainSection from "../section/MainSection";
import FeaturesSection from "../section/FeaturesSection";
import Carousel from "../utils/Carousel";
import StatsParallax from "../utils/StatsParallax";
import Product from "../section/Product";
import Payments from "../section/Payments";

// contoh data produk (dummy dulu, nanti bisa fetch dari API Laravel)

const items = [
  {
    id: 1,
    image: "../banner/1.png",
  },
  {
    id: 2,
    image: "../banner/3.png",
  },
  {
    id: 3,
    image: "../banner/2.png",
  },
];

export default function HomePage() {
  return (
    <div className="font-inter">
      {/* Tombol CS */}
      <span className="fixed bottom-6 right-6 z-50 cursor-pointer">
        <img src="/images/cs.svg" className="w-12 z-50" alt="CS" />
      </span>
      <span className="w-full min-h-screen bg-gradient-to-br from-white to-sky-100/50 block fixed top-0 -z-10 left-0"></span>

      {/* Hero Section */}
      <MainSection />

      {/* Keunggulan */}
      <FeaturesSection />
      {/* <div className=" flex items-center  justify-center">
        <Carousel items={items} interval={4000} />
      </div> */}

      <Payments />

      <div className="">
        <StatsParallax />
      </div>

      <Product />

     
    </div>
  );
}
