import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Menu,
  X,
} from "lucide-react";
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
    to: "/product",
    description: "50 Mbps, Rp 270.000/bulan.",
    color: "text-yellow-600",
  },
  {
    title: "Silver",
    to: "/product",
    description: "100 Mbps, Rp 335.000/bulan.",
    color: "text-gray-400",
  },
  {
    title: "Gold",
    to: "/product",
    description: "150 Mbps, Rp 600.000/bulan.",
    color: "text-yellow-400",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

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

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="https://wa.me/6281281338001" target="_blank">
                    <Button className="text-xs bg-gradient-to-r from-indigo-800 to-blue-900 hover:text-white cursor-pointer">Hubungi Kami</Button>
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
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 p-6 font-medium">
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/components" onClick={() => setMobileOpen(false)}>
                  Components
                </Link>
              </li>
              <li>
                <Link to="/docs" onClick={() => setMobileOpen(false)}>
                  Docs
                </Link>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}

function ListItem({ title, children, to, color = "text-white", ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to} className="block p-2 hover:bg-gray-100 rounded-lg">
          <div className={`text-sm font-semibold ${color}`}>{title}</div>
          <p className="line-clamp-2 text-sm text-gray-800">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
