export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-6 bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
      {/* Icon di kiri */}
      <div className="flex-shrink-0 w-30 h-30 md:w-60 md:h-60">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Teks di kanan */}
      <div className="text-left">
        <h3 className="text-md md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
