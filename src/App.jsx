import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      {/* Route dengan layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>

      {/* Route tanpa layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function MainLayout() {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="w-full">
        <Outlet /> {/* isi halaman akan muncul di sini */}
      </div>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">404 - Halaman Tidak Ditemukan</h1>
    </div>
  );
}

export default App;
