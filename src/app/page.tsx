'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Award, Star, ChevronRight } from 'lucide-react';

const kelasYoga = [
  {
    nama: "Hatha Yoga",
    deskripsi: "Yoga dasar untuk pemula dengan fokus pada postur dan pernapasan",
    durasi: "60 menit",
    level: "Semua level",
    icon: "🧘"
  },
  {
    nama: "Vinyasa Flow",
    deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas",
    durasi: "75 menit",
    level: "Intermediate",
    icon: "🌊"
  },
  {
    nama: "Yin Yoga",
    deskripsi: "Deep stretch untuk relaksasi dan fleksibilitas",
    durasi: "60 menit",
    level: "Semua level",
    icon: "🌙"
  },
  {
    nama: "Power Yoga",
    deskripsi: "Yoga intensif untuk membangun kekuatan dan stamina",
    durasi: "60 menit",
    level: "Intermediate-Advanced",
    icon: "💪"
  },
  {
    nama: "Prenatal Yoga",
    deskripsi: "Yoga khusus untuk ibu hamil yang aman dan nyaman",
    durasi: "60 menit",
    level: "Semua trimester",
    icon: "🤰"
  },
  {
    nama: "Meditation Class",
    deskripsi: "Guided meditation untuk ketenangan pikiran",
    durasi: "45 menit",
    level: "Semua level",
    icon: "🕯️"
  }
];

const instruktur = [
  {
    nama: "Ibu Made Dewi",
    role: "Yoga Director",
    sertifikat: "RYT-500",
    pengalaman: "15 tahun pengalaman",
    image: "/instruktur-1.jpg"
  },
  {
    nama: "Mbak Sarah",
    role: "Vinyasa Specialist",
    sertifikat: "RYT-200",
    pengalaman: "8 tahun pengalaman",
    image: "/instruktur-2.jpg"
  },
  {
    nama: "Mas Yoga",
    role: "Power & Ashtanga",
    sertifikat: "RYT-500",
    pengalaman: "10 tahun pengalaman",
    image: "/instruktur-3.jpg"
  },
  {
    nama: "Ibu Ratna",
    role: "Prenatal & Yin",
    sertifikat: "RYT-200",
    pengalaman: "7 tahun pengalaman",
    image: "/instruktur-4.jpg"
  }
];

const membership = [
  {
    nama: "Drop-in",
    harga: "Rp 150.000",
    periode: "/kelas",
    deskripsi: "Cocok untuk mencoba",
    fitur: ["1 kelas yoga", "Yoga mat tersedia", "Akses locker", "Air mineral gratis"],
    populer: false
  },
  {
    nama: "Monthly",
    harga: "Rp 800.000",
    periode: "/bulan",
    deskripsi: "Unlimited class",
    fitur: ["Unlimited kelas yoga", "Yoga mat premium", "Akses locker pribadi", "Handuk gratis", "Diskon workshop 10%", "Free 1 guest pass"],
    populer: true
  },
  {
    nama: "Annual",
    harga: "Rp 7.200.000",
    periode: "/tahun",
    deskripsi: "Hemat 25%",
    fitur: ["Unlimited kelas yoga", "Yoga mat premium", "Locker permanen", "Handuk & toiletries", "Free 2 workshop/tahun", "Free 3 guest pass/bulan", "Priority booking"],
    populer: false
  }
];

