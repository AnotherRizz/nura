import React from "react";

const Footer = () => {
  return (
    <div>
      {/* CTA */}
      <section className="bg-gradient-to-b from-indigo-900 to-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Siap Nikmati Internet Super Cepat?
        </h2>
        <p className="mb-8">
          Hubungi tim kami sekarang dan rasakan pengalaman browsing tanpa batas.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Hubungi Kami
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="md:flex md:justify-between">
            <div className="mb-6">
              <a
                href="/"
                className="flex items-center justify-center md:justify-start">
                <img
                  src="/images/nura-logo.png"
                  className="h-8 me-3"
                  alt="Logo"
                />
                <span className="text-2xl font-semibold text-white">
                  Nura Net
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Resources
                </h2>
                <ul>
                  <li>
                    <a
                      href="https://tailwindcss.com"
                      className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Follow Us
                </h2>
                <ul>
                  <li>
                    <a href="https://github.com" className="hover:underline">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Nura Net. PT Linea Global Teknologi.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
