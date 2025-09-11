import { useEffect, useState, useRef } from "react";
import { User, Wifi, Cpu } from "lucide-react";

const statsData = [
  { id: 1, label: "Pengguna Aktif", target: 700, icon: <User className="w-10 h-10 mx-auto text-blue-500" /> },
  { id: 2, label: "Titik Jaringan", target: 50, icon: <Wifi className="w-10 h-10 mx-auto text-blue-500" /> },
  { id: 3, label: "Perangkat Terkoneksi", target: 200, icon: <Cpu className="w-10 h-10 mx-auto text-blue-500" /> },
];

export default function StatsParallaxFull() {
  const [scrollY, setScrollY] = useState(0);
  const countersRef = useRef(statsData.map(() => 0));
  const [counters, setCounters] = useState(statsData.map(() => 0));

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth counters
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      let updated = false;
      const newCounts = countersRef.current.map((count, i) => {
        if (count < statsData[i].target) {
          const increment = Math.ceil((statsData[i].target - count) / 20);
          countersRef.current[i] += increment;
          updated = true;
        }
        return countersRef.current[i];
      });
      if (updated) {
        setCounters([...newCounts]);
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative my-10 flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('/paralax.jpg')",
        }}
      ></div>

      {/* Overlay semi gelap */}
      {/* <div className="absolute inset-0 bg-black/40 -z-10"></div> */}

      {/* Stats cards */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-10 text-center z-10">
        {statsData.map((stat, i) => (
          <div
            key={stat.id}
            className="p-8 bg-white/10 backdr rounded-2xl shadow-lg w-64 hover:scale-105 transition-transform"
          >
            {stat.icon}
            <h3 className="text-5xl font-extrabold text-blue-600 mt-2">{counters[i]}</h3>
            <p className="mt-2 text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
