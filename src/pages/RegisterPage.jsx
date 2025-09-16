"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Data } from "../data/Paket";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [paketTersedia, setPaketTersedia] = useState([]);
  const [paketDipilih, setPaketDipilih] = useState(null);
  const [step, setStep] = useState(1);

  const temukanLokasi = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      alert("Browser tidak mendukung Geolocation");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();
        const alamatLengkap = data.display_name;
        const kotaSekarang =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          "";

        setAlamat(alamatLengkap);
        setKota(kotaSekarang);

        const tersedia = Data.filter((p) =>
          p.coverage.some((c) =>
            kotaSekarang.toLowerCase().includes(c.toLowerCase())
          )
        );
        setPaketTersedia(tersedia);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    });
  };

  const handlePilihPaket = (paket) => {
    setPaketDipilih(paket);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pendaftaran berhasil!\nPaket: ${paketDipilih?.label}`);
  };

  const kembaliKePaket = () => {
    setStep(1);
    setPaketDipilih(null);
  };

  return (
    <div className="min-h-screen items-center mt-10 p-6 max-w-3xl mx-auto">
      {/* === Progress Bar === */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex-1 flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
              step >= 1 ? "bg-teal-600" : "bg-gray-300"
            }`}
          >
            1
          </div>
          <p className="mt-2 text-sm font-medium">Pilih Paket</p>
        </div>
        <div className="flex-1 h-[2px] bg-gray-300 mx-2 relative">
          <div
            className={`absolute top-0 left-0 h-full bg-teal-600 transition-all duration-500 ${
              step === 2 ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
              step === 2 ? "bg-teal-600" : "bg-gray-300"
            }`}
          >
            2
          </div>
          <p className="mt-2 text-sm font-medium">Isi Formulir</p>
        </div>
      </div>

      {/* === Step 1 === */}
      {step === 1 && (
        <div>
          <div className=" flex gap-2 items-center mb-10 justify-center">
            <h2 className="text-2xl font-bold">Pilih Paket Sesuai Lokasi</h2>
            <button
              type="button"
              onClick={temukanLokasi}
              disabled={loading}
              className="px-3 py-2 font-semibold bg-gradient-to-br cursor-pointer from-teal-600 to-sky-500 text-sm text-white rounded-lg disabled:opacity-50"
            >
              Temukan Lokasi Saya
            </button>
          </div>

          {loading && (
            <div className="flex items-center justify-center gap-2 text-teal-800 mb-4">
              <span className="animate-bounce font-extrabold text-2xl">.</span>
              <span className="animate-bounce font-extrabold text-2xl delay-150">
                .
              </span>
              <span className="animate-bounce font-extrabold text-2xl delay-300">
                .
              </span>
              <span className="ml-2 text-sm text-transparent bg-clip-text bg-gradient-to-br from-teal-700 to-sky-600 font-semibold">
                Mencari lokasi anda...
              </span>
            </div>
          )}

          {!loading && !paketTersedia.length && (
            <div className="text-center text-gray-500 mb-6">
              Temukan Paket Internet Yang Tersedia Dilokasi Anda
            </div>
          )}

          {!loading && paketTersedia.length > 0 && (
            <div className="space-y-4 mt-10">
              {paketTersedia.map((paket) => (
                <motion.div
                  key={paket.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border rounded-xl p-4 shadow cursor-pointer hover:border-blue-600"
                  onClick={() => handlePilihPaket(paket)}
                >
                  <h3 className="font-semibold text-lg">{paket.label}</h3>
                  <p className="text-sm text-gray-600">{paket.speed}</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-br from-teal-700 to-sky-600 font-semibold">
                    {paket.price}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* === Step 2 === */}
      {step === 2 && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 space-y-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Form Pendaftaran</h2>
            <button
              type="button"
              onClick={kembaliKePaket}
              className="text-transparent bg-clip-text bg-gradient-to-br from-teal-700 to-sky-600 font-semibold"
            >
              ← Kembali ke Pilih Paket
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              No WhatsApp
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Alamat Lengkap
            </label>
            <textarea
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Paket yang Dipilih
            </label>
            <input
              type="text"
              value={paketDipilih?.label || ""}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="ms-auto px-4 py-2 bg-gradient-to-br from-teal-600 to-sky-500 text-sm font-semibold text-white rounded-md"
          >
            Kirim Pendaftaran
          </button>
        </form>
      )}
    </div>
  );
}
