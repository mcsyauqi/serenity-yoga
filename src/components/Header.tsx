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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8D5B7]/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#7C9A92] rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-lg sm:text-xl font-semibold">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-semibold text-[#3D405B]">Serenity</span>
              <span className="font-heading text-xl font-light text-[#7C9A92] ml-1">Yoga</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[#3D405B] hover:text-[#7C9A92] transition-colors text-sm font-medium rounded-lg hover:bg-[#7C9A92]/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/kontak"
              className="inline-flex items-center px-5 py-2.5 bg-[#7C9A92] text-white text-sm font-semibold rounded-full hover:bg-[#6a8880] transition-colors"
            >
              Coba Gratis
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-[#3D405B] hover:bg-[#7C9A92]/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-[#E8D5B7]/30"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-[#3D405B] hover:text-[#7C9A92] hover:bg-[#7C9A92]/5 transition-colors font-medium rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/kontak"
                    className="block w-full text-center px-5 py-3 bg-[#7C9A92] text-white font-semibold rounded-full hover:bg-[#6a8880] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Coba Gratis
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
