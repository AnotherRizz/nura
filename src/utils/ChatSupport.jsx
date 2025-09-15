import React, { useState } from "react";

const ChatSupport = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Halo saya Admin, silakan kirim pesan dulu untuk memulai percakapan.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  // Kirim pesan manual
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");

    setLoading(true);
    setShowLinks(false);

    setTimeout(() => {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Berikut beberapa menu yang bisa kamu pilih 👇",
        },
      ]);
      setShowLinks(true);
    }, 3000);
  };

  // Klik pilihan menu
  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { from: "user", text: option }]);
    setLoading(true);
    setShowLinks(false);

    setTimeout(() => {
      let response = "";
      switch (option) {
        case "Layanan Pengaduan":
          response = "Silakan isi form pengaduan di menu ini ya.";
          break;
        case "Paket Internet":
          response = "Berikut daftar paket internet yang tersedia.";
          break;
        case "Pembayaran":
          response = "Kamu bisa melakukan pembayaran lewat transfer bank atau e-wallet.";
          break;
        default:
          response = "Silakan hubungi admin untuk informasi lebih lanjut.";
      }

      setLoading(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: response },
        { from: "bot", text: "Ada yang lain yang bisa saya bantu? 👇" },
      ]);
      setShowLinks(true);
    }, 3000);
  };

  const handleClear = () => {
    setMessages([
      {
        from: "bot",
        text: "Halo saya Admin, silakan kirim pesan dulu untuk memulai percakapan.",
      },
    ]);
    setShowLinks(false);
  };

  return (
    <>
      {/* Tombol Chat */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 cursor-pointer right-6 z-50 bg-blue-800 p-4 rounded-full text-white shadow-lg hover:bg-blue-900 transition"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 
            1.123 2.994 2.707 3.227 1.129.166 2.27.293 
            3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 
            1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 
            3.423-.379c1.584-.233 2.707-1.626 
            2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 
            48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 
            3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
        )}
      </button>

      {/* Popup Chat */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
          <div className="bg-blue-800 text-white px-4 py-3 text-sm font-semibold flex justify-between items-center">
            Chat Support
            <button
              onClick={handleClear}
              className="text-xs bg-white text-blue-800 px-2 py-1 rounded hover:bg-gray-100"
            >
              Clear
            </button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-blue-800 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm inline-flex gap-1">
                <span className="animate-bounce font-extrabold">.</span>
                <span className="animate-bounce font-extrabold delay-150">.</span>
                <span className="animate-bounce font-extrabold delay-300">.</span>
              </div>
            )}

            {showLinks && !loading && (
              <div className="flex flex-wrap gap-2 mt-2">
                {["Layanan Pengaduan","Paket Internet","Pembayaran","Hubungi Admin"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleOptionClick(item)}
                    className="px-3 py-1.5 text-xs rounded-full border border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t flex items-center p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Tulis pesan..."
              className="flex-1 text-sm outline-none px-3 py-2"
            />
            <button onClick={handleSend} className="p-2 text-blue-700 hover:text-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M3.4 20.6L21 12 3.4 3.4 3 10l11 2-11 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSupport;
