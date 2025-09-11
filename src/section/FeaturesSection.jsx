import { AnimatePresence, motion } from "framer-motion";
import FeatureCard from "../utils/FeatureCard";
import { useState } from "react";

const tabsData = [
  {
    icon: "/feature/1.svg",
    label: "Kecepatan Tinggi",
    desc: "Website kami sangat cepat diakses, bahkan di jaringan lambat.",
  },
  {
    icon: "/feature/2.svg",
    label: "Support 24/7",
    desc: "Kami menyediakan dukungan 24/7 untuk semua pengguna.",
  },
  {
    icon: "/feature/3.svg",
    label: "Harga Terjangkau",
    desc: "Harga kami terjangkau dengan kualitas premium.",
  },
];

export default function FeaturesSection() {
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);

  return (
    <section className="py-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kenapa Memilih Kami?
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabsData.map((tab) => (
            <motion.button
              key={tab.label}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2  text-xs md:text-lg cursor-pointer ${
                selectedTab.label === tab.label
                  ? "border-b border-blue-600 text-blue-800"
                  : " text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* FeatureCard Content */}
        <div className="grid md:grid-cols-1 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureCard
                icon={selectedTab.icon}
                title={selectedTab.label}
                desc={selectedTab.desc}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
