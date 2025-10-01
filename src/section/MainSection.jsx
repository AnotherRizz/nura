import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import StatsParallaxFull from "../utils/StatsParallax";

const MainSection = () => {
  const MotionLink = motion(Link);

  // Ambil progress scroll (0 → 1)
  const { scrollY } = useScroll();

  // Gerakin posisi background sesuai scroll
  const yParallax1 = useTransform(scrollY, [0, 500], [0, 100]); // blob 1
  const yParallax2 = useTransform(scrollY, [0, 500], [0, -80]); // blob 2

  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="w-80 h-80 absolute top-40 -left-32 bg-gradient-to-br from-indigo-300 to-blue-500 rounded-full blur-3xl opacity-40"
        style={{ y: yParallax1 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 2 */}
      <motion.div
        className="w-96 h-96 absolute bottom-20 right-0 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full blur-3xl opacity-40"
        style={{ y: yParallax2 }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container z-10 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bagian teks */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left"
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

          <div className="flex gap-2">
            <motion.a
              href="#paket"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-fit mx-auto md:mx-0 flex gap-2 bg-gradient-to-br from-indigo-950 to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition"
            >
              Lihat Paket Internet
            </motion.a>

            <MotionLink
              to="/register"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-fit mx-auto md:mx-0 flex gap-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700 font-semibold px-4 py-2 rounded-lg border border-indigo-800 transition"
            >
              Daftar Sekarang
            </MotionLink>
          </div>

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
            src="./side.png"
            alt="Banner Internet"
            className="w-full max-w-sm md:max-w-md mx-auto -mt-6 rounded-3xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
