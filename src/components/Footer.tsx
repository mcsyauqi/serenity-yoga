import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3D405B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#7C9A92] rounded-full flex items-center justify-center">
                <span className="text-white font-heading text-xl font-semibold">S</span>
              </div>
              <div>
                <span className="font-heading text-xl font-semibold">Serenity</span>
                <span className="font-heading text-xl font-light text-[#7C9A92] ml-1">Yoga</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Temukan Kedamaian dalam Dirimu. Studio yoga dengan suasana tenang dan instruktur bersertifikat.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#7C9A92] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#7C9A92] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#7C9A92] hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/kelas" className="text-gray-300 hover:text-[#7C9A92] transition-colors text-sm">Kelas Yoga</Link></li>
              <li><Link href="/jadwal" className="text-gray-300 hover:text-[#7C9A92] transition-colors text-sm">Jadwal</Link></li>
              <li><Link href="/instruktur" className="text-gray-300 hover:text-[#7C9A92] transition-colors text-sm">Instruktur</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-[#7C9A92] transition-colors text-sm">Membership</Link></li>
              <li><Link href="/workshop" className="text-gray-300 hover:text-[#7C9A92] transition-colors text-sm">Workshop</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#7C9A92] mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Jl. Senopati No. 123, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#7C9A92] shrink-0" />
                <span className="text-gray-300 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#7C9A92] shrink-0" />
                <span className="text-gray-300 text-sm">hello@serenityyoga.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-[#7C9A92] mt-0.5 shrink-0" />
              <div className="text-gray-300 text-sm space-y-1">
                <p>Senin - Jumat: 06:00 - 21:00</p>
                <p>Sabtu - Minggu: 07:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">&copy; 2025 Serenity Yoga Studio</p>
          <p className="text-gray-400 text-sm">
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
