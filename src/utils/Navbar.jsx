// src/components/Navbar.jsx
import React, { useState } from "react";
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

const menuComponents = [
  {
    title: "Bronze",
    to: "/paket",
    description: "50 Mbps, Rp 270.000/bulan.",
    color: "text-yellow-600", // custom warna judul
  },
  {
    title: "Silver",
    to: "/paket",
    description: "100 Mbps, Rp 335.000/bulan.",
    color: "text-gray-400", // custom warna judul
  },
  {
    title: "Gold",
    to: "/progress",
    description: "150 Mbps, Rp 600.000/bulan.",
    color: "text-yellow-400", // custom warna judul
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 font-inter">
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
                  className={navigationMenuTriggerStyle()}>
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Components */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Paket</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[400px] md:grid-cols-1 ">
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

              {/* Docs */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}>
                  <Link to="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* With Icon */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="#" className="flex-row items-center gap-2">
                          <CircleHelpIcon /> Backlog
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="#" className="flex-row items-center gap-2">
                          <CircleIcon /> To Do
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="#" className="flex-row items-center gap-2">
                          <CircleCheckIcon /> Done
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700 focus:outline-none">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar dengan animasi */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 md:hidden">
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
              <li>
                <Link to="/with-icon" onClick={() => setMobileOpen(false)}>
                  With Icon
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
