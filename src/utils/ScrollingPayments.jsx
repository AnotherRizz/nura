// ScrollingPayments.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollingPayments({ icons = [], speed = 20000 }) {
  const loopIcons = [...icons, ...icons];
  const controls = useAnimation();

  // Hitung jarak geser: 50% konten
  const distance = "-50%";

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700 mb-4">
            Fleksibilitas Pembayaran
          </h3>
          <p className="text-gray-600 mb-6 mx-auto max-w-2xl">
            Kami menyediakan berbagai metode pembayaran yang fleksibel — transfer
            bank, e-wallet, dan pembayaran online — sehingga pelanggan dapat
            memilih metode paling nyaman kapan saja.
          </p>
        </div>

        {/* Marquee container */}
        <div
          className="relative overflow-hidden rounded-xl p-4 group"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: [0, distance],
              transition: { duration: speed / 1000, ease: "linear", repeat: Infinity },
            })
          }
        >
          <motion.div
            className="flex items-center gap-6 whitespace-nowrap"
            animate={controls}
            initial={{ x: 0 }}
            whileInView={() =>
              controls.start({
                x: [0, distance],
                transition: { duration: speed / 1000, ease: "linear", repeat: Infinity },
              })
            }
          >
            {loopIcons.map((icon, i) => (
              <div
                key={`${icon.src}-${i}`}
                className="flex-shrink-0 flex items-center justify-center w-36"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-20 object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </motion.div>

          {/* efek fade kiri-kanan */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
