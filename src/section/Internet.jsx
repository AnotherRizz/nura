import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import InternetCard from "../utils/InternetCard";
import { Data } from "../data/Paket";

export default function Internet() {
  const [selectedTab, setSelectedTab] = useState(Data[0]);

  return (
    <section className="py-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {Data.map((tab) => (
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
