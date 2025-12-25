'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle, Send, Car, Train, ChevronDown, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useState } from 'react';

const studioGallery = [
  { name: "Reception Area", desc: "Area penyambutan yang nyaman" },
  { name: "Studio A", desc: "Studio utama 150m²" },
  { name: "Studio B", desc: "Studio intimate 80m²" },
  { name: "Studio C", desc: "Studio prenatal 60m²" },
  { name: "Locker Room", desc: "Fasilitas lengkap" },
  { name: "Relaxation Lounge", desc: "Ruang santai member" },
];

const facilities = [
  "3 studio yoga ber-AC",
  "Locker room pria & wanita",
  "Shower dengan air panas",
  "Yoga mat & props premium",
  "Air mineral gratis",
  "Relaxation lounge",
  "Free WiFi",
  "Parking area",
];

const accessInfo = [
  { icon: Car, title: "Parkir Mobil", desc: "Tersedia basement parking untuk 50 mobil dengan tarif Rp 5.000/jam. Free parking untuk member Annual." },
  { icon: Train, title: "Transportasi Umum", desc: "10 menit jalan kaki dari Stasiun MRT Senayan. Halte TransJakarta Polda Metro Jaya tersedia di depan gedung." },
];

const faq = [
  { q: "Apakah perlu reservasi sebelum datang?", a: "Ya, untuk memastikan slot tersedia, kami menyarankan reservasi minimal 2 jam sebelum kelas dimulai melalui WhatsApp atau telepon." },
  { q: "Apakah tersedia yoga mat untuk pemula?", a: "Ya, kami menyediakan yoga mat gratis untuk semua peserta. Member premium mendapat akses ke mat berkualitas tinggi." },
  { q: "Bagaimana cara mendaftar trial class gratis?", a: "Cukup hubungi kami via WhatsApp atau isi form di halaman ini. Kami akan membantu menjadwalkan trial class pertama Anda." },
  { q: "Apakah ada kelas untuk pemula absolut?", a: "Ya! Kami punya kelas Gentle Yoga dan Basic Flow yang dirancang khusus untuk pemula. Instruktur akan memberikan modifikasi untuk setiap pose." },
  { q: "Berapa lama durasi satu kelas?", a: "Durasi kelas bervariasi: 60 menit untuk kelas regular, 75 menit untuk Vinyasa/Power Yoga, dan 90 menit untuk workshop khusus." },
  { q: "Apakah bisa datang tanpa pengalaman yoga?", a: "Tentu saja! Sebagian besar member kami memulai dari nol. Tim kami akan membantu Anda merasa nyaman dari kelas pertama." },
];

const quickLinks = [
  { title: "Lihat Jadwal Kelas", href: "/jadwal", desc: "Cek jadwal kelas hari ini" },
  { title: "Paket Membership", href: "/membership", desc: "Pilih paket yang tepat" },
  { title: "Workshop Mendatang", href: "/workshop", desc: "Event dan workshop spesial" },
  { title: "Kenali Instruktur", href: "/instruktur", desc: "Tim instruktur kami" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ nama: '', email: '', telepon: '', subjek: 'Trial Class', pesan: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo Serenity Yoga!%0A%0ANama: ${formData.nama}%0AEmail: ${formData.email}%0ATelepon: ${formData.telepon}%0ASubjek: ${formData.subjek}%0A%0APesan:%0A${formData.pesan}`;
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank');
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Kami Siap Membantu
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-text mb-6">
              Hubungi <span className="italic text-primary">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Punya pertanyaan atau ingin memulai perjalanan yoga Anda? Tim kami siap membantu Anda dengan senang hati
            </p>

            {/* Quick Contact */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} /> Chat WhatsApp
              </a>
              <a
                href="tel:02112345678"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                <Phone size={20} /> (021) 1234-5678
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-heading text-2xl font-semibold text-text mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-6">Isi form di bawah dan kami akan menghubungi Anda segera</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon *</label>
                    <input
                      type="tel"
                      required
                      value={formData.telepon}
                      onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <select
                    value={formData.subjek}
                    onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  >
                    <option value="Trial Class">Daftar Trial Class Gratis</option>
                    <option value="Membership">Informasi Membership</option>
                    <option value="Workshop">Workshop & Event</option>
                    <option value="Private Session">Private Session</option>
                    <option value="Corporate">Corporate Wellness</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tulis pesan atau pertanyaan Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-full font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />Kirim via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-heading text-2xl font-semibold text-text mb-6">Kontak Langsung</h2>
                <div className="space-y-4">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text">WhatsApp (Recommended)</p>
                      <p className="text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </a>
                  <a href="tel:02112345678" className="flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-secondary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text">Telepon</p>
                      <p className="text-gray-600">(021) 1234-5678</p>
                    </div>
                  </a>
                  <a href="mailto:hello@serenityyoga.id" className="flex items-center gap-4 p-4 bg-background rounded-xl hover:bg-secondary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-text">Email</p>
                      <p className="text-gray-600">hello@serenityyoga.id</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-heading text-2xl font-semibold text-text mb-6">Lokasi Studio</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text">Alamat</p>
                      <p className="text-gray-600">Jl. Senopati No. 123, Lantai 2<br />Kebayoran Baru, Jakarta Selatan 12190</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-text">Jam Operasional</p>
                      <p className="text-gray-600">
                        Senin - Jumat: 06:00 - 21:00<br />
                        Sabtu: 07:00 - 18:00<br />
                        Minggu: 08:00 - 16:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-heading text-2xl font-semibold text-text mb-6">Ikuti Kami</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Instagram size={28} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Facebook size={28} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Youtube size={28} />
                  </a>
                </div>
                <p className="mt-4 text-gray-600">Follow @serenityyoga.id untuk tips yoga harian, behind the scenes, dan promo eksklusif!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Access */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Lokasi & Akses</h2>
            <p className="text-gray-600">Mudah dijangkau dengan kendaraan pribadi maupun transportasi umum</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Google Maps</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium mt-2 hover:underline"
                >
                  Buka di Google Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Access Info */}
            <div className="space-y-6">
              {accessInfo.map((info, i) => (
                <div key={i} className="bg-background rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-text mb-2">{info.title}</h3>
                      <p className="text-gray-600">{info.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Fasilitas Studio</h2>
            <p className="text-gray-600">Ruang yang nyaman dan peralatan berkualitas untuk praktik yoga Anda</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {studioGallery.map((item, i) => (
              <div key={i} className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center group hover:bg-primary/20 transition-colors">
                <div className="text-center">
                  <Sparkles size={32} className="text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                  <p className="font-semibold text-gray-600 group-hover:text-primary transition-colors">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-text mb-4 text-center">Fasilitas Lengkap</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.map((facility, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {facility}
                </div>
              ))}
            </div>
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

      {/* Quick Links */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-semibold text-text mb-4">Jelajahi Lebih Lanjut</h2>
            <p className="text-gray-600">Temukan informasi yang Anda butuhkan</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <h3 className="font-heading text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                  Lihat <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="font-heading text-4xl font-semibold text-white mb-4">Siap Memulai Perjalanan Yoga Anda?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Daftar trial class gratis hari ini dan rasakan manfaat yoga bersama komunitas Serenity Yoga
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mendaftar%20trial%20class%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              <MessageCircle size={20} /> Daftar via WhatsApp
            </a>
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
