import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../components/ui/button";

const menuComponents = [
  {
    title: "Bronze",
    to: "#paket",
    description: "50 Mbps, Rp 270.000/bulan.",
    color: "text-yellow-600",
  },
  {
    title: "Silver",
    to: "#paket",
    description: "100 Mbps, Rp 335.000/bulan.",
    color: "text-gray-400",
  },
  {
    title: "Gold",
    to: "#paket",
    description: "150 Mbps, Rp 600.000/bulan.",
    color: "text-yellow-400",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 font-inter transition-colors duration-300 ${
        isScrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between md:justify-around px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-md font-bold flex gap-2 items-center">
          <img src="./logo.jpg" className="w-20" alt="" />
          <p className="text-md -ms-6 italic text-blue-950">Nura Net</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>

              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  {isHome ? (
                    <a href="#home">Home</a>
                  ) : (
                    <Link to="/#home">Home</Link>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="#about">Tentang Kami</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Paket */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Paket</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[400px] md:grid-cols-1">
                    {menuComponents.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        to={item.to}
                        color={item.color}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
               {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="#pembayaran">Pembayaran</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Link biasa */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="#faq">FAQ</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Tombol WA */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="https://wa.me/6281281338001" target="_blank">
                    <Button className="text-xs bg-gradient-to-r from-indigo-800 to-blue-900 hover:text-white cursor-pointer">
                      Hubungi Kami
                    </Button>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold text-blue-600">Menu</span>
              {/* <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button> */}
            </div>
            <ul className="flex flex-col gap-4 p-6 font-medium">
              <li>
                {isHome ? (
                  <a href="#home" onClick={() => setMobileOpen(false)}>
                    Home
                  </a>
                ) : (
                  <Link to="/#home" onClick={() => setMobileOpen(false)}>
                    Home
                  </Link>
                )}
              </li>
               <li>
                <a href="#about" onClick={() => setMobileOpen(false)}>
                  Tentang Kami
                </a>
              </li>
              <li>
                {isHome ? (
                  <a href="#paket" onClick={() => setMobileOpen(false)}>
                    Paket
                  </a>
                ) : (
                  <Link to="/#paket" onClick={() => setMobileOpen(false)}>
                    Paket
                  </Link>
                )}
              </li>
              <li>
                <a href="#pembayaran" onClick={() => setMobileOpen(false)}>
                  Pembayaran
                </a>
              </li>
               <li>
                <a href="#faq" onClick={() => setMobileOpen(false)}>
                  FAQ
                </a>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}

function ListItem({ title, children, to, color = "text-white", ...props }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        {isHome ? (
          <a href={to} className="block p-2 hover:bg-gray-100 rounded-lg">
            <div className={`text-sm font-semibold ${color}`}>{title}</div>
            <p className="line-clamp-2 text-sm text-gray-800">{children}</p>
          </a>
        ) : (
          <Link to={`/${to}`} className="block p-2 hover:bg-gray-100 rounded-lg">
            <div className={`text-sm font-semibold ${color}`}>{title}</div>
            <p className="line-clamp-2 text-sm text-gray-800">{children}</p>
          </Link>
        )}
      </NavigationMenuLink>
    </li>
  );
}
