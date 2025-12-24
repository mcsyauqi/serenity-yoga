import Link from 'next/link';
import { Calendar, Clock, User, MapPin, ArrowRight, Users } from 'lucide-react';

const workshops = [
  { judul: "Introduction to Arm Balances", deskripsi: "Pelajari dasar-dasar arm balance seperti Crow Pose dan Side Crow.", tanggal: "18 Januari 2025", waktu: "09:00 - 12:00", instruktur: "Mas Yoga", lokasi: "Studio A", harga: "Rp 350.000", hargaMember: "Rp 315.000", kapasitas: 20, tersedia: 8, level: "Intermediate" },
  { judul: "Yoga for Stress Relief", deskripsi: "Workshop untuk mengelola stress melalui yoga, pranayama, dan meditasi.", tanggal: "25 Januari 2025", waktu: "14:00 - 17:00", instruktur: "Ibu Made Dewi", lokasi: "Studio B", harga: "Rp 300.000", hargaMember: "Rp 270.000", kapasitas: 25, tersedia: 12, level: "Semua Level" },
  { judul: "Prenatal Yoga Intensive", deskripsi: "Workshop lengkap untuk ibu hamil tentang yoga dan pernapasan untuk persalinan.", tanggal: "1 Februari 2025", waktu: "10:00 - 14:00", instruktur: "Ibu Ratna", lokasi: "Studio C", harga: "Rp 400.000", hargaMember: "Rp 360.000", kapasitas: 15, tersedia: 5, level: "Ibu Hamil" },
  { judul: "Backbends & Heart Openers", deskripsi: "Eksplorasi backbend dengan aman mulai dari Cobra hingga Wheel Pose.", tanggal: "8 Februari 2025", waktu: "09:00 - 12:00", instruktur: "Mbak Sarah", lokasi: "Studio A", harga: "Rp 350.000", hargaMember: "Rp 315.000", kapasitas: 20, tersedia: 15, level: "Intermediate" },
  { judul: "Meditation Retreat", deskripsi: "Mini retreat sehari penuh dengan berbagai teknik meditasi dan yoga nidra.", tanggal: "15 Februari 2025", waktu: "08:00 - 16:00", instruktur: "Ibu Made Dewi", lokasi: "Full Studio", harga: "Rp 750.000", hargaMember: "Rp 675.000", kapasitas: 30, tersedia: 18, level: "Semua Level" },
  { judul: "Inversions 101", deskripsi: "Belajar headstand dan shoulderstand dengan aman.", tanggal: "22 Februari 2025", waktu: "09:00 - 12:00", instruktur: "Mas Yoga", lokasi: "Studio A", harga: "Rp 350.000", hargaMember: "Rp 315.000", kapasitas: 18, tersedia: 10, level: "Advanced" }
];

export default function WorkshopPage() {
  return (
    <main className="pt-16">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-text mb-3">Workshop & Event</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Perdalam praktek yoga Anda dengan workshop khusus</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text text-center mb-8">Workshop Mendatang</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-28 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  <span className="text-4xl">🧘</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${w.tersedia < 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {w.tersedia < 10 ? `Sisa ${w.tersedia}` : 'Tersedia'}
                    </span>
                    <span className="bg-secondary/50 px-2 py-0.5 rounded text-xs text-text">{w.level}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">{w.judul}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{w.deskripsi}</p>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-primary" />{w.tanggal}</div>
                    <div className="flex items-center gap-2"><Clock size={14} className="text-primary" />{w.waktu}</div>
                    <div className="flex items-center gap-2"><User size={14} className="text-primary" />{w.instruktur}</div>
                    <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" />{w.lokasi}</div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-primary font-bold text-sm">{w.harga}</p>
                        <p className="text-xs text-gray-500">Member: {w.hargaMember}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users size={12} />{w.tersedia}/{w.kapasitas}
                      </div>
                    </div>
                    <Link href="/kontak" className="block text-center bg-primary text-white py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text text-center mb-8">Mengapa Ikut Workshop?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">Pembelajaran Mendalam</h3>
              <p className="text-gray-600 text-sm">Fokus pada satu topik dengan waktu yang cukup</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">Kelompok Kecil</h3>
              <p className="text-gray-600 text-sm">Perhatian personal dari instruktur</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">Skill Baru</h3>
              <p className="text-gray-600 text-sm">Teknik baru untuk praktek mandiri</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">Ingin Workshop Khusus?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Kami menyediakan workshop private untuk perusahaan atau acara khusus</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
            Hubungi Kami <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
