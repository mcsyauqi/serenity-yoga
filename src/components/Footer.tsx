import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3D405B] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#7C9A92] rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-xl">S</span>
              </div>
              <div>
                <span className="font-heading text-xl font-semibold">Serenity</span>
                <span className="font-heading text-xl font-light text-[#7C9A92] ml-1">Yoga</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Temukan Kedamaian dalam Dirimu. Studio yoga dengan suasana tenang dan instruktur bersertifikat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#7C9A92] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#7C9A92] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#7C9A92] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/kelas" className="text-gray-300 hover:text-[#7C9A92] transition-colors">Kelas Yoga</Link></li>
              <li><Link href="/jadwal" className="text-gray-300 hover:text-[#7C9A92] transition-colors">Jadwal</Link></li>
              <li><Link href="/instruktur" className="text-gray-300 hover:text-[#7C9A92] transition-colors">Instruktur</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-[#7C9A92] transition-colors">Membership</Link></li>
              <li><Link href="/workshop" className="text-gray-300 hover:text-[#7C9A92] transition-colors">Workshop</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#7C9A92] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Jl. Senopati No. 123, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#7C9A92] flex-shrink-0" />
                <span className="text-gray-300">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#7C9A92] flex-shrink-0" />
                <span className="text-gray-300">hello@serenityyoga.id</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl mb-4">Jam Operasional</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-[#7C9A92] flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Senin - Jumat: 06:00 - 21:00</p>
                  <p>Sabtu - Minggu: 07:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-2">&copy; 2025 Serenity Yoga Studio</p>
          <p className="text-gray-400">
            Website ini dibuat dengan <span className="text-red-400">&hearts;</span> oleh{' '}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C9A92] hover:underline"
            >
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
