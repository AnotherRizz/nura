import { useState } from "react";
import MainSection from "../section/MainSection";
import Carousel from "../utils/Carousel";
import StatsParallax from "../utils/StatsParallax";
import Product from "../section/Product";
import Payments from "../section/Payments";
import FeatureSection from "../section/FeatureSection";
import QuestionSection from "../section/QuestionSection";
import ChatSupport from "../utils/ChatSupport";

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
     <ChatSupport/>
      <span className="w-full min-h-screen bg-gradient-to-br from-white to-sky-100/50 block fixed top-0 -z-10 left-0"></span>

      {/* Hero Section */}
      <section id="home">
        <MainSection />
      </section>

      {/* <FeaturesSection /> */}
      <section id="about" className="p-10">
        <FeatureSection />
      </section>
      <section id="pembayaran">
        <Payments />
      </section>

      <section id="paket">
        <Product />
      </section>
      <section id="faq">
        <QuestionSection />
      </section>
    </div>
  );
}
