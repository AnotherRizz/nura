"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Product = () => {
  const [paket, setPaket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const url = `${
          import.meta.env.VITE_PUBLIC_SUPABASE_URL
        }/rest/v1/Paket?select=*`;

        const res = await fetch(url, {
          headers: {
            apikey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${
              import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
            }`,
          },
        });

        if (!res.ok) throw new Error("Gagal fetch paket dari Supabase");
        const data = await res.json();
        setPaket(data);
      } catch (err) {
        console.error("Gagal fetch paket:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaket();
  }, []);

  return (
    <section id="paket" className="py-20 bg-gradient-to-b from-blue-900 via-indigo-900 to-blue-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-14">
          Pilihan Paket Internet{" "}
          <span className="text-indigo-300">Terpopuler</span>
        </h2>

        {loading ? (
          <p className="text-center text-indigo-200 animate-pulse">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 p-3 gap-8 max-w-6xl mx-auto">
            {paket.map((p, index) => (
              <motion.div
                key={p.id}
                className={`relative rounded-2xl shadow-lg p-8 transition-all duration-300 ${
                  index === 1
                    ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-cya-700 text-white shadow-2xl scale-105"
                    : "bg-white text-gray-900 hover:shadow-2xl"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                {index === 1 && (
                  <span className="absolute -top-3 right-6 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ⭐ Populer
                  </span>
                )}

                <h3 className="text-2xl font-semibold mb-3">{p.nama_paket}</h3>
                <p
                  className={`mb-5 ${
                    index === 1 ? "text-indigo-100" : "text-gray-500"
                  }`}
                >
                  {p.deskripsi}
                </p>
                <p className="text-4xl font-extrabold mb-1">{p.speed}</p>
                <p
                  className={`text-lg font-extrabold mb-4 ${
                    index === 1 ? "text-yellow-300" : "text-indigo-600"
                  }`}
                >
                  Rp {Number(p.harga).toLocaleString("id-ID")}
                  <span className="text-sm font-medium"> / bulan</span>
                </p>

                <ul
                  className={`mb-6 space-y-2 text-sm ${
                    index === 1 ? "text-indigo-100" : "text-gray-600"
                  }`}
                >
                  {Array.isArray(p.fitur) ? (
                    p.fitur.map((f, i) => <li key={i}>• {f}</li>)
                  ) : (
                    <li>• {p.fitur}</li>
                  )}
                </ul>

                <a
                  href={`/register`}
                  className={`inline-block px-6 py-2 rounded-lg font-semibold transition ${
                    index === 1
                      ? "bg-white text-indigo-700 hover:bg-indigo-100"
                      : "bg-gradient-to-br from-indigo-900 to-blue-700 text-white hover:opacity-90"
                  }`}
                >
                  Lihat Detail
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
