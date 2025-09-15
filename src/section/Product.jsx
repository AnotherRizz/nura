"use client";

import React from "react";
import { motion } from "framer-motion";

const Product = () => {
  const produk = [
    {
      id: 1,
      nama_produk: "Paket Broze",
      deskripsi: "Cocok untuk kebutuhan dasar rumah tangga: browsing, streaming ringan, dan video call.",
      harga: 270000,
      durasi: "bulan",
      speed: "50 Mbps",
      fitur: [ "Support 24/7", "Dynamic IP","Free Pemasangan"],
    },
    {
      id: 2,
      nama_produk: "Paket Silver",
      deskripsi: "Kecepatan stabil untuk streaming Full HD, gaming online ringan, dan kerja jarak jauh.",
      harga: 335000,
      durasi: "bulan",
      speed: "100 Mbps",
      fitur: [  "Dynamic IP","Free Pemasangan","Support 24/7"],
    },
    {
      id: 3,
      nama_produk: "Paket Gold",
      deskripsi: "Performa premium untuk rumah besar, bisnis rumahan, dan streaming 4K tanpa buffering.",
      harga: 600000,
      durasi: "bulan",
      speed: "150 Mbps",
      fitur: ["1-20 Devices","Dynamic IP","Free Pemasangan","Support 24/7"],
    },
  ];

  return (
    <section id="paket" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="md:text-3xl font-bold text-center text-3xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700 mb-14">
          Pilihan Paket Internet <span>Terpopuler</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5 p-4 md:max-w-5xl mx-auto">
          {produk.map((p, index) => (
            <motion.div
              key={p.id}
              className={`relative rounded-2xl shadow-lg p-8 text-center ${
                index === 1
                  ? "bg-gradient-to-br from-indigo-950 to-blue-700 text-white shadow-2xl"
                  : "bg-white border border-indigo-500 text-gray-900"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              {index === 1 && (
                <span className="absolute -top-3 flex gap-2 right-6 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                  ⭐ Populer
                </span>
              )}

              <h3 className="text-2xl font-semibold mb-2">{p.nama_produk}</h3>
              <p
                className={`mb-4 ${
                  index === 1 ? "opacity-90 text-xs" : "text-gray-500 text-xs"
                }`}
              >
                {p.deskripsi}
              </p>
              <p className="text-2xl md:text-4xl font-extrabold">{p.speed}</p>
              <p
                className={`text-sm font-extrabold mb-4 ${
                  index === 1 ? "text-red-500" : "text-rose-500"
                }`}
              >
                Rp {p.harga.toLocaleString("id-ID")}
                <span className="text-lg font-medium">/{p.durasi ?? "bulan"}</span>
              </p>
              <ul
                className={`mb-6 space-y-2 text-xs ${
                  index === 1 ? "opacity-90" : "text-gray-600"
                }`}
              >
                {p.fitur?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a
                href="/product"
                className={`px-6 py-1.5 rounded-lg font-semibold transition ${
                  index === 1
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-br from-indigo-950 to-blue-700 text-white"
                }`}
              >
                Lihat Detail
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
