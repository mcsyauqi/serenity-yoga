'use client';

import Link from 'next/link';
import { Clock, User, ArrowRight, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

const jadwalHarian: Record<string, Array<{ waktu: string; kelas: string; instruktur: string; durasi: string; level: string }>> = {
  Senin: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Hatha Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Selasa: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "10:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
  ],
  Rabu: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
  ],
  Kamis: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "10:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
  ],
  Jumat: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All" },
  ],
  Sabtu: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "09:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
    { waktu: "10:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "14:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int" },
    { waktu: "16:00", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All" },
  ],
  Minggu: [
    { waktu: "08:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All" },
    { waktu: "10:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All" },
    { waktu: "14:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int" },
    { waktu: "16:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All" },
  ],
};

const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function JadwalPage() {
  const [selectedDay, setSelectedDay] = useState("Senin");

  return (
    <main className="pt-16">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-text mb-3">Jadwal Kelas</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Pilih waktu yang sesuai dengan jadwal Anda</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {hari.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDay === day ? 'bg-primary text-white' : 'bg-white text-text hover:bg-secondary/50'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Waktu</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Kelas</th>
                    <th className="px-4 py-3 text-left text-sm font-medium hidden sm:table-cell">Instruktur</th>
                    <th className="px-4 py-3 text-left text-sm font-medium hidden md:table-cell">Durasi</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {jadwalHarian[selectedDay].map((item, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-background/50 transition-colors">
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1 text-primary font-semibold text-sm">
                          <Clock size={14} />{item.waktu}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-text text-sm">{item.kelas}</td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="flex items-center gap-1 text-gray-600 text-sm">
                          <User size={14} />{item.instruktur}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">{item.durasi}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          item.level === 'All' ? 'bg-green-100 text-green-700' :
                          item.level === 'Int' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.level === 'All' ? 'Semua' : item.level === 'Int' ? 'Menengah' : 'Lanjutan'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-600">Semua Level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="text-gray-600">Menengah</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-gray-600">Lanjutan</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">Booking Mudah</h3>
              <p className="text-gray-600 text-sm">Reservasi minimal 2 jam sebelum kelas via WhatsApp</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">Kelas Kecil</h3>
              <p className="text-gray-600 text-sm">Maksimal 15 peserta untuk perhatian personal</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-2">Fleksibel</h3>
              <p className="text-gray-600 text-sm">Batalkan hingga 4 jam sebelum tanpa penalti</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">Siap Bergabung?</h2>
          <p className="text-white/80 mb-6">Hubungi kami untuk reservasi atau informasi lebih lanjut</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
            Hubungi Kami <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
