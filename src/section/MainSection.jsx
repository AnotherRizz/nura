import React from 'react'

const MainSection = () => {
  return (
       <section className="bg-white min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Teks */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Solusi Internet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700">
                Cepat
              </span>
              <br />
              untuk Rumah & Kantor
            </h1>
            <p className="text-md  text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              Nikmati internet super cepat, stabil, dan aman dengan layanan
              terbaik dari kami. Cocok untuk kebutuhan{" "}
              <span className="font-semibold">streaming, gaming</span>, hingga
              bisnis Anda.
            </p>
            <a
              href="#paket"
              className="w-fit mx-auto md:mx-0 flex gap-2 bg-gradient-to-br from-indigo-950 to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
            >
              Lihat Paket Internet
            </a>
          </div>

          {/* Gambar */}
          <div className="flex justify-center md:justify-end">
            <img
              src="./banner1.png"
              alt="Banner Internet"
              className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
  )
}

export default MainSection
