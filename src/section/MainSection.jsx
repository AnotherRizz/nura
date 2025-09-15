import React from "react"
import { motion } from "framer-motion"
import StatsParallaxFull from "../utils/StatsParallax"

const MainSection = () => {
  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <span className="w-80 h-80 absolute hidden md:block top-60 right-80 bg-gradient-to-br from-indigo-200 to-teal-300 rounded-full blur-md opacity-50"></span>

      <div className="container z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bagian teks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6"
          >
            Solusi Internet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700">
              Cepat
            </span>
            <br />
            untuk Rumah & Kantor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
          >
            Nikmati internet super cepat, stabil, dan aman dengan layanan
            terbaik dari kami. Cocok untuk kebutuhan{" "}
            <span className="font-semibold">streaming, gaming</span>, hingga
            bisnis Anda.
          </motion.p>

          <motion.a
            href="#paket"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-fit mx-auto md:mx-0 flex gap-2 bg-gradient-to-br from-indigo-950 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
          >
            Lihat Paket Internet
          </motion.a>

          <StatsParallaxFull />
        </motion.div>

        {/* Bagian gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="./banner1.png"
            alt="Banner Internet"
            className="w-full max-w-md md:max-w-xl -mt-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default MainSection
