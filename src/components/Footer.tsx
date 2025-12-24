import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-[family-name:var(--font-heading)] text-lg font-semibold">S</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                Serenity <span className="font-normal text-primary">Yoga</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Temukan Kedamaian dalam Dirimu. Studio yoga dengan suasana tenang dan instruktur bersertifikat.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/kelas" className="text-gray-300 hover:text-primary transition-colors text-sm">Kelas Yoga</Link></li>
              <li><Link href="/jadwal" className="text-gray-300 hover:text-primary transition-colors text-sm">Jadwal</Link></li>
              <li><Link href="/instruktur" className="text-gray-300 hover:text-primary transition-colors text-sm">Instruktur</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-primary transition-colors text-sm">Membership</Link></li>
              <li><Link href="/workshop" className="text-gray-300 hover:text-primary transition-colors text-sm">Workshop</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Jl. Senopati No. 123, Kebayoran Baru, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-gray-300 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span className="text-gray-300 text-sm">hello@serenityyoga.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-primary mt-0.5 shrink-0" />
              <div className="text-gray-300 text-sm space-y-1">
                <p>Senin - Jumat: 06:00 - 21:00</p>
                <p>Sabtu - Minggu: 07:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm mb-1">&copy; 2025 Serenity Yoga Studio</p>
          <p className="text-gray-400 text-sm">
            Website dibuat oleh{' '}
            <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
