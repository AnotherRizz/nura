import { useState } from "react";
import MainSection from "../section/MainSection";
import FeaturesSection from "../section/FeaturesSection";
import Carousel from "../utils/Carousel";

// contoh data produk (dummy dulu, nanti bisa fetch dari API Laravel)
const produk = [
  {
    id: 1,
    nama_produk: "Paket Basic",
    deskripsi: "Internet hemat untuk rumah tangga.",
    harga: 150000,
    durasi: "bulan",
    speed: "20 Mbps",
    fitur: ["Free modem", "Support 24/7"],
  },
  {
    id: 2,
    nama_produk: "Paket Premium",
    deskripsi: "Kecepatan tinggi untuk bisnis dan streaming.",
    harga: 300000,
    durasi: "bulan",
    speed: "50 Mbps",
    fitur: ["Free modem", "Static IP", "Support 24/7"],
  },
  {
    id: 3,
    nama_produk: "Paket Gaming",
    deskripsi: "Khusus untuk gamer hardcore.",
    harga: 500000,
    durasi: "bulan",
    speed: "100 Mbps",
    fitur: ["Low latency", "Free modem", "Support 24/7"],
  },
];

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

      {/* Hero Section */}
      <MainSection />
      <div className=" flex items-center justify-center">
      <Carousel items={items} interval={4000}/>
    </div>

      {/* Keunggulan */}
      <FeaturesSection/>

      {/* Paket Internet */}
      <section id="paket" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
            Pilihan Paket Internet{" "}
            <span className="text-blue-900">Terpopuler</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:max-w-5xl mx-auto">
            {produk.map((p, index) => (
              <div
                key={p.id}
                className={`relative rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform ${
                  index === 1
                    ? "bg-gradient-to-br from-indigo-950 to-blue-700 text-white scale-105 shadow-2xl"
                    : "bg-white border border-indigo-500 text-gray-900"
                }`}>
                {index === 1 && (
                  <span className="absolute -top-3 flex gap-2 right-6 bg-red-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                    ⭐ Populer
                  </span>
                )}

                <h3 className="text-2xl font-semibold mb-2">{p.nama_produk}</h3>
                <p
                  className={`mb-4 ${
                    index === 1 ? "opacity-90" : "text-gray-500"
                  }`}>
                  {p.deskripsi}
                </p>
                <p
                  className={`text-4xl font-extrabold mb-4 ${
                    index === 1 ? "" : "text-blue-900"
                  }`}>
                  Rp {p.harga.toLocaleString("id-ID")}
                  <span className="text-lg font-medium">
                    /{p.durasi ?? "bulan"}
                  </span>
                </p>
                <ul
                  className={`mb-6 space-y-3 ${
                    index === 1 ? "opacity-90" : "text-gray-600"
                  }`}>
                  {p.speed && <li>Kecepatan hingga {p.speed}</li>}
                  {p.fitur?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    index === 1
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-gradient-to-br from-indigo-950 to-blue-700 text-white"
                  }`}>
                  Berlangganan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-indigo-900 to-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Siap Nikmati Internet Super Cepat?
        </h2>
        <p className="mb-8">
          Hubungi tim kami sekarang dan rasakan pengalaman browsing tanpa batas.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Hubungi Kami
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="md:flex md:justify-between">
            <div className="mb-6">
              <a
                href="/"
                className="flex items-center justify-center md:justify-start">
                <img
                  src="/images/nura-logo.png"
                  className="h-8 me-3"
                  alt="Logo"
                />
                <span className="text-2xl font-semibold text-white">
                  Nura Net
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul>
                  <li>
                    <a
                      href="https://tailwindcss.com"
                      className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Follow Us
                </h2>
                <ul>
                  <li>
                    <a href="https://github.com" className="hover:underline">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nura Net. PT Linea Global Teknologi.
          </p>
        </div>
      </footer>
    </div>
  );
}
