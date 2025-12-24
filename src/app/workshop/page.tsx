'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, MapPin, ArrowRight, Users } from 'lucide-react';

const workshops = [
  { judul: "Introduction to Arm Balances", deskripsi: "Pelajari dasar-dasar arm balance seperti Crow Pose dan Side Crow.", tanggal: "18 Januari 2025", waktu: "09:00 - 12:00", instruktur: "Mas Yoga", lokasi: "Studio A", harga: "Rp 350.000", hargaMember: "Rp 315.000", kapasitas: 20, tersedia: 8, level: "Intermediate" },
  { judul: "Yoga for Stress Relief", deskripsi: "Workshop untuk mengelola stress melalui yoga, pranayama, dan meditasi.", tanggal: "25 Januari 2025", waktu: "14:00 - 17:00", instruktur: "Ibu Made Dewi", lokasi: "Studio B", harga: "Rp 300.000", hargaMember: "Rp 270.000", kapasitas: 25, tersedia: 12, level: "Semua Level" },
  { judul: "Prenatal Yoga Intensive", deskripsi: "Workshop lengkap untuk ibu hamil tentang yoga dan pernapasan untuk persalinan.", tanggal: "1 Februari 2025", waktu: "10:00 - 14:00", instruktur: "Ibu Ratna", lokasi: "Studio C", harga: "Rp 400.000", hargaMember: "Rp 360.000", kapasitas: 15, tersedia: 5, level: "Ibu Hamil" },
  { judul: "Backbends & Heart Openers", deskripsi: "Eksplorasi backbend dengan aman mulai dari Cobra hingga Wheel Pose.", tanggal: "8 Februari 2025", waktu: "09:00 - 12:00", instruktur: "Mbak Sarah", lokasi: "Studio A", harga: "Rp 350.000", hargaMember: "Rp 315.000", kapasitas: 20, tersedia: 15, level: "Intermediate" },
  { judul: "Meditation Retreat", deskripsi: "Mini retreat sehari penuh dengan berbagai teknik meditasi dan yoga nidra.", tanggal: "15 Februari 2025", waktu: "08:00 - 16:00", instruktur: "Ibu Made Dewi", lokasi: "Full Studio", harga: "Rp 750.000", hargaMember: "Rp 675.000", kapasitas: 30, tersedia: 18, level: "Semua Level" },
  { judul: "Inversions 101", deskripsi: "Belajar headstand dan shoulderstand dengan aman. Mencakup persiapan dan teknik.", tanggal: "22 Februari 2025", waktu: "09:00 - 12:00", instruktur: "Mas Yoga", lokasi: "Studio A", harga: "Rp 350.000", hargaMember: "Rp 315.000", kapasitas: 18, tersedia: 10, level: "Advanced" }
];

export default function WorkshopPage() {
  return (
    <div>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#3D405B] mb-4">Workshop & Event</h1>
            <p className="text-gray-600">Perdalam praktek yoga Anda dengan workshop khusus bersama instruktur ahli</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#3D405B] text-center mb-8">Workshop Mendatang</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workshops.map((w, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-32 bg-gradient-to-br from-[#7C9A92]/30 to-[#E8D5B7]/30 flex items-center justify-center"><span className="text-4xl">🧘</span></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${w.tersedia < 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{w.tersedia < 10 ? `Sisa ${w.tersedia}` : 'Tersedia'}</span>
                    <span className="bg-[#E8D5B7]/50 px-2.5 py-0.5 rounded-full text-xs text-[#3D405B]">{w.level}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#3D405B] mb-2">{w.judul}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{w.deskripsi}</p>
                  <div className="space-y-1.5 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-[#7C9A92]" />{w.tanggal}</div>
                    <div className="flex items-center gap-2"><Clock size={14} className="text-[#7C9A92]" />{w.waktu}</div>
                    <div className="flex items-center gap-2"><User size={14} className="text-[#7C9A92]" />{w.instruktur}</div>
                    <div className="flex items-center gap-2"><MapPin size={14} className="text-[#7C9A92]" />{w.lokasi}</div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-[#7C9A92] font-bold text-sm">{w.harga}</p>
                        <p className="text-xs text-gray-500">Member: {w.hargaMember}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500"><Users size={12} />{w.tersedia}/{w.kapasitas}</div>
                    </div>
                    <Link href="/kontak" className="block text-center bg-[#7C9A92] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#6a8880] transition-colors">Daftar Sekarang</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#3D405B] text-center mb-8">Mengapa Ikut Workshop?</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <div className="w-14 h-14 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-2xl">📚</span></div>
              <h3 className="font-heading text-lg font-semibold text-[#3D405B] mb-2">Pembelajaran Mendalam</h3>
              <p className="text-gray-600 text-sm">Fokus pada satu topik dengan waktu yang cukup</p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-2xl">👥</span></div>
              <h3 className="font-heading text-lg font-semibold text-[#3D405B] mb-2">Kelompok Kecil</h3>
              <p className="text-gray-600 text-sm">Perhatian personal dari instruktur</p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-2xl">🎯</span></div>
              <h3 className="font-heading text-lg font-semibold text-[#3D405B] mb-2">Skill Baru</h3>
              <p className="text-gray-600 text-sm">Teknik baru untuk praktek mandiri</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#7C9A92]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-3">Ingin Workshop Khusus?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Kami menyediakan workshop private untuk perusahaan atau acara khusus</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-6 py-3 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">Hubungi Kami <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
