// ScrollingPayments.jsx
import React from "react";

/**
 * props:
 *  - icons: array of { src: string, alt: string }
 *  - speed: duration in milliseconds for one full loop (default 20000)
 */
export default function ScrollingPayments({ icons = [], speed = 20000 }) {
  // duplicate the icons so the marquee is seamless
  const loopIcons = [...icons, ...icons];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700 mb-4">
            Fleksibilitas Pembayaran
          </h3>
          <p className="text-gray-600 mb-6 mx-auto max-w-2xl">
            Kami menyediakan berbagai metode pembayaran yang fleksibel —
            transfer bank, e-wallet, dan pembayaran online — sehingga pelanggan
            dapat memilih metode paling nyaman kapan saja.
          </p>
        </div>

        {/* marquee wrapper */}
        <div
          className="relative overflow-hidden rounded-xl  p-4"
          aria-label="Ikon metode pembayaran bergulir">
          {/* animate-track: lebar isi diatur di CSS, durasi di style */}
          <div
            className="flex items-center gap-6 whitespace-nowrap marquee"
            style={{
              // animation duration diatur lewat style supaya mudah dikontrol via prop
              animationDuration: `${speed}ms`,
            }}>
            {loopIcons.map((icon, i) => (
              <div
                key={`${icon.src}-${i}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: 140 }}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className=" w-20 object-contain"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* local CSS for marquee animation */}
      <style>{`
        /* keyframes untuk menggeser ke kiri */
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* .marquee element harus mempunyai lebar yang cukup (dua kali konten) */
        .marquee {
          display: inline-flex;
          align-items: center;
          /* width: fit-content; -- handled by inline-flex + children */
          will-change: transform;
          animation-name: marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          /* animation-duration di-override via inline style (prop speed) */
        }

        /* pause on hover/focus for accessibility */
        .marquee:hover,
        .marquee:focus-within {
          animation-play-state: paused;
        }

        /* jika user prefer reduced motion, matikan animasi */
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
