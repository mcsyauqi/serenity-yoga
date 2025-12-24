'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Clock, Users, ArrowRight, Instagram } from 'lucide-react';

const instruktur = [
  { nama: "Ibu Made Dewi", role: "Yoga Director", sertifikat: "RYT-500", pengalaman: "15 tahun", spesialisasi: ["Hatha Yoga", "Meditation", "Yoga Philosophy"], bio: "Made Dewi adalah pendiri dan direktur Serenity Yoga Studio. Beliau memulai perjalanan yoga di Bali dan telah belajar dengan berbagai guru yoga ternama di India dan Bali.", quote: "Yoga bukan tentang menyentuh jari kaki, tapi tentang apa yang kamu pelajari dalam perjalanan ke sana.", kelasPerMinggu: 20, siswa: 500 },
  { nama: "Mbak Sarah Wijaya", role: "Vinyasa Specialist", sertifikat: "RYT-200", pengalaman: "8 tahun", spesialisasi: ["Vinyasa Flow", "Hatha Yoga", "Core Yoga"], bio: "Sarah menemukan yoga saat mencari cara untuk mengatasi stress dari pekerjaannya di dunia korporat. Kelasnya dikenal energik, kreatif, dan menyenangkan.", quote: "Move with intention, breathe with purpose.", kelasPerMinggu: 15, siswa: 350 },
  { nama: "Mas Yoga Pratama", role: "Power & Ashtanga", sertifikat: "RYT-500", pengalaman: "10 tahun", spesialisasi: ["Power Yoga", "Ashtanga", "Arm Balances"], bio: "Yoga memulai praktek yoga sebagai pelengkap latihannya sebagai atlet. Ia kemudian jatuh cinta dengan Ashtanga dan belajar langsung di Mysore, India.", quote: "Strength comes from overcoming the things you thought you couldn't.", kelasPerMinggu: 12, siswa: 300 },
  { nama: "Ibu Ratna Kusuma", role: "Prenatal & Yin", sertifikat: "RYT-200", pengalaman: "7 tahun", spesialisasi: ["Prenatal Yoga", "Yin Yoga", "Restorative"], bio: "Ratna menemukan passion-nya dalam yoga prenatal setelah pengalaman pribadinya selama kehamilan. Ia berdedikasi membantu ibu hamil merasa nyaman.", quote: "In stillness, we find strength. In softness, we find power.", kelasPerMinggu: 10, siswa: 250 },
];

export default function InstrukturPage() {
  return (
    <div>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#3D405B] mb-4">Tim Instruktur Kami</h1>
            <p className="text-gray-600">Dipandu oleh instruktur bersertifikat internasional yang berdedikasi untuk perjalanan yoga Anda</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {instruktur.map((person, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-4">
                  <div className="bg-gradient-to-br from-[#7C9A92]/30 to-[#E8D5B7]/30 flex items-center justify-center p-8 lg:p-10">
                    <div className="w-28 h-28 lg:w-32 lg:h-32 bg-[#7C9A92] rounded-full flex items-center justify-center text-white text-4xl lg:text-5xl font-heading shadow-lg">
                      {person.nama.split(' ').pop()?.charAt(0)}
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-5 lg:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="text-xl font-heading font-semibold text-[#3D405B]">{person.nama}</h2>
                        <p className="text-[#7C9A92] font-medium text-sm">{person.role}</p>
                      </div>
                      <a href="#" className="text-gray-400 hover:text-[#7C9A92] transition-colors"><Instagram size={22} /></a>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3 text-sm">
                      <span className="flex items-center gap-1 text-gray-600"><Award size={14} className="text-[#B8860B]" />{person.sertifikat}</span>
                      <span className="flex items-center gap-1 text-gray-600"><Clock size={14} className="text-[#7C9A92]" />{person.pengalaman}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {person.spesialisasi.map((s, i) => (<span key={i} className="bg-[#E8D5B7]/50 px-2.5 py-0.5 rounded-full text-xs text-[#3D405B]">{s}</span>))}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{person.bio}</p>
                    <blockquote className="border-l-3 border-[#7C9A92] pl-3 italic text-gray-500 text-sm mb-3">&ldquo;{person.quote}&rdquo;</blockquote>
                    <div className="flex gap-5 text-sm">
                      <div className="flex items-center gap-1.5"><Users size={14} className="text-[#7C9A92]" /><span className="text-gray-600">{person.siswa}+ siswa</span></div>
                      <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#7C9A92]" /><span className="text-gray-600">{person.kelasPerMinggu} kelas/minggu</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#3D405B] mb-3">Ingin Bergabung dengan Tim Kami?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm">Kami selalu mencari instruktur yoga bersertifikat yang passionate</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#7C9A92] text-[#7C9A92] font-semibold rounded-full hover:bg-[#7C9A92] hover:text-white transition-colors">Kirim Lamaran <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#7C9A92]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-3">Siap Belajar dari yang Terbaik?</h2>
          <p className="text-white/80 mb-6">Coba kelas pertama Anda secara GRATIS</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-6 py-3 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">Daftar Trial Class <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
