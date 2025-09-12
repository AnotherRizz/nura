export default function InternetCard({ label, price, desc, speed, fup, support }) {
  // Teks pesan otomatis ke WhatsApp
  const pesanWA = encodeURIComponent(
    `Halo, saya tertarik dengan ${label} (${speed}, Rp${price}). Tolong beri informasi lebih lanjut.`
  );

  const nomorWA = "6287743432218"; // ganti dengan nomor WA admin kamu

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 max-w-sm mx-auto text-center border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{label}</h3>
      <p className="text-gray-500 text-sm mb-4">{desc}</p>

      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>

      <ul className="text-sm text-gray-700 space-y-2 mb-6">
        <li> Kecepatan: <span className="font-medium">{speed}</span></li>
        <li> FUP: <span className="font-medium">{fup}</span></li>
        <li> Dukungan: <span className="font-medium">{support}</span></li>
      </ul>

      <a
        href={`https://wa.me/${nomorWA}?text=${pesanWA}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-sm px-3 py-1.5 rounded-lg bg-gradient-to-br from-indigo-950 to-blue-700 text-white text-center hover:opacity-90 transition"
      >
        Berlangganan Sekarang
      </a>
    </div>
  );
}
