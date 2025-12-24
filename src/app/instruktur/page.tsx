'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Clock, Users, ArrowRight, Instagram } from 'lucide-react';

const instruktur = [
  {
    nama: "Ibu Made Dewi",
    role: "Yoga Director & Lead Instructor",
    sertifikat: "RYT-500, E-RYT 200",
    pengalaman: "15 tahun",
    spesialisasi: ["Hatha Yoga", "Meditation", "Yoga Philosophy"],
    bio: "Made Dewi adalah pendiri dan direktur Serenity Yoga Studio. Beliau memulai perjalanan yoga di Bali pada tahun 2009 dan telah belajar dengan berbagai guru yoga ternama di India dan Bali. Fokusnya adalah mengajarkan yoga yang accessible untuk semua orang dengan penekanan pada pernapasan dan kesadaran.",
    quote: "Yoga bukan tentang menyentuh jari kaki, tapi tentang apa yang kamu pelajari dalam perjalanan ke sana.",
    kelasPerMinggu: 20,
    siswa: 500
  },
  {
    nama: "Mbak Sarah Wijaya",
    role: "Senior Instructor - Vinyasa Specialist",
    sertifikat: "RYT-200, Vinyasa Flow Certified",
    pengalaman: "8 tahun",
    spesialisasi: ["Vinyasa Flow", "Hatha Yoga", "Core Yoga"],
    bio: "Sarah menemukan yoga saat mencari cara untuk mengatasi stress dari pekerjaannya di dunia korporat. Setelah merasakan transformasi yang luar biasa, ia memutuskan untuk menjadi instruktur penuh waktu. Kelasnya dikenal energik, kreatif, dan menyenangkan.",
    quote: "Move with intention, breathe with purpose.",
    kelasPerMinggu: 15,
    siswa: 350
  },
  {
    nama: "Mas Yoga Pratama",
    role: "Senior Instructor - Power & Ashtanga",
    sertifikat: "RYT-500, Ashtanga Authorized",
    pengalaman: "10 tahun",
    spesialisasi: ["Power Yoga", "Ashtanga", "Arm Balances"],
    bio: "Yoga (ya, itu nama aslinya!) memulai praktek yoga sebagai pelengkap latihannya sebagai atlet. Ia kemudian jatuh cinta dengan Ashtanga dan belajar langsung di Mysore, India. Kelasnya menantang namun tetap accessible dengan modifikasi untuk semua level.",
    quote: "Strength doesn't come from what you can do. It comes from overcoming the things you thought you couldn't.",
    kelasPerMinggu: 12,
    siswa: 300
  },
  {
    nama: "Ibu Ratna Kusuma",
    role: "Specialist - Prenatal & Yin Yoga",
    sertifikat: "RYT-200, Prenatal Yoga Certified, Yin Yoga Certified",
    pengalaman: "7 tahun",
    spesialisasi: ["Prenatal Yoga", "Yin Yoga", "Restorative"],
    bio: "Ratna menemukan passion-nya dalam yoga prenatal setelah pengalaman pribadinya selama kehamilan. Ia berdedikasi untuk membantu ibu hamil merasa nyaman dan siap menghadapi persalinan. Ia juga mengajar Yin Yoga untuk mereka yang mencari relaksasi mendalam.",
    quote: "In stillness, we find strength. In softness, we find power.",
    kelasPerMinggu: 10,
    siswa: 250
  },
  {
    nama: "Mas Ari Wibowo",
    role: "Instructor - Hatha & Meditation",
    sertifikat: "RYT-200, Mindfulness Teacher",
    pengalaman: "5 tahun",
    spesialisasi: ["Hatha Yoga", "Meditation", "Pranayama"],
    bio: "Ari adalah mantan praktisi meditasi Buddhist yang beralih ke yoga untuk melengkapi praktiknya. Kelasnya menekankan pada koneksi pikiran-tubuh dengan banyak elemen meditasi dan pernapasan. Cocok untuk mereka yang mencari ketenangan.",
    quote: "The quieter you become, the more you can hear.",
    kelasPerMinggu: 10,
    siswa: 200
  },
  {
    nama: "Mbak Dian Pertiwi",
    role: "Instructor - Vinyasa & Hot Yoga",
    sertifikat: "RYT-200, Hot Yoga Certified",
    pengalaman: "4 tahun",
    spesialisasi: ["Vinyasa Flow", "Hot Yoga", "Core Yoga"],
    bio: "Dian adalah instruktur termuda di tim kami dengan energi yang menular. Ia membawa pendekatan modern ke yoga dengan playlist yang upbeat dan sequence yang kreatif. Kelasnya perfect untuk yang mencari workout yang fun.",
    quote: "Sweat is just fat crying!",
    kelasPerMinggu: 12,
    siswa: 280
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function InstrukturPage() {
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
              Tim Instruktur Kami
            </h1>
            <p className="text-lg text-gray-600">
              Dipandu oleh instruktur bersertifikat internasional yang berdedikasi untuk perjalanan yoga Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {instruktur.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Photo */}
                  <div className="bg-gradient-to-br from-[#7C9A92]/30 to-[#E8D5B7]/30 flex items-center justify-center p-12">
                    <div className="w-40 h-40 bg-[#7C9A92] rounded-full flex items-center justify-center text-white text-6xl font-heading shadow-lg">
                      {person.nama.split(' ').pop()?.charAt(0)}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-heading font-semibold text-[#3D405B]">{person.nama}</h2>
                        <p className="text-[#7C9A92] font-medium">{person.role}</p>
                      </div>
                      <a href="#" className="text-gray-400 hover:text-[#7C9A92] transition-colors">
                        <Instagram size={24} />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Award size={16} className="text-[#B8860B]" />
                        {person.sertifikat}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock size={16} className="text-[#7C9A92]" />
                        {person.pengalaman} pengalaman
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.spesialisasi.map((s, i) => (
                        <span key={i} className="bg-[#E8D5B7]/50 px-3 py-1 rounded-full text-sm text-[#3D405B]">
                          {s}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 mb-4">{person.bio}</p>

                    <blockquote className="border-l-4 border-[#7C9A92] pl-4 italic text-gray-500 mb-4">
                      &ldquo;{person.quote}&rdquo;
                    </blockquote>

                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-[#7C9A92]" />
                        <span className="text-gray-600">{person.siswa}+ siswa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[#7C9A92]" />
                        <span className="text-gray-600">{person.kelasPerMinggu} kelas/minggu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-semibold text-[#3D405B] mb-4">
            Ingin Bergabung dengan Tim Kami?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Kami selalu mencari instruktur yoga bersertifikat yang passionate untuk bergabung dengan keluarga Serenity Yoga
          </p>
          <Link href="/kontak" className="btn-secondary inline-flex items-center gap-2">
            Kirim Lamaran <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7C9A92]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">
            Siap Belajar dari yang Terbaik?
          </h2>
          <p className="text-white/80 mb-8">
            Coba kelas pertama Anda secara GRATIS
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-8 py-4 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">
            Daftar Trial Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
