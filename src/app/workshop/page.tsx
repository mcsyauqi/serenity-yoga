'use client';

import Link from 'next/link';
import { Calendar, Clock, User, MapPin, ArrowRight, Users, Star, BookOpen, Award, Heart, Sparkles, ChevronRight, Mail } from 'lucide-react';
import { useState } from 'react';

const workshops = [
  {
    judul: "Introduction to Arm Balances",
    deskripsi: "Pelajari dasar-dasar arm balance seperti Crow Pose dan Side Crow dengan teknik yang aman dan progresif.",
    tanggal: "18 Januari 2025",
    waktu: "09:00 - 12:00",
    instruktur: "Mas Yoga",
    lokasi: "Studio A",
    harga: "Rp 350.000",
    hargaMember: "Rp 315.000",
    kapasitas: 20,
    tersedia: 8,
    level: "Intermediate",
    highlights: ["Teknik dasar arm balance", "Strengthening exercises", "Pose progression"]
  },
  {
    judul: "Yoga for Stress Relief",
    deskripsi: "Workshop untuk mengelola stress melalui yoga, pranayama, dan meditasi untuk keseimbangan mental.",
    tanggal: "25 Januari 2025",
    waktu: "14:00 - 17:00",
    instruktur: "Ibu Made Dewi",
    lokasi: "Studio B",
    harga: "Rp 300.000",
    hargaMember: "Rp 270.000",
    kapasitas: 25,
    tersedia: 12,
    level: "Semua Level",
    highlights: ["Restorative poses", "Breathing techniques", "Guided meditation"]
  },
  {
    judul: "Prenatal Yoga Intensive",
    deskripsi: "Workshop lengkap untuk ibu hamil tentang yoga dan pernapasan untuk persalinan yang lebih nyaman.",
    tanggal: "1 Februari 2025",
    waktu: "10:00 - 14:00",
    instruktur: "Ibu Ratna",
    lokasi: "Studio C",
    harga: "Rp 400.000",
    hargaMember: "Rp 360.000",
    kapasitas: 15,
    tersedia: 5,
    level: "Ibu Hamil",
    highlights: ["Safe pregnancy poses", "Labor breathing", "Partner exercises"]
  },
  {
    judul: "Backbends & Heart Openers",
    deskripsi: "Eksplorasi backbend dengan aman mulai dari Cobra hingga Wheel Pose dengan alignment yang tepat.",
    tanggal: "8 Februari 2025",
    waktu: "09:00 - 12:00",
    instruktur: "Mbak Sarah",
    lokasi: "Studio A",
    harga: "Rp 350.000",
    hargaMember: "Rp 315.000",
    kapasitas: 20,
    tersedia: 15,
    level: "Intermediate",
    highlights: ["Spine preparation", "Proper alignment", "Advanced variations"]
  },
  {
    judul: "Meditation Retreat",
    deskripsi: "Mini retreat sehari penuh dengan berbagai teknik meditasi dan yoga nidra untuk relaksasi mendalam.",
    tanggal: "15 Februari 2025",
    waktu: "08:00 - 16:00",
    instruktur: "Ibu Made Dewi",
    lokasi: "Full Studio",
    harga: "Rp 750.000",
    hargaMember: "Rp 675.000",
    kapasitas: 30,
    tersedia: 18,
    level: "Semua Level",
    highlights: ["Multiple meditation styles", "Yoga nidra session", "Healthy lunch included"]
  },
  {
    judul: "Inversions 101",
    deskripsi: "Belajar headstand dan shoulderstand dengan aman melalui teknik persiapan dan wall practice.",
    tanggal: "22 Februari 2025",
    waktu: "09:00 - 12:00",
    instruktur: "Mas Yoga",
    lokasi: "Studio A",
    harga: "Rp 350.000",
    hargaMember: "Rp 315.000",
    kapasitas: 18,
    tersedia: 10,
    level: "Advanced",
    highlights: ["Core strengthening", "Wall practice", "Spotter techniques"]
  }
];

