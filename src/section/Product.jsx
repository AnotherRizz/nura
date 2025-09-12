import React from 'react'

const Product = () => {
  const produk = [
  {
    id: 1,
    nama_produk: "Paket Broze",
    deskripsi: "Internet hemat untuk rumah tangga.",
    harga: 270000,
    durasi: "bulan",
    speed: "50 Mbps",
    fitur: ["Free modem", "Support 24/7","termurah"],
  },
  {
    id: 2,
    nama_produk: "Paket Silver",
    deskripsi: "Kecepatan tinggi untuk bisnis dan streaming.",
    harga: 335000,
    durasi: "bulan",
    speed: "100 Mbps",
    fitur: ["Free modem", "Static IP", "Support 24/7"],
  },
  {
    id: 3,
    nama_produk: "Paket Gold",
    deskripsi: "Khusus untuk gamer hardcore.",
    harga: 600000,
    durasi: "bulan",
    speed: "150 Mbps",
    fitur: ["Low latency", "Free modem", "Support 24/7"],
  },
];
  return (
    <div>
       {/* Paket Internet */}
      <section id="paket" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className=" text-2xl md:text-4xl font-bold text-center text-gray-800 mb-14">
            Pilihan Paket Internet{" "}
            <span className="text-blue-900">Terpopuler</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5 p-4 md:max-w-5xl mx-auto">
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
                  className={`mb-4  ${
                    index === 1 ? "opacity-90 text-xs" : "text-gray-500 text-xs"
                  }`}>
                  {p.deskripsi}
                </p>
                <p className='text-2xl md:text-4xl font-extrabold'>{p.speed}</p>
                <p
                  className={`text-sm font-extrabold mb-4 ${
                    index === 1 ? "text-red-500" : "text-rose-500 "
                  }`}>
                  Rp {p.harga.toLocaleString("id-ID")}
                  <span className="text-lg font-medium">
                    /{p.durasi ?? "bulan"}
                  </span>
                </p>
                <ul
                  className={`mb-6 space-y-2 text-xs ${
                    index === 1 ? "opacity-90" : "text-gray-600"
                  }`}>
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
                  }`}>
                  Lihat Detail
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Product
