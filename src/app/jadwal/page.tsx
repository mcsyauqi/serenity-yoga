'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const jadwalHarian = {
  Senin: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv" },
    { waktu: "06:30", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Hatha Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "18:30", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Selasa: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "18:30", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Rabu: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv" },
    { waktu: "06:30", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Hatha Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "18:30", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Kamis: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "18:30", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Jumat: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv" },
    { waktu: "06:30", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Hatha Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "18:30", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Sabtu: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "09:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "10:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "14:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "16:00", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
  ],
  Minggu: [
    { waktu: "08:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "10:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "14:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "16:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All" },
  ],
};

const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function JadwalPage() {
  const [selectedDay, setSelectedDay] = useState("Senin");

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
              Jadwal Kelas
            </h1>
            <p className="text-lg text-gray-600">
              Pilih waktu yang sesuai dengan jadwal Anda. Kami menyediakan kelas dari pagi hingga malam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {hari.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedDay === day
                    ? 'bg-[#7C9A92] text-white'
                    : 'bg-white text-[#3D405B] hover:bg-[#E8D5B7]/50'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#7C9A92] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Waktu</th>
                    <th className="px-6 py-4 text-left font-medium">Kelas</th>
                    <th className="px-6 py-4 text-left font-medium">Instruktur</th>
                    <th className="px-6 py-4 text-left font-medium">Durasi</th>
                    <th className="px-6 py-4 text-left font-medium">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {jadwalHarian[selectedDay as keyof typeof jadwalHarian].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-[#FAF8F5]/50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-[#7C9A92] font-semibold">
                          <Clock size={16} />
                          {item.waktu}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium text-[#3D405B]">{item.kelas}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-gray-600">
                          <User size={16} />
                          {item.instruktur}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.durasi}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.level === 'All' ? 'bg-green-100 text-green-700' :
                          item.level === 'Int' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.level === 'All' ? 'Semua Level' :
                           item.level === 'Int' ? 'Intermediate' : 'Advanced'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-600">Semua Level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="text-sm text-gray-600">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-sm text-gray-600">Advanced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-[#7C9A92]" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#3D405B] mb-2">Booking Mudah</h3>
              <p className="text-gray-600">Reservasi kelas minimal 2 jam sebelum kelas dimulai melalui WhatsApp atau aplikasi</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-[#7C9A92]" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#3D405B] mb-2">Kelas Kecil</h3>
              <p className="text-gray-600">Maksimal 15 peserta per kelas untuk perhatian personal dari instruktur</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7C9A92]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-[#7C9A92]" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#3D405B] mb-2">Fleksibel</h3>
              <p className="text-gray-600">Batalkan reservasi hingga 4 jam sebelum kelas tanpa penalti</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7C9A92]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">
            Siap Bergabung?
          </h2>
          <p className="text-white/80 mb-8">
            Hubungi kami untuk reservasi atau informasi lebih lanjut
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-8 py-4 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">
            Hubungi Kami <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