const pastWorkshops = [
  { judul: "Hip Opening Deep Dive", instruktur: "Mbak Sarah", peserta: 22, rating: 4.9 },
  { judul: "Yoga Philosophy & Sutras", instruktur: "Ibu Made Dewi", peserta: 18, rating: 4.8 },
  { judul: "Partner Yoga for Couples", instruktur: "Mas Yoga", peserta: 24, rating: 4.9 },
  { judul: "Kids Yoga Teacher Training", instruktur: "Ibu Ratna", peserta: 15, rating: 5.0 },
];

const benefits = [
  { icon: BookOpen, title: "Pembelajaran Mendalam", desc: "Fokus intensif pada satu topik dengan waktu yang cukup untuk praktik dan tanya jawab" },
  { icon: Users, title: "Kelompok Kecil", desc: "Perhatian personal dari instruktur dengan rasio peserta yang terbatas" },
  { icon: Award, title: "Sertifikat Partisipasi", desc: "Dapatkan sertifikat digital untuk setiap workshop yang Anda ikuti" },
  { icon: Sparkles, title: "Skill Baru", desc: "Teknik dan pemahaman baru untuk memperkaya praktik yoga mandiri Anda" },
];

const corporateFeatures = [
  "Customized untuk kebutuhan perusahaan",
  "Pilihan durasi fleksibel (1-3 jam)",
  "Dapat dilakukan di lokasi perusahaan",
  "Materi disesuaikan (stress relief, posture, dll)",
  "Kapasitas hingga 50 peserta",
  "Termasuk yoga mat & props",
];

const instructorHighlights = [
  { nama: "Mas Yoga Pratama", spesialisasi: "Arm Balances & Inversions", workshops: 25 },
  { nama: "Ibu Made Dewi", spesialisasi: "Meditation & Pranayama", workshops: 32 },
  { nama: "Mbak Sarah Wijaya", spesialisasi: "Backbends & Flexibility", workshops: 18 },
  { nama: "Ibu Ratna Sari", spesialisasi: "Prenatal & Kids Yoga", workshops: 22 },
];

