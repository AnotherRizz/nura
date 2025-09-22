import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center font-inter justify-center px-4">
      {/* Icon centang animasi */}
      <div className=" p-6  mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class=" w-20 h-20 text-green-600 animate-bounce">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      </div>

      {/* Judul */}
      <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">
        Pendaftaran Berhasil 🎉
      </h1>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Terima kasih sudah mendaftar. Kami akan segera menghubungi Anda untuk melanjurkan proses selanjutnya.
      </p>

      {/* Tombol */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-black cursor-pointer text-sm text-white rounded-lg shadow  transition">
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default Success;
