'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/kelas', label: 'Kelas' },
  { href: '/jadwal', label: 'Jadwal' },
  { href: '/instruktur', label: 'Instruktur' },
  { href: '/membership', label: 'Membership' },
  { href: '/workshop', label: 'Workshop' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#7C9A92] rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-xl">S</span>
            </div>
            <div>
              <span className="font-heading text-xl font-semibold text-[#3D405B]">Serenity</span>
              <span className="font-heading text-xl font-light text-[#7C9A92] ml-1">Yoga</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#3D405B] hover:text-[#7C9A92] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kontak" className="btn-primary">
              Coba Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#3D405B] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#3D405B] hover:text-[#7C9A92] transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/kontak"
                  className="btn-primary text-center mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Coba Gratis
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
