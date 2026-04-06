"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  PawPrint,
  User,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#kategorie", label: "Kategorie" },
  { href: "#produkty", label: "Produkty" },
  { href: "#misja", label: "Nasza misja" },
  { href: "#blog", label: "Porady" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-foreground">
              Zoo<span className="text-primary-600">gród</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-b border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 rounded-xl text-base font-medium text-muted-foreground hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-muted text-foreground font-medium">
                  <Search className="w-4 h-4" /> Szukaj
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-600 text-white font-medium">
                  <ShoppingCart className="w-4 h-4" /> Koszyk (0)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
