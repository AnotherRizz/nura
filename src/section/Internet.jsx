import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import InternetCard from "../utils/InternetCard";

const tabsData = [
  {
    icon: "/banner/internet.jpg",
    label: "Paket Bronze",
    price: "Rp 270.000 / bulan",
    speed: "50 Mbps",
    fup: "Unlimited (FUP 500GB)",
    support: "08.00 - 22.00",
    desc: "Cocok untuk kebutuhan dasar rumah tangga: browsing, streaming ringan, dan video call.",
  },
  {
    icon: "/banner/internet.jpg",
    label: "Paket Silver",
    price: "Rp 335.000 / bulan",
    speed: "100 Mbps",
    fup: "Unlimited (FUP 1TB)",
    support: "24/7 Support",
    desc: "Kecepatan stabil untuk streaming Full HD, gaming online ringan, dan kerja jarak jauh.",
  },
  {
    icon: "/banner/internet.jpg",
    label: "Paket Gold",
    price: "Rp 6000.000 / bulan",
    speed: "150 Mbps",
    fup: "Unlimited (FUP 2TB)",
    support: "Priority 24/7 Support",
    desc: "Performa premium untuk rumah besar, bisnis rumahan, dan streaming 4K tanpa buffering.",
  },
];

export default function Internet() {
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);

  return (
    <section className="py-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabsData.map((tab) => (
            <motion.button
              key={tab.label}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 text-xs md:text-lg font-medium cursor-pointer  ${
                selectedTab.label === tab.label
                  ? "text-blue-800 border-b border-blue-800 "
                  : "text-gray-600 "
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* InternetCard Content */}
        <div className="grid md:grid-cols-1 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <InternetCard {...selectedTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
