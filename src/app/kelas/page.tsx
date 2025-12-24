'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, ArrowRight, Check } from 'lucide-react';

const kelasYoga = [
  { nama: "Hatha Yoga", deskripsi: "Yoga klasik yang sempurna untuk pemula. Fokus pada postur dasar (asana), teknik pernapasan (pranayama), dan relaksasi.", durasi: "60 menit", level: "Semua level", icon: "🧘", manfaat: ["Meningkatkan fleksibilitas", "Memperbaiki postur tubuh", "Mengurangi stress", "Meningkatkan keseimbangan"], jadwal: "Setiap hari 07:00, 10:00, 17:00" },
  { nama: "Vinyasa Flow", deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas dalam aliran yang mengalir. Membangun kekuatan, fleksibilitas, dan stamina.", durasi: "75 menit", level: "Intermediate", icon: "🌊", manfaat: ["Meningkatkan kardio", "Membakar kalori", "Membangun kekuatan", "Meningkatkan fokus"], jadwal: "Senin-Jumat 08:00, 18:30" },
  { nama: "Yin Yoga", deskripsi: "Praktik yoga yang lambat dan meditatif dengan postur yang ditahan selama 3-5 menit untuk relaksasi mendalam.", durasi: "60 menit", level: "Semua level", icon: "🌙", manfaat: ["Deep relaxation", "Meningkatkan fleksibilitas", "Mengurangi kecemasan", "Memperbaiki kualitas tidur"], jadwal: "Selasa, Kamis 19:30, Sabtu 16:00" },
  { nama: "Power Yoga", deskripsi: "Yoga intensif yang terinspirasi dari Ashtanga. Fokus pada membangun kekuatan otot, daya tahan, dan fleksibilitas.", durasi: "60 menit", level: "Intermediate-Advanced", icon: "💪", manfaat: ["Membangun otot", "Meningkatkan daya tahan", "Membakar lemak", "Meningkatkan kepercayaan diri"], jadwal: "Senin, Rabu, Jumat 06:30, 18:00" },
  { nama: "Prenatal Yoga", deskripsi: "Yoga yang dirancang khusus untuk ibu hamil. Fokus pada postur yang aman dan teknik pernapasan untuk persalinan.", durasi: "60 menit", level: "Semua trimester", icon: "🤰", manfaat: ["Mengurangi nyeri punggung", "Mempersiapkan persalinan", "Meningkatkan kualitas tidur", "Mengurangi stress kehamilan"], jadwal: "Selasa, Kamis 10:00, Sabtu 09:00" },
  { nama: "Meditation Class", deskripsi: "Kelas meditasi terpandu untuk menenangkan pikiran. Termasuk teknik pernapasan, body scan, dan visualisasi.", durasi: "45 menit", level: "Semua level", icon: "🕯️", manfaat: ["Mengurangi kecemasan", "Meningkatkan fokus", "Memperbaiki kualitas tidur", "Meningkatkan kesejahteraan"], jadwal: "Setiap hari 12:00, 20:00" },
  { nama: "Ashtanga Yoga", deskripsi: "Sistem yoga tradisional dengan sequence postur yang tetap. Praktik yang disiplin untuk membangun kekuatan dan fokus mental.", durasi: "90 menit", level: "Intermediate-Advanced", icon: "🔥", manfaat: ["Meningkatkan disiplin", "Membangun kekuatan", "Detoksifikasi tubuh", "Meningkatkan stamina"], jadwal: "Senin, Rabu, Jumat 06:00" },
  { nama: "Restorative Yoga", deskripsi: "Yoga yang sangat gentle dengan prop untuk support penuh. Setiap postur ditahan lama untuk relaksasi mendalam.", durasi: "75 menit", level: "Semua level", icon: "🌿", manfaat: ["Deep relaxation", "Recovery otot", "Menyeimbangkan sistem saraf", "Mengurangi fatigue"], jadwal: "Minggu 10:00, 16:00" }
];

export default function KelasPage() {
  return (
    <div>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#3D405B] mb-4">Kelas Yoga Kami</h1>
            <p className="text-gray-600">Temukan kelas yang sesuai dengan kebutuhan dan level Anda. Dari pemula hingga advanced.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {kelasYoga.map((kelas, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="grid lg:grid-cols-3">
                  <div className="p-5 lg:p-6 lg:col-span-2">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-4xl">{kelas.icon}</span>
                      <div>
                        <h2 className="text-xl font-heading font-semibold text-[#3D405B]">{kelas.nama}</h2>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="flex items-center gap-1 text-[#7C9A92] text-sm"><Clock size={14} /> {kelas.durasi}</span>
                          <span className="bg-[#E8D5B7]/50 px-2.5 py-0.5 rounded-full text-[#3D405B] text-xs">{kelas.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{kelas.deskripsi}</p>
                    <p className="text-sm text-[#7C9A92] font-medium flex items-center gap-1"><Users size={14} /> Jadwal: {kelas.jadwal}</p>
                  </div>
                  <div className="bg-[#FAF8F5] p-5 lg:p-6">
                    <h4 className="font-semibold text-[#3D405B] text-sm mb-2">Manfaat:</h4>
                    <ul className="space-y-1.5">
                      {kelas.manfaat.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm"><Check size={14} className="text-[#7C9A92] shrink-0" />{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#7C9A92]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-3">Siap Memulai Perjalanan Yoga Anda?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">Coba kelas pertama Anda secara GRATIS dan rasakan perbedaannya</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-6 py-3 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">Daftar Trial Class <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
