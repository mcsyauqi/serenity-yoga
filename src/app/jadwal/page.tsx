'use client';

import Link from 'next/link';
import { Clock, User, ArrowRight, Calendar, Users, MapPin, Phone, CheckCircle, Info } from 'lucide-react';
import { useState } from 'react';

const jadwalHarian: Record<string, Array<{ waktu: string; kelas: string; instruktur: string; durasi: string; level: string; studio: string }>> = {
  Senin: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv", studio: "Studio A" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "10:00", kelas: "Hatha Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int", studio: "Studio A" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
  ],
  Selasa: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "10:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "18:30", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
  ],
  Rabu: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv", studio: "Studio A" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "10:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All", studio: "Studio C" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int", studio: "Studio A" },
    { waktu: "19:30", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
  ],
  Kamis: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "10:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
    { waktu: "17:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "18:30", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int", studio: "Studio A" },
    { waktu: "19:30", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
  ],
  Jumat: [
    { waktu: "06:00", kelas: "Ashtanga Yoga", instruktur: "Mas Yoga", durasi: "90 min", level: "Adv", studio: "Studio A" },
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "10:00", kelas: "Hatha Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "12:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
    { waktu: "18:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int", studio: "Studio A" },
    { waktu: "20:00", kelas: "Meditation", instruktur: "Ibu Made Dewi", durasi: "45 min", level: "All", studio: "Studio C" },
  ],
  Sabtu: [
    { waktu: "07:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "08:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "09:00", kelas: "Prenatal Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
    { waktu: "10:00", kelas: "Power Yoga", instruktur: "Mas Yoga", durasi: "60 min", level: "Int", studio: "Studio A" },
    { waktu: "14:00", kelas: "Hatha Yoga", instruktur: "Mbak Sarah", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "16:00", kelas: "Yin Yoga", instruktur: "Ibu Ratna", durasi: "60 min", level: "All", studio: "Studio C" },
  ],
  Minggu: [
    { waktu: "08:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "09:00", kelas: "Vinyasa Flow", instruktur: "Mbak Sarah", durasi: "75 min", level: "Int", studio: "Studio A" },
    { waktu: "10:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All", studio: "Studio C" },
    { waktu: "14:00", kelas: "Hatha Yoga", instruktur: "Ibu Made Dewi", durasi: "60 min", level: "All", studio: "Studio B" },
    { waktu: "16:00", kelas: "Restorative Yoga", instruktur: "Ibu Ratna", durasi: "75 min", level: "All", studio: "Studio C" },
  ],
};

const hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

const studios = [
  { nama: "Studio A", kapasitas: "20 orang", ukuran: "100 m²", fasilitas: ["AC", "Mirror Wall", "Sound System", "Natural Light"], cocok: "Power Yoga, Vinyasa, Ashtanga" },
  { nama: "Studio B", kapasitas: "15 orang", ukuran: "80 m²", fasilitas: ["AC", "Mirror Wall", "Sound System"], cocok: "Hatha Yoga, Gentle Classes" },
  { nama: "Studio C", kapasitas: "12 orang", ukuran: "60 m²", fasilitas: ["AC", "Dim Lighting", "Aromatherapy"], cocok: "Yin, Restorative, Meditation, Prenatal" },
];

export default function JadwalPage() {
  const [selectedDay, setSelectedDay] = useState("Senin");

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Jadwal Kelas</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-text mb-6">
              Pilih Waktu yang <span className="text-primary italic">Tepat</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Lebih dari 50 kelas setiap minggu dengan jadwal fleksibel dari pagi hingga malam.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock size={18} className="text-primary" />
                <span className="text-text">06:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Calendar size={18} className="text-primary" />
                <span className="text-text">7 Hari Seminggu</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users size={18} className="text-primary" />
                <span className="text-text">50+ Kelas/Minggu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Jadwal Mingguan</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">Pilih Hari</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {hari.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedDay === day ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-white text-text hover:bg-secondary/50'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Waktu</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Kelas</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden sm:table-cell">Instruktur</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Studio</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold hidden lg:table-cell">Durasi</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {jadwalHarian[selectedDay].map((item, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-background/50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-primary font-bold">
                          <Clock size={16} />{item.waktu}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-text">{item.kelas}</p>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <span className="flex items-center gap-2 text-gray-600">
                          <User size={14} />{item.instruktur}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{item.studio}</td>
                      <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">{item.durasi}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.level === 'All' ? 'bg-green-100 text-green-700' :
                          item.level === 'Int' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.level === 'All' ? 'Semua Level' : item.level === 'Int' ? 'Menengah' : 'Lanjutan'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-gray-600">Semua Level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="text-gray-600">Menengah</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-gray-600">Lanjutan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Studios */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Fasilitas</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">3 Studio Yoga</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Setiap studio dirancang khusus untuk jenis kelas tertentu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studios.map((studio, i) => (
              <div key={i} className="bg-background rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                  <span className="text-5xl">🧘‍♀️</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-text mb-2">{studio.nama}</h3>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> {studio.kapasitas}</span>
                    <span>{studio.ukuran}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {studio.fasilitas.map((f, j) => (
                      <span key={j} className="bg-white px-2 py-1 rounded text-xs text-text">{f}</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-medium text-text">Cocok untuk:</span> {studio.cocok}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Cara Booking</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">Reservasi Kelas</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">Pilih Kelas</h3>
              <p className="text-gray-600 text-sm">Lihat jadwal dan pilih kelas yang sesuai dengan waktu Anda</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">Hubungi Kami</h3>
              <p className="text-gray-600 text-sm">Reservasi via WhatsApp atau telepon minimal 2 jam sebelum kelas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">Konfirmasi</h3>
              <p className="text-gray-600 text-sm">Terima konfirmasi booking dan reminder sebelum kelas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-heading text-lg font-semibold text-text mb-2">Datang & Nikmati</h3>
              <p className="text-gray-600 text-sm">Datang 15 menit sebelum kelas untuk persiapan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Kebijakan</p>
              <h2 className="font-heading text-4xl font-semibold text-text mb-8">Ketentuan Reservasi</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-text">Reservasi Minimal 2 Jam Sebelum</p>
                    <p className="text-gray-600 text-sm">Untuk memastikan ketersediaan tempat di kelas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-text">Pembatalan 4 Jam Sebelum</p>
                    <p className="text-gray-600 text-sm">Batalkan tanpa penalti hingga 4 jam sebelum kelas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-text">Datang 15 Menit Sebelum</p>
                    <p className="text-gray-600 text-sm">Untuk registrasi dan persiapan sebelum kelas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Info size={24} className="text-accent shrink-0" />
                  <div>
                    <p className="font-semibold text-text">Late Policy</p>
                    <p className="text-gray-600 text-sm">Keterlambatan lebih dari 10 menit tidak dapat mengikuti kelas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-text mb-6">Kontak Reservasi</h3>
              <div className="space-y-4">
                <a href="https://wa.me/6281234567890" className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">WhatsApp</p>
                    <p className="text-primary">+62 812-3456-7890</p>
                  </div>
                </a>
                <a href="tel:02112345678" className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Telepon</p>
                    <p className="text-primary">(021) 1234-5678</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Walk-in</p>
                    <p className="text-gray-600 text-sm">Langsung ke studio (subject to availability)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">Siap Booking Kelas?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Hubungi kami sekarang untuk reservasi atau daftar trial class gratis</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all">
              Hubungi Kami <ArrowRight size={18} />
            </Link>
            <Link href="/kelas" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Lihat Jenis Kelas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
