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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-[family-name:var(--font-heading)] text-lg font-semibold">S</span>
            </div>
            <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text">
              Serenity <span className="font-normal text-primary">Yoga</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/kontak"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              Coba Gratis
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary/30">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-text hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontak"
                className="mt-2 px-4 py-2 bg-primary text-white text-center font-medium rounded-full"
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
