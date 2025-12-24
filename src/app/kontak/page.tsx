'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: 'Trial Class',
    pesan: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const waMessage = `Halo Serenity Yoga!%0A%0ANama: ${formData.nama}%0AEmail: ${formData.email}%0ATelepon: ${formData.telepon}%0ASubjek: ${formData.subjek}%0A%0APesan:%0A${formData.pesan}`;
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank');
  };

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
              Hubungi Kami
            </h1>
            <p className="text-lg text-gray-600">
              Punya pertanyaan atau ingin mendaftar trial class? Kami siap membantu Anda memulai perjalanan yoga.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-heading font-semibold text-[#3D405B] mb-6">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent transition-all"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      No. Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telepon}
                      onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent transition-all"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select
                    value={formData.subjek}
                    onChange={(e) => setFormData({ ...formData, subjek: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent transition-all bg-white"
                  >
                    <option value="Trial Class">Daftar Trial Class</option>
                    <option value="Membership">Informasi Membership</option>
                    <option value="Workshop">Workshop & Event</option>
                    <option value="Private Session">Private Session</option>
                    <option value="Corporate">Corporate Yoga</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#7C9A92] text-white py-4 rounded-full font-semibold hover:bg-[#6a8880] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Kirim via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-heading font-semibold text-[#3D405B] mb-6">
                  Kontak Langsung
                </h2>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D405B]">WhatsApp</p>
                      <p className="text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </a>

                  <a
                    href="tel:02112345678"
                    className="flex items-center gap-4 p-4 bg-[#FAF8F5] rounded-xl hover:bg-[#E8D5B7]/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#7C9A92] rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D405B]">Telepon</p>
                      <p className="text-gray-600">(021) 1234-5678</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@serenityyoga.id"
                    className="flex items-center gap-4 p-4 bg-[#FAF8F5] rounded-xl hover:bg-[#E8D5B7]/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#7C9A92] rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D405B]">Email</p>
                      <p className="text-gray-600">hello@serenityyoga.id</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-heading font-semibold text-[#3D405B] mb-6">
                  Lokasi Studio
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7C9A92]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-[#7C9A92]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D405B]">Alamat</p>
                      <p className="text-gray-600">
                        Jl. Senopati No. 123, Lantai 2<br />
                        Kebayoran Baru, Jakarta Selatan 12190
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#7C9A92]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-[#7C9A92]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#3D405B]">Jam Operasional</p>
                      <p className="text-gray-600">
                        Senin - Jumat: 06:00 - 21:00<br />
                        Sabtu - Minggu: 07:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Google Maps</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-heading font-semibold text-[#3D405B] mb-6">
                  Ikuti Kami
                </h2>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Youtube size={28} />
                  </a>
                </div>

                <p className="mt-4 text-gray-600">
                  Follow @serenityyoga.id untuk tips yoga, jadwal kelas, dan promo terbaru!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-heading font-semibold text-[#3D405B] mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-600 mb-8">
            Kunjungi halaman <a href="/membership" className="text-[#7C9A92] underline">Membership</a> untuk FAQ lengkap tentang harga dan kebijakan
          </p>
        </div>
      </section>
    </div>
  );
}