const testimoni = [
  {
    nama: "Dewi",
    status: "Member 2 tahun",
    quote: "Serenity Yoga mengubah hidup saya. Stress berkurang, tidur lebih nyenyak, dan tubuh terasa lebih sehat.",
    rating: 5
  },
  {
    nama: "Andi",
    status: "Member baru",
    quote: "Instrukturnya sabar dan perhatian. Cocok banget untuk pemula seperti saya yang baru mulai yoga.",
    rating: 5
  },
  {
    nama: "Ratna",
    status: "Member 3 tahun",
    quote: "Studio terbersih dan paling nyaman di Jakarta. Highly recommended untuk siapa saja!",
    rating: 5
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="absolute inset-0 bg-[url('/yoga-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#7C9A92] font-medium mb-4"
            >
              Selamat Datang di Serenity Yoga Studio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#3D405B] mb-6 leading-tight"
            >
              Awali Perjalanan Menuju <span className="text-[#7C9A92]">Keseimbangan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              Studio yoga dengan suasana tenang dan instruktur bersertifikat. Temukan ketenangan pikiran dan kesehatan tubuh di sini.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/kontak" className="btn-primary flex items-center gap-2">
                Coba Kelas Gratis <ArrowRight size={18} />
              </Link>
              <Link href="/jadwal" className="btn-secondary">
                Lihat Jadwal
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-[#7C9A92]">15+</p>
                <p className="text-gray-600">Jenis Kelas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-[#7C9A92]">10</p>
                <p className="text-gray-600">Instruktur</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-[#7C9A92]">5.000+</p>
                <p className="text-gray-600">Member</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#7C9A92]/10 rounded-full blur-3xl"></div>
        <div className="absolute right-20 bottom-1/4 w-48 h-48 bg-[#E8D5B7]/30 rounded-full blur-2xl"></div>
      </section>

      {/* Jenis Kelas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Jenis Kelas Yoga</h2>
            <p className="section-subtitle">
              Pilih kelas yang sesuai dengan kebutuhan dan level Anda
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {kelasYoga.map((kelas, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#FAF8F5] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#7C9A92]/20"
              >
                <div className="text-4xl mb-4">{kelas.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-[#3D405B] mb-2">{kelas.nama}</h3>
                <p className="text-gray-600 mb-4">{kelas.deskripsi}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-[#7C9A92]">
                    <Clock size={16} /> {kelas.durasi}
                  </span>
                  <span className="bg-[#E8D5B7]/50 px-3 py-1 rounded-full text-[#3D405B]">
                    {kelas.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/kelas" className="btn-secondary inline-flex items-center gap-2">
              Lihat Semua Kelas <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instruktur Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Instruktur Kami</h2>
            <p className="section-subtitle">
              Dipandu oleh instruktur bersertifikat internasional
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {instruktur.map((person, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#7C9A92]/30 to-[#E8D5B7]/30 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#7C9A92] rounded-full flex items-center justify-center text-white text-3xl font-heading">
                    {person.nama.charAt(0)}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-heading font-semibold text-[#3D405B]">{person.nama}</h3>
                  <p className="text-[#7C9A92] font-medium">{person.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{person.sertifikat} • {person.pengalaman}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/instruktur" className="btn-secondary inline-flex items-center gap-2">
              Lihat Semua Instruktur <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Paket Membership</h2>
            <p className="section-subtitle">
              Pilih paket yang sesuai dengan gaya hidup yoga Anda
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {membership.map((paket, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-8 ${paket.populer ? 'bg-[#7C9A92] text-white scale-105 shadow-xl' : 'bg-[#FAF8F5]'} relative`}
              >
                {paket.populer && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Paling Populer
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-heading font-semibold ${paket.populer ? 'text-white' : 'text-[#3D405B]'}`}>
                    {paket.nama}
                  </h3>
                  <div className="mt-4">
                    <span className={`text-3xl font-bold ${paket.populer ? 'text-white' : 'text-[#7C9A92]'}`}>
                      {paket.harga}
                    </span>
                    <span className={paket.populer ? 'text-white/80' : 'text-gray-500'}>
                      {paket.periode}
                    </span>
                  </div>
                  <p className={`mt-2 ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>
                    {paket.deskripsi}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {paket.fitur.map((fitur, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Award size={16} className={paket.populer ? 'text-[#E8D5B7]' : 'text-[#7C9A92]'} />
                      <span className={paket.populer ? 'text-white/90' : 'text-gray-600'}>{fitur}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    paket.populer
                      ? 'bg-white text-[#7C9A92] hover:bg-[#E8D5B7]'
                      : 'bg-[#7C9A92] text-white hover:bg-[#6a8880]'
                  }`}
                >
                  Pilih Paket
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Apa Kata Member Kami</h2>
            <p className="section-subtitle">
              Dengarkan pengalaman mereka yang telah merasakan manfaat yoga
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimoni.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#B8860B] fill-[#B8860B]" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#7C9A92] rounded-full flex items-center justify-center text-white font-heading">
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#3D405B]">{item.nama}</p>
                    <p className="text-sm text-gray-500">{item.status}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7C9A92] to-[#6a8880]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
              Mulai Perjalanan Yoga Anda
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Daftar sekarang dan dapatkan <span className="font-bold text-[#E8D5B7]">1 KELAS GRATIS</span> untuk pengalaman pertama Anda
            </p>
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-8 py-4 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all hover:scale-105">
              Daftar Trial Class <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
