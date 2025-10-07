"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabaseClient";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [alamat, setAlamat] = useState("");
  const [paketTersedia, setPaketTersedia] = useState([]);
  const [paketDipilih, setPaketDipilih] = useState(null);
  const [step, setStep] = useState(1);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // === helper jarak ===
  function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // === cari lokasi & paket ===
  const temukanLokasi = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        // 🔥 ambil area + paket langsung dari supabase
        const { data: areaData, error } = await supabase
          .from("Area")
          .select(
            "id,nama_area,latitude,longitude,radius,PaketArea(paket:paketId(*))"
          );

        if (error) throw error;

        let paketDitemukan = [];
        areaData.forEach((area) => {
          const distance = haversineDistance(
            latitude,
            longitude,
            area.latitude,
            area.longitude
          );
          if (distance <= area.radius) {
            area.PaketArea.forEach((pa) => {
              paketDitemukan.push(pa.paket);
            });
          }
        });

        setPaketTersedia(paketDitemukan);

        // 🔥 ambil alamat dari nominatim
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const geoData = await geoRes.json();

        setAlamat(geoData?.display_name || `${latitude}, ${longitude}`);
        setLatitude(latitude);
        setLongitude(longitude);
      } catch (err) {
        console.error("Gagal fetch area:", err);
      } finally {
        setLoading(false);
      }
    });
  };

  const handleGunakanLokasi = () => {
    if (alamat) setStep(2);
  };

  const handlePilihPaket = (paket) => {
    setPaketDipilih(paket);
    setStep(3);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return;
  setLoading(true);
  setModalMessage("");
  setModalType("");

  try {
    // === 1️⃣ Insert ke Supabase ===
    const { data, error } = await supabase
      .from("UserRegistration")
      .insert([
        {
          nama: e.target.nama.value,
          no_wa: e.target.no_wa.value,
          alamat,
          paketId: paketDipilih.id,
          latitude,
          longitude,
          detailAlamat: "",
        },
      ])
      .select()
      .single();

    if (error) throw new Error(error.message || "Gagal menyimpan data pendaftaran");

    // === 2️⃣ Panggil Edge Function untuk kirim notifikasi WA ===
    try {
      const res = await fetch("https://fffzifpspmyhehqhrbtm.supabase.co/functions/v1/notify-cs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          nama: data.nama,
          no_wa: data.no_wa,
          alamat: data.alamat,
          paket: paketDipilih.nama_paket,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Gagal kirim ke Edge Function:", err);
      }
    } catch (err) {
      console.error("Edge Function error:", err.message);
    }

    // === 3️⃣ Tampilkan modal sukses ===
    setModalType("success");
    setModalMessage("Pendaftaran berhasil 🎉. Kami akan segera menghubungi Anda.");
    setShowModal(true);
  } catch (err) {
    console.error("Error submit:", err);
    setModalType("error");
    setModalMessage(err.message || "Terjadi kesalahan saat menyimpan data.");
    setShowModal(true);
  } finally {
    setLoading(false);
  }
};



  const handleSelesai = () => {
    setShowModal(false);
    navigate("/success");
  };

  const kembaliKePaket = () => {
    setStep(2);
    setPaketDipilih(null);
  };
  const kembaliKe1 = () => {
    setStep(1);
  };
  return (
    <div className="min-h-screen items-center mt-14 mx-auto bg-neutral-100">
      {/* Banner */}
      <div className="w-full md:max-w-3xl h-72 mx-auto mb-10 rounded-xl overflow-hidden">
        <img
          src="./register.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Container */}
      <div className="min-h-screen flex flex-col md:flex-row p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg mb-7">
        {/* === Stepper === */}
        <div className="flex md:flex-col items-center justify-between md:justify-start md:items-center md:w-40 mr-0 md:mr-8 mb-6 md:mb-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                step >= 1 ? "bg-teal-600" : "bg-gray-300"
              }`}>
              1
            </div>
            <p className="mt-2 text-sm font-medium text-center">Lokasi</p>

            {/* Garis penghubung */}
            <div className="hidden md:block w-[2px] h-12 bg-gray-300 relative my-2">
              <div
                className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                  step >= 2 ? "h-full bg-teal-600" : "h-0 bg-transparent"
                }`}></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                step >= 2 ? "bg-teal-600" : "bg-gray-300"
              }`}>
              2
            </div>
            <p className="mt-2 text-sm font-medium text-center">Pilih Paket</p>

            {/* Garis penghubung */}
            <div className="hidden md:block w-[2px] h-12 bg-gray-300 relative my-2">
              <div
                className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                  step >= 3 ? "h-full bg-teal-600" : "h-0 bg-transparent"
                }`}></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                step === 3 ? "bg-teal-600" : "bg-gray-300"
              }`}>
              3
            </div>
            <p className="mt-2 text-sm font-medium text-center">Isi Formulir</p>
          </div>
        </div>

        {/* === Konten === */}
        <div className="flex-1">
          {/* Step 1: Temukan Lokasi */}
          {step === 1 && (
            <div>
              <div className="flex gap-4 items-center mb-6 justify-center">
                <h2 className="text-2xl font-bold">Temukan Lokasi Anda</h2>
                <button
                  type="button"
                  onClick={temukanLokasi}
                  disabled={loading}
                  className="px-2 cursor-pointer py-2 font-semibold bg-black text-xs text-white rounded-lg disabled:opacity-50">
                  {loading ? "Mencari..." : `Temukan Lokasi`}
                </button>
              </div>

              {/* Loading state */}
              {loading && (
                <div className="flex items-center justify-center gap-2 text-teal-700 mb-4">
                  <span className="animate-bounce font-extrabold text-2xl">
                    .
                  </span>
                  <span className="animate-bounce font-extrabold text-2xl delay-150">
                    .
                  </span>
                  <span className="animate-bounce font-extrabold text-2xl delay-300">
                    .
                  </span>
                  <span className="ml-2 text-sm font-semibold">
                    Mencari lokasi anda...
                  </span>
                </div>
              )}

              {alamat && (
                <>
                  <div className="w-full h-64 rounded-lg overflow-hidden shadow mb-6">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        alamat
                      )}&z=15&output=embed`}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"></iframe>
                  </div>

                  <div className="space-y-2 mb-6">
                    <label className="text-sm font-medium">
                      Alamat Lengkap
                    </label>
                    <textarea
                      rows={3}
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      className="w-full border rounded-lg p-2 text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleGunakanLokasi}
                    className="px-2 py-2 bg-black cursor-pointer text-xs font-semibold text-white rounded-md">
                    Gunakan Lokasi Ini
                  </button>
                </>
              )}
            </div>
          )}

          {/* Step 2: Pilih Paket */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold flex gap-2 items-center">
                    {paketTersedia.length} Paket Tersedia{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-yellow-500">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  </h2>
                  <small className="tetxt-xs mb-4 text-gray-400">
                    Paket yang tersedia sesuai dengan lokasi anda
                  </small>
                </div>
                <button
                  type="button"
                  onClick={kembaliKe1}
                  className="text-sm text-gray-600 hover:underline">
                  ← Kembali
                </button>
              </div>

              {paketTersedia.length > 0 ? (
                <div className="space-y-4">
                  {paketTersedia.map((paket) => (
                    <motion.div
                      key={paket.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-xl p-4 shadow cursor-pointer hover:border-teal-600"
                      onClick={() => handlePilihPaket(paket)}>
                      <h3 className="font-semibold text-lg">
                        {paket.nama_paket}
                      </h3>
                      <p className="text-sm text-gray-600">{paket.speed}</p>
                      <p className="text-teal-600 font-semibold">
                        Rp {paket.harga.toLocaleString("id-ID")}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  Tidak ada paket di lokasi Anda.
                </div>
              )}
            </div>
          )}

          {/* Step 3: Isi Form */}
          {step === 3 && (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow p-6 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Form Pendaftaran</h2>
                <button
                  type="button"
                  onClick={kembaliKePaket}
                  className="text-sm text-gray-600 hover:underline">
                  ← Kembali ke Pilih Paket
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Nama</label>
                <input
                  type="text"
                  name="nama"
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <input type="hidden" name="latitude" value={latitude} />
              <input type="hidden" name="longitude" value={longitude} />

              <div>
                <label className="block text-sm font-medium mb-1">
                  No WhatsApp
                </label>
                <input
                  type="tel"
                  name="no_wa"
                  pattern="[0-9]+"
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
                  value={paketDipilih?.nama_paket || ""}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                />
              </div>
              <div className="flex flex-col justify-end text-end">
                <p className="text-xs text-gray-500 mb-3 text-end">
                  <strong className="text-red-500">Perhatian!!</strong> pastikan
                  data yang anda masukan valid{" "}
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="ms-auto px-4 py-2 cursor-pointer bg-black text-sm font-semibold text-white rounded-md disabled:opacity-50 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                      Menyimpan...
                    </>
                  ) : (
                    "Kirim Pendaftaran"
                  )}
                </button>
              </div>
            </form>
          )}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
                <h2
                  className={`text-2xl font-bold mb-3 ${
                    modalType === "success" ? "text-teal-600" : "text-red-600"
                  }`}>
                  {modalType === "success" ? "Berhasil" : "Gagal"}
                </h2>
                <p className="text-gray-600 text-sm mb-6">{modalMessage}</p>

                {modalType === "success" ? (
                  <button
                    onClick={handleSelesai}
                    className="px-4 py-2 bg-gradient-to-br from-teal-600 to-sky-500 text-white rounded-md font-semibold">
                    Selesai
                  </button>
                ) : (
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold">
                    Tutup
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