export default function WorkshopPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('Semua');
  const levels = ['Semua', 'Semua Level', 'Intermediate', 'Advanced', 'Ibu Hamil'];

  const filteredWorkshops = selectedLevel === 'Semua'
    ? workshops
    : workshops.filter(w => w.level === selectedLevel);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                Perdalam Praktik Anda
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-text mb-6">
                Workshop & <span className="italic text-primary">Event</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Eksplorasi lebih dalam aspek yoga yang spesifik dengan panduan langsung dari instruktur berpengalaman
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-xl px-6 py-4 shadow-sm">
                  <p className="text-3xl font-bold text-primary">6</p>
                  <p className="text-sm text-gray-600">Workshop Mendatang</p>
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow-sm">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-gray-600">Workshop Selesai</p>
                </div>
                <div className="bg-white rounded-xl px-6 py-4 shadow-sm">
                  <p className="text-3xl font-bold text-primary">4.9</p>
                  <p className="text-sm text-gray-600">Rating Rata-rata</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Hot!</span>
                  <span className="text-gray-500 text-sm">Sisa 5 slot</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-text mb-2">Prenatal Yoga Intensive</h3>
                <p className="text-gray-600 mb-4">Workshop spesial untuk ibu hamil</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" />1 Februari 2025</div>
                  <div className="flex items-center gap-2"><Clock size={16} className="text-primary" />10:00 - 14:00</div>
                  <div className="flex items-center gap-2"><User size={16} className="text-primary" />Ibu Ratna Sari</div>
                </div>
                <Link href="/kontak" className="block text-center bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                  Daftar Sekarang
                </Link>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-bold text-text">Hemat</p>
                  <p className="text-lg font-bold text-primary">10%</p>
                  <p className="text-xs text-gray-600">Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center text-white">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop List */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Workshop Mendatang</h2>
            <p className="text-gray-600 mb-8">Pilih workshop yang sesuai dengan minat dan level Anda</p>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedLevel === level
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-secondary/50'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((w, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/40 relative flex items-center justify-center">
                  <span className="text-5xl">🧘</span>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${w.tersedia < 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {w.tersedia < 10 ? `Sisa ${w.tersedia}` : 'Tersedia'}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-text">{w.level}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-text mb-2">{w.judul}</h3>
                  <p className="text-gray-600 text-sm mb-4">{w.deskripsi}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {w.highlights.map((h, j) => (
                      <span key={j} className="bg-secondary/30 text-text text-xs px-2 py-1 rounded">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-primary" />{w.tanggal}</div>
                    <div className="flex items-center gap-2"><Clock size={14} className="text-primary" />{w.waktu}</div>
                    <div className="flex items-center gap-2"><User size={14} className="text-primary" />{w.instruktur}</div>
                    <div className="flex items-center gap-2"><MapPin size={14} className="text-primary" />{w.lokasi}</div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-primary font-bold">{w.harga}</p>
                        <p className="text-xs text-gray-500">Member: {w.hargaMember}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users size={14} />{w.tersedia}/{w.kapasitas} slot
                      </div>
                    </div>
                    <Link href="/kontak" className="block text-center bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Instruktur Workshop</h2>
            <p className="text-gray-600">Belajar langsung dari praktisi yoga berpengalaman</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {instructorHighlights.map((instructor, i) => (
              <div key={i} className="bg-background rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-semibold">
                  {instructor.nama.split(' ')[1]?.[0] || instructor.nama[0]}
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-1">{instructor.nama}</h3>
                <p className="text-primary text-sm mb-2">{instructor.spesialisasi}</p>
                <p className="text-gray-500 text-sm">{instructor.workshops} workshop selesai</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Workshop Sebelumnya</h2>
            <p className="text-gray-600">Lihat apa yang sudah kami selenggarakan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastWorkshops.map((w, i) => (
              <div key={i} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className={j < Math.floor(w.rating) ? "fill-accent text-accent" : "text-gray-300"} />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{w.rating}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-2">{w.judul}</h3>
                <p className="text-gray-600 text-sm mb-1">oleh {w.instruktur}</p>
                <p className="text-primary text-sm">{w.peserta} peserta</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Tidak menemukan topik yang Anda cari?{' '}
              <Link href="/kontak" className="text-primary font-medium hover:underline">
                Request workshop baru
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Workshop */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                Untuk Perusahaan
              </span>
              <h2 className="font-heading text-4xl font-semibold text-text mb-6">
                Corporate <span className="italic text-primary">Wellness</span> Program
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Tingkatkan kesejahteraan karyawan Anda dengan program yoga khusus untuk perusahaan. Kami menyediakan workshop yang dapat disesuaikan dengan kebutuhan dan jadwal tim Anda.
              </p>
              <ul className="space-y-3 mb-8">
                {corporateFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <ChevronRight size={18} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Konsultasi Gratis <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-text mb-6">Paket Corporate</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-text mb-1">Basic Package</h4>
                  <p className="text-gray-600 text-sm mb-2">1 sesi/minggu, max 20 peserta</p>
                  <p className="text-primary font-bold">Mulai Rp 2.500.000/bulan</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-primary">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-text">Standard Package</h4>
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded">Populer</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">2 sesi/minggu, max 30 peserta</p>
                  <p className="text-primary font-bold">Mulai Rp 4.500.000/bulan</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-text mb-1">Premium Package</h4>
                  <p className="text-gray-600 text-sm mb-2">Custom schedule, unlimited peserta</p>
                  <p className="text-primary font-bold">Custom Pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Jangan Lewatkan Workshop Terbaru</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Daftarkan email Anda untuk mendapatkan notifikasi workshop baru dan promo eksklusif
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="email@contoh.com"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-semibold text-white mb-4">Ingin Workshop Khusus?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tidak menemukan topik yang Anda cari? Hubungi kami untuk request workshop atau private session dengan instruktur pilihan Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              Hubungi Kami <ArrowRight size={20} />
            </Link>
            <Link
              href="/instruktur"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Lihat Instruktur <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
