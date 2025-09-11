export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
