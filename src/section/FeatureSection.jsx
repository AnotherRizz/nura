import React from "react";

const FeatureSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br rounded-2xl flex flex-col justify-center items-center">
       <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700 mb-4">
            Kenapa Memilih Kami?
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src="./banner/banner2.png"
            className="md:w-4/5 hidden md:mx-auto md:block"
            alt=""
          />
        </div>
        <div className=" flex flex-col p-3 gap-3 md:gap-10 md:mt-6">
         
          <div className="flex gap-7 md:items-center">
            <div className="bg-gradient-to-br from-indigo-950 to-blue-700 text-white max-h-fit  rounded-2xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-16 h-16 ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>

            <h3 className="md:text-xl font-bold  text-start text-sm">
              Internet Dengan Kecepatan Tinggi <br />
              <p className="text-sm text-gray-500 font-semibold mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                assumenda distinctio laboriosam soluta? Veritatis saepe quasi
                architecto totam ut iure.
              </p>
            </h3>
          </div>
          <div className="flex gap-7 md:items-center">
            <div className="bg-gradient-to-br max-h-fit  from-indigo-950 to-blue-700 text-white rounded-2xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-16 h-16">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>

            <h3 className="md:text-xl font-bold  text-start text-sm">
              Layanan Bantuan Pelanggan <br />
              <p className="text-sm text-gray-500 font-semibold mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                assumenda distinctio laboriosam soluta? Veritatis saepe quasi
                architecto totam ut iure.
              </p>
            </h3>
          </div>
          <div className="flex gap-7 md:items-center">
            <div className="bg-gradient-to-br max-h-fit  from-indigo-950 to-blue-700 text-white rounded-2xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-16 h-16">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </div>

            <h3 className="md:text-xl font-bold  text-start text-sm">
              Tentulan Harga Sesuai Kebutuhuanmu <br />
              <p className="text-sm text-gray-500 font-semibold mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                assumenda distinctio laboriosam soluta? Veritatis saepe quasi
                architecto totam ut iure.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
