'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-lg font-semibold">S</span>
            </div>
            <span className="font-heading text-xl font-semibold text-text">
              Serenity <span className="font-normal text-primary">Yoga</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/kontak"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              Coba Gratis
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-text hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary/30">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-text hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontak"
                className="mt-2 mx-4 px-5 py-3 bg-primary text-white text-center font-semibold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Coba Gratis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
