'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Award, Star, ChevronRight, Check } from 'lucide-react';

const kelasYoga = [
  { nama: "Hatha Yoga", deskripsi: "Yoga dasar untuk pemula dengan fokus pada postur dan pernapasan", durasi: "60 menit", level: "Semua level", icon: "🧘" },
  { nama: "Vinyasa Flow", deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas", durasi: "75 menit", level: "Intermediate", icon: "🌊" },
  { nama: "Yin Yoga", deskripsi: "Deep stretch untuk relaksasi dan fleksibilitas", durasi: "60 menit", level: "Semua level", icon: "🌙" },
  { nama: "Power Yoga", deskripsi: "Yoga intensif untuk membangun kekuatan dan stamina", durasi: "60 menit", level: "Intermediate-Advanced", icon: "💪" },
  { nama: "Prenatal Yoga", deskripsi: "Yoga khusus untuk ibu hamil yang aman dan nyaman", durasi: "60 menit", level: "Semua trimester", icon: "🤰" },
  { nama: "Meditation Class", deskripsi: "Guided meditation untuk ketenangan pikiran", durasi: "45 menit", level: "Semua level", icon: "🕯️" }
];

const instruktur = [
  { nama: "Ibu Made Dewi", role: "Yoga Director", sertifikat: "RYT-500", pengalaman: "15 tahun" },
  { nama: "Mbak Sarah", role: "Vinyasa Specialist", sertifikat: "RYT-200", pengalaman: "8 tahun" },
  { nama: "Mas Yoga", role: "Power & Ashtanga", sertifikat: "RYT-500", pengalaman: "10 tahun" },
  { nama: "Ibu Ratna", role: "Prenatal & Yin", sertifikat: "RYT-200", pengalaman: "7 tahun" }
];

const membership = [
  { nama: "Drop-in", harga: "Rp 150.000", periode: "/kelas", deskripsi: "Cocok untuk mencoba", fitur: ["1 kelas yoga", "Yoga mat tersedia", "Akses locker", "Air mineral gratis"], populer: false },
  { nama: "Monthly", harga: "Rp 800.000", periode: "/bulan", deskripsi: "Unlimited class", fitur: ["Unlimited kelas yoga", "Yoga mat premium", "Akses locker pribadi", "Handuk gratis", "Diskon workshop 10%", "Free 1 guest pass"], populer: true },
  { nama: "Annual", harga: "Rp 7.200.000", periode: "/tahun", deskripsi: "Hemat 25%", fitur: ["Unlimited kelas yoga", "Yoga mat premium", "Locker permanen", "Handuk & toiletries", "Free 2 workshop/tahun", "Priority booking"], populer: false }
];

const testimoni = [
  { nama: "Dewi", status: "Member 2 tahun", quote: "Serenity Yoga mengubah hidup saya. Stress berkurang, tidur lebih nyenyak, dan tubuh terasa lebih sehat.", rating: 5 },
  { nama: "Andi", status: "Member baru", quote: "Instrukturnya sabar dan perhatian. Cocok banget untuk pemula seperti saya yang baru mulai yoga.", rating: 5 },
  { nama: "Ratna", status: "Member 3 tahun", quote: "Studio terbersih dan paling nyaman di Jakarta. Highly recommended untuk siapa saja!", rating: 5 }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/yoga-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#7C9A92]/10 rounded-full blur-3xl"></div>
        <div className="absolute right-20 bottom-1/4 w-48 h-48 bg-[#E8D5B7]/30 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#7C9A92] font-medium text-sm sm:text-base mb-3"
            >
              Selamat Datang di Serenity Yoga Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-[#3D405B] leading-tight mb-4 lg:mb-6"
            >
              Awali Perjalanan Menuju <span className="text-[#7C9A92]">Keseimbangan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 max-w-xl"
            >
              Studio yoga dengan suasana tenang dan instruktur bersertifikat. Temukan ketenangan pikiran dan kesehatan tubuh di sini.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="/kontak" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7C9A92] text-white font-semibold rounded-full hover:bg-[#6a8880] transition-colors">
                Coba Kelas Gratis <ArrowRight size={18} />
              </Link>
              <Link href="/jadwal" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#7C9A92] text-[#7C9A92] font-semibold rounded-full hover:bg-[#7C9A92] hover:text-white transition-colors">
                Lihat Jadwal
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 sm:gap-8 mt-10 lg:mt-12 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-[#7C9A92]">15+</p>
                <p className="text-sm text-gray-600">Jenis Kelas</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-[#7C9A92]">10</p>
                <p className="text-sm text-gray-600">Instruktur</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-[#7C9A92]">5.000+</p>
                <p className="text-sm text-gray-600">Member</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jenis Kelas Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#3D405B] mb-3">Jenis Kelas Yoga</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Pilih kelas yang sesuai dengan kebutuhan dan level Anda</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {kelasYoga.map((kelas, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#FAF8F5] rounded-xl p-5 lg:p-6 hover:shadow-lg transition-all border border-transparent hover:border-[#7C9A92]/20"
              >
                <div className="text-3xl lg:text-4xl mb-3">{kelas.icon}</div>
                <h3 className="text-lg lg:text-xl font-heading font-semibold text-[#3D405B] mb-2">{kelas.nama}</h3>
                <p className="text-gray-600 text-sm mb-4">{kelas.deskripsi}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-[#7C9A92]">
                    <Clock size={14} /> {kelas.durasi}
                  </span>
                  <span className="bg-[#E8D5B7]/50 px-2.5 py-0.5 rounded-full text-[#3D405B] text-xs">
                    {kelas.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8 lg:mt-10">
            <Link href="/kelas" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#7C9A92] text-[#7C9A92] font-semibold rounded-full hover:bg-[#7C9A92] hover:text-white transition-colors">
              Lihat Semua Kelas <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instruktur Section */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#3D405B] mb-3">Instruktur Kami</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Dipandu oleh instruktur bersertifikat internasional</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {instruktur.map((person, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-[#7C9A92]/30 to-[#E8D5B7]/30 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#7C9A92] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-heading font-semibold">
                    {person.nama.split(' ').pop()?.charAt(0)}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm sm:text-base font-heading font-semibold text-[#3D405B]">{person.nama}</h3>
                  <p className="text-[#7C9A92] text-xs sm:text-sm font-medium">{person.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{person.sertifikat} &bull; {person.pengalaman}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8 lg:mt-10">
            <Link href="/instruktur" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#7C9A92] text-[#7C9A92] font-semibold rounded-full hover:bg-[#7C9A92] hover:text-white transition-colors">
              Lihat Semua Instruktur <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#3D405B] mb-3">Paket Membership</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Pilih paket yang sesuai dengan gaya hidup yoga Anda</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {membership.map((paket, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-xl p-6 lg:p-8 relative ${paket.populer ? 'bg-[#7C9A92] text-white md:scale-105 shadow-xl z-10' : 'bg-[#FAF8F5]'}`}
              >
                {paket.populer && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Paling Populer
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-lg lg:text-xl font-heading font-semibold ${paket.populer ? 'text-white' : 'text-[#3D405B]'}`}>
                    {paket.nama}
                  </h3>
                  <div className="mt-3">
                    <span className={`text-2xl lg:text-3xl font-bold ${paket.populer ? 'text-white' : 'text-[#7C9A92]'}`}>
                      {paket.harga}
                    </span>
                    <span className={`text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>
                      {paket.periode}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>
                    {paket.deskripsi}
                  </p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {paket.fitur.map((fitur, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} className={paket.populer ? 'text-[#E8D5B7]' : 'text-[#7C9A92]'} />
                      <span className={paket.populer ? 'text-white/90' : 'text-gray-600'}>{fitur}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={`block text-center py-3 rounded-full font-semibold transition-colors ${
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
      <section className="py-16 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#3D405B] mb-3">Apa Kata Member Kami</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Dengarkan pengalaman mereka yang telah merasakan manfaat yoga</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
          >
            {testimoni.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#B8860B] fill-[#B8860B]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-5">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7C9A92] rounded-full flex items-center justify-center text-white font-heading font-semibold">
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#3D405B] text-sm">{item.nama}</p>
                    <p className="text-xs text-gray-500">{item.status}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#7C9A92] to-[#6a8880]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white mb-3">
              Mulai Perjalanan Yoga Anda
            </h2>
            <p className="text-white/80 text-base lg:text-lg mb-6 lg:mb-8 max-w-xl mx-auto">
              Daftar sekarang dan dapatkan <span className="font-bold text-[#E8D5B7]">1 KELAS GRATIS</span> untuk pengalaman pertama Anda
            </p>
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all hover:scale-105">
              Daftar Trial Class <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
