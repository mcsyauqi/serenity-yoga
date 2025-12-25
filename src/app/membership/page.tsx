'use client';

import Link from 'next/link';
import { Check, X, ArrowRight, ChevronDown, Star, Gift, Heart, Shield, Users, Sparkles, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

const membership = [
  {
    nama: "Drop-in",
    harga: "Rp 150.000",
    periode: "/kelas",
    deskripsi: "Cocok untuk mencoba",
    fitur: [
      { nama: "Akses 1 kelas yoga", included: true },
      { nama: "Yoga mat tersedia", included: true },
      { nama: "Akses locker", included: true },
      { nama: "Air mineral gratis", included: true },
      { nama: "Handuk", included: false },
      { nama: "Diskon workshop", included: false },
      { nama: "Guest pass", included: false },
      { nama: "Priority booking", included: false }
    ],
    populer: false,
    highlight: "Tanpa Komitmen"
  },
  {
    nama: "Monthly",
    harga: "Rp 800.000",
    periode: "/bulan",
    deskripsi: "Pilihan terbaik",
    fitur: [
      { nama: "Unlimited kelas yoga", included: true },
      { nama: "Yoga mat premium", included: true },
      { nama: "Locker pribadi", included: true },
      { nama: "Air mineral gratis", included: true },
      { nama: "Handuk gratis", included: true },
      { nama: "Diskon workshop 10%", included: true },
      { nama: "1 Guest pass/bulan", included: true },
      { nama: "Priority booking", included: false }
    ],
    populer: true,
    highlight: "Paling Populer"
  },
  {
    nama: "Annual",
    harga: "Rp 7.200.000",
    periode: "/tahun",
    hargaBulan: "Rp 600.000/bulan",
    deskripsi: "Hemat 25%",
    fitur: [
      { nama: "Unlimited kelas yoga", included: true },
      { nama: "Yoga mat premium", included: true },
      { nama: "Locker permanen", included: true },
      { nama: "Air mineral gratis", included: true },
      { nama: "Handuk & toiletries", included: true },
      { nama: "Free 2 workshop/tahun", included: true },
      { nama: "3 Guest pass/bulan", included: true },
      { nama: "Priority booking", included: true }
    ],
    populer: false,
    highlight: "Best Value"
  }
];

const addOns = [
  { nama: "Private Session (1-on-1)", harga: "Rp 500.000/sesi", icon: Star },
  { nama: "Semi Private (2-3 orang)", harga: "Rp 350.000/orang", icon: Users },
  { nama: "Rental Yoga Mat Premium", harga: "Rp 25.000/kelas", icon: Sparkles },
  { nama: "Extra Guest Pass", harga: "Rp 100.000/pass", icon: Gift },
];

const benefits = [
  { icon: Heart, title: "Kesehatan Optimal", desc: "Praktik rutin untuk tubuh dan pikiran yang sehat" },
  { icon: Users, title: "Komunitas Supportif", desc: "Bergabung dengan komunitas yogi yang positif" },
  { icon: Shield, title: "Instruktur Bersertifikasi", desc: "Bimbingan dari instruktur profesional" },
  { icon: Calendar, title: "Jadwal Fleksibel", desc: "40+ kelas per minggu di berbagai waktu" },
];

const testimonials = [
  { nama: "Anita Wijaya", member: "Member Annual", foto: "A", quote: "Setelah setahun menjadi member, saya merasakan perubahan besar dalam kesehatan dan ketenangan pikiran. Worth every penny!" },
  { nama: "Budi Santoso", member: "Member Monthly", foto: "B", quote: "Instrukturnya ramah dan profesional. Fasilitas studio juga sangat bersih dan nyaman." },
  { nama: "Citra Dewi", member: "Member Annual", foto: "C", quote: "Guest pass bulanan sangat membantu untuk mengajak teman-teman mencoba yoga bersama." },
];

const joinSteps = [
  { step: "1", title: "Pilih Paket", desc: "Tentukan paket membership yang sesuai kebutuhan Anda" },
  { step: "2", title: "Registrasi", desc: "Isi formulir pendaftaran atau hubungi kami via WhatsApp" },
  { step: "3", title: "Pembayaran", desc: "Lakukan pembayaran via transfer atau di studio" },
  { step: "4", title: "Mulai Latihan", desc: "Datang ke studio dan mulai perjalanan yoga Anda!" },
];

const faq = [
  { q: "Apakah saya bisa freeze membership?", a: "Ya, member Monthly dan Annual bisa freeze membership hingga 30 hari per tahun dengan pemberitahuan minimal 7 hari sebelumnya." },
  { q: "Bagaimana cara reservasi kelas?", a: "Reservasi bisa dilakukan melalui WhatsApp, telepon, atau langsung di studio minimal 2 jam sebelum kelas dimulai." },
  { q: "Apakah ada batas kelas per hari?", a: "Tidak ada batasan jumlah kelas per hari untuk member unlimited. Anda bisa mengikuti sebanyak mungkin kelas yang Anda mau." },
  { q: "Apakah membership bisa direfund?", a: "Membership tidak dapat di-refund setelah pembayaran. Namun, Anda bisa transfer ke orang lain dengan biaya admin Rp 100.000." },
  { q: "Apakah ada promo untuk member baru?", a: "Ya! Member baru mendapat 1 kelas gratis dan diskon 10% untuk pendaftaran di bulan pertama." },
  { q: "Bagaimana cara menggunakan guest pass?", a: "Guest pass bisa digunakan untuk mengajak teman/keluarga ikut kelas. Cukup informasikan saat reservasi dan tunjukkan membership card Anda." },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Investasi Terbaik untuk Diri Anda
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-text mb-6">
              Paket <span className="italic text-primary">Membership</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pilih paket yang sesuai dengan gaya hidup Anda dan mulai perjalanan menuju kesehatan dan keseimbangan yang lebih baik
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Member Aktif</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">40+</p>
                <p className="text-sm text-gray-600">Kelas/Minggu</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-gray-600">Kepuasan Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-12 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="text-center text-white">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Pilih Paket Anda</h2>
            <p className="text-gray-600">Semua paket termasuk akses ke fasilitas studio premium kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membership.map((paket, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 ${paket.populer ? 'bg-primary text-white shadow-2xl scale-105' : 'bg-white shadow-lg border border-gray-100'}`}>
                <div className={`text-center py-3 text-sm font-medium ${paket.populer ? 'bg-accent text-white' : 'bg-secondary/50 text-text'}`}>
                  {paket.highlight}
                </div>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className={`font-heading text-2xl font-semibold mb-2 ${paket.populer ? 'text-white' : 'text-text'}`}>
                      {paket.nama}
                    </h3>
                    <div className="mb-2">
                      <span className={`text-4xl font-bold ${paket.populer ? 'text-white' : 'text-primary'}`}>{paket.harga}</span>
                      <span className={`text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.periode}</span>
                    </div>
                    {paket.hargaBulan && <p className="text-sm text-secondary font-medium">{paket.hargaBulan}</p>}
                    <p className={`mt-2 ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.deskripsi}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {paket.fitur.map((fitur, j) => (
                      <li key={j} className="flex items-center gap-3">
                        {fitur.included ? (
                          <Check size={18} className={paket.populer ? 'text-secondary' : 'text-primary'} />
                        ) : (
                          <X size={18} className={paket.populer ? 'text-white/40' : 'text-gray-300'} />
                        )}
                        <span className={fitur.included ? (paket.populer ? 'text-white' : 'text-gray-700') : (paket.populer ? 'text-white/40' : 'text-gray-400')}>
                          {fitur.nama}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontak"
                    className={`block text-center py-4 rounded-full font-medium transition-all ${
                      paket.populer ? 'bg-white text-primary hover:bg-secondary hover:text-text' : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    Pilih {paket.nama}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Cara Bergabung</h2>
            <p className="text-gray-600">4 langkah mudah untuk memulai perjalanan yoga Anda</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {joinSteps.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:bg-accent transition-colors">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Layanan Tambahan</h2>
            <p className="text-gray-600">Tingkatkan pengalaman yoga Anda dengan layanan premium</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {addOns.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-text font-medium mb-2">{item.nama}</p>
                <p className="text-primary font-bold">{item.harga}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Kata Member Kami</h2>
            <p className="text-gray-600">Pengalaman nyata dari komunitas Serenity Yoga</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {item.foto}
                  </div>
                  <div>
                    <p className="font-semibold text-text">{item.nama}</p>
                    <p className="text-sm text-primary">{item.member}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Perbandingan Lengkap</h2>
            <p className="text-gray-600">Lihat detail fitur setiap paket membership</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-medium">Fitur</th>
                  <th className="text-center p-4 font-medium">Drop-in</th>
                  <th className="text-center p-4 font-medium bg-accent">Monthly</th>
                  <th className="text-center p-4 font-medium">Annual</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Akses Kelas</td>
                  <td className="text-center p-4">1 kelas</td>
                  <td className="text-center p-4 bg-primary/5">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Yoga Mat</td>
                  <td className="text-center p-4">Standard</td>
                  <td className="text-center p-4 bg-primary/5">Premium</td>
                  <td className="text-center p-4">Premium</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Locker</td>
                  <td className="text-center p-4">Shared</td>
                  <td className="text-center p-4 bg-primary/5">Pribadi</td>
                  <td className="text-center p-4">Permanen</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Handuk</td>
                  <td className="text-center p-4"><X size={18} className="text-gray-300 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><Check size={18} className="text-primary mx-auto" /></td>
                  <td className="text-center p-4"><Check size={18} className="text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Diskon Workshop</td>
                  <td className="text-center p-4"><X size={18} className="text-gray-300 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5">10%</td>
                  <td className="text-center p-4">2 Free/tahun</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Guest Pass</td>
                  <td className="text-center p-4"><X size={18} className="text-gray-300 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5">1/bulan</td>
                  <td className="text-center p-4">3/bulan</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Priority Booking</td>
                  <td className="text-center p-4"><X size={18} className="text-gray-300 mx-auto" /></td>
                  <td className="text-center p-4 bg-primary/5"><X size={18} className="text-gray-300 mx-auto" /></td>
                  <td className="text-center p-4"><Check size={18} className="text-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600">Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-background rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors"
                >
                  <span className="font-medium text-text">{item.q}</span>
                  <ChevronDown size={20} className={`text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Gift className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-semibold text-white mb-4">Masih Ragu?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Coba 1 kelas GRATIS sebelum memutuskan. Tidak ada komitmen, tidak ada tekanan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              Daftar Trial Class Gratis <ArrowRight size={20} />
            </Link>
            <Link
              href="/jadwal"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <Clock size={20} /> Lihat Jadwal Kelas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
