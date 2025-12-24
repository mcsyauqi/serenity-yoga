'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, MapPin, ArrowRight, Users } from 'lucide-react';

const upcomingWorkshops = [
  {
    judul: "Introduction to Arm Balances",
    deskripsi: "Pelajari dasar-dasar arm balance seperti Crow Pose, Side Crow, dan Flying Pigeon. Cocok untuk yang ingin mengembangkan praktek yoga ke level berikutnya.",
    tanggal: "18 Januari 2025",
    waktu: "09:00 - 12:00",
    instruktur: "Mas Yoga Pratama",
    lokasi: "Studio A",
    harga: "Rp 350.000",
    hargaMember: "Rp 315.000",
    kapasitas: 20,
    tersedia: 8,
    level: "Intermediate",
    image: "/workshop-1.jpg"
  },
  {
    judul: "Yoga for Stress Relief",
    deskripsi: "Workshop 3 jam untuk mengelola stress melalui yoga, pranayama, dan meditasi. Bawa pulang teknik-teknik yang bisa dipraktekkan sehari-hari.",
    tanggal: "25 Januari 2025",
    waktu: "14:00 - 17:00",
    instruktur: "Ibu Made Dewi",
    lokasi: "Studio B",
    harga: "Rp 300.000",
    hargaMember: "Rp 270.000",
    kapasitas: 25,
    tersedia: 12,
    level: "Semua Level",
    image: "/workshop-2.jpg"
  },
  {
    judul: "Prenatal Yoga Intensive",
    deskripsi: "Workshop lengkap untuk ibu hamil tentang yoga, pernapasan untuk persalinan, dan teknik relaksasi. Termasuk materi yang bisa dibawa pulang.",
    tanggal: "1 Februari 2025",
    waktu: "10:00 - 14:00",
    instruktur: "Ibu Ratna Kusuma",
    lokasi: "Studio C",
    harga: "Rp 400.000",
    hargaMember: "Rp 360.000",
    kapasitas: 15,
    tersedia: 5,
    level: "Ibu Hamil",
    image: "/workshop-3.jpg"
  },
  {
    judul: "Backbends & Heart Openers",
    deskripsi: "Eksplorasi backbend dengan aman mulai dari Cobra hingga Wheel Pose. Fokus pada pemanasan yang tepat dan teknik yang benar.",
    tanggal: "8 Februari 2025",
    waktu: "09:00 - 12:00",
    instruktur: "Mbak Sarah Wijaya",
    lokasi: "Studio A",
    harga: "Rp 350.000",
    hargaMember: "Rp 315.000",
    kapasitas: 20,
    tersedia: 15,
    level: "Intermediate",
    image: "/workshop-4.jpg"
  },
  {
    judul: "Meditation & Mindfulness Retreat",
    deskripsi: "Mini retreat sehari penuh dengan berbagai teknik meditasi, mindful movement, dan yoga nidra. Termasuk makan siang sehat.",
    tanggal: "15 Februari 2025",
    waktu: "08:00 - 16:00",
    instruktur: "Ibu Made Dewi & Mas Ari",
    lokasi: "Full Studio",
    harga: "Rp 750.000",
    hargaMember: "Rp 675.000",
    kapasitas: 30,
    tersedia: 18,
    level: "Semua Level",
    image: "/workshop-5.jpg"
  },
  {
    judul: "Inversions 101",
    deskripsi: "Belajar headstand dan shoulderstand dengan aman. Workshop ini mencakup persiapan, teknik, dan cara menggunakan props.",
    tanggal: "22 Februari 2025",
    waktu: "09:00 - 12:00",
    instruktur: "Mas Yoga Pratama",
    lokasi: "Studio A",
    harga: "Rp 350.000",
    hargaMember: "Rp 315.000",
    kapasitas: 18,
    tersedia: 10,
    level: "Intermediate-Advanced",
    image: "/workshop-6.jpg"
  }
];

const pastWorkshops = [
  "Yoga for Runners (Desember 2024)",
  "Sound Bath & Yin Yoga (November 2024)",
  "Ashtanga Primary Series (Oktober 2024)",
  "Partner Yoga for Couples (September 2024)",
];

export default function WorkshopPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-[#3D405B] mb-6">
              Workshop & Event
            </h1>
            <p className="text-lg text-gray-600">
              Perdalam praktek yoga Anda dengan workshop khusus dan event spesial bersama instruktur ahli
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title">Workshop Mendatang</h2>
            <p className="section-subtitle">
              Daftar sekarang sebelum kehabisan tempat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#7C9A92]/30 to-[#E8D5B7]/30 flex items-center justify-center">
                  <span className="text-5xl">🧘</span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      workshop.tersedia < 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {workshop.tersedia < 10 ? `Sisa ${workshop.tersedia} tempat` : 'Tersedia'}
                    </span>
                    <span className="bg-[#E8D5B7]/50 px-3 py-1 rounded-full text-xs text-[#3D405B]">
                      {workshop.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-[#3D405B] mb-2">
                    {workshop.judul}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {workshop.deskripsi}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#7C9A92]" />
                      {workshop.tanggal}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#7C9A92]" />
                      {workshop.waktu}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-[#7C9A92]" />
                      {workshop.instruktur}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#7C9A92]" />
                      {workshop.lokasi}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-[#7C9A92] font-bold">{workshop.harga}</p>
                        <p className="text-xs text-gray-500">Member: {workshop.hargaMember}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Users size={14} />
                        {workshop.tersedia}/{workshop.kapasitas}
                      </div>
                    </div>
                    <Link
                      href="/kontak"
                      className="block text-center bg-[#7C9A92] text-white py-2 rounded-full text-sm font-medium hover:bg-[#6a8880] transition-colors"
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Mengapa Ikut Workshop?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#3D405B] mb-2">Pembelajaran Mendalam</h3>
              <p className="text-gray-600">Fokus pada satu topik dengan waktu yang cukup untuk benar-benar memahami</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#3D405B] mb-2">Kelompok Kecil</h3>
              <p className="text-gray-600">Perhatian personal dari instruktur untuk koreksi dan feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#3D405B] mb-2">Skill Baru</h3>
              <p className="text-gray-600">Bawa pulang teknik dan pengetahuan baru untuk praktek mandiri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-heading font-semibold text-[#3D405B] mb-4">Workshop Sebelumnya</h2>
            <p className="text-gray-600">
              Kami rutin mengadakan workshop setiap bulan. Berikut beberapa workshop yang sudah berlangsung:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {pastWorkshops.map((item, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded-full text-gray-600 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Private Workshop */}
      <section className="py-16 bg-[#7C9A92]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">
            Ingin Workshop Khusus?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Kami juga menyediakan workshop private untuk perusahaan, komunitas, atau acara khusus Anda
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-8 py-4 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">
            Hubungi Kami <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
