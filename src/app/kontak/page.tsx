'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function KontakPage() {
  const [formData, setFormData] = useState({ nama: '', email: '', telepon: '', subjek: 'Trial Class', pesan: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo Serenity Yoga!%0A%0ANama: ${formData.nama}%0AEmail: ${formData.email}%0ATelepon: ${formData.telepon}%0ASubjek: ${formData.subjek}%0A%0APesan:%0A${formData.pesan}`;
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank');
  };

  return (
    <div>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#3D405B] mb-4">Hubungi Kami</h1>
            <p className="text-gray-600">Punya pertanyaan atau ingin mendaftar trial class? Kami siap membantu.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-heading font-semibold text-[#3D405B] mb-5">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap *</label>
                  <input type="text" required value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent" placeholder="Masukkan nama Anda" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent" placeholder="email@contoh.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">No. Telepon *</label>
                    <input type="tel" required value={formData.telepon} onChange={(e) => setFormData({ ...formData, telepon: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent" placeholder="08xx-xxxx-xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Subjek</label>
                  <select value={formData.subjek} onChange={(e) => setFormData({ ...formData, subjek: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent bg-white">
                    <option value="Trial Class">Daftar Trial Class</option>
                    <option value="Membership">Informasi Membership</option>
                    <option value="Workshop">Workshop & Event</option>
                    <option value="Private Session">Private Session</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan</label>
                  <textarea rows={4} value={formData.pesan} onChange={(e) => setFormData({ ...formData, pesan: e.target.value })} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C9A92] focus:border-transparent resize-none" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#7C9A92] text-white py-3 rounded-full font-semibold hover:bg-[#6a8880] transition-all flex items-center justify-center gap-2"><Send size={18} />Kirim via WhatsApp</button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-heading font-semibold text-[#3D405B] mb-4">Kontak Langsung</h2>
                <div className="space-y-3">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"><MessageCircle size={20} className="text-white" /></div>
                    <div><p className="font-semibold text-[#3D405B] text-sm">WhatsApp</p><p className="text-gray-600 text-sm">+62 812-3456-7890</p></div>
                  </a>
                  <a href="tel:02112345678" className="flex items-center gap-3 p-3 bg-[#FAF8F5] rounded-lg hover:bg-[#E8D5B7]/30 transition-colors">
                    <div className="w-10 h-10 bg-[#7C9A92] rounded-full flex items-center justify-center"><Phone size={20} className="text-white" /></div>
                    <div><p className="font-semibold text-[#3D405B] text-sm">Telepon</p><p className="text-gray-600 text-sm">(021) 1234-5678</p></div>
                  </a>
                  <a href="mailto:hello@serenityyoga.id" className="flex items-center gap-3 p-3 bg-[#FAF8F5] rounded-lg hover:bg-[#E8D5B7]/30 transition-colors">
                    <div className="w-10 h-10 bg-[#7C9A92] rounded-full flex items-center justify-center"><Mail size={20} className="text-white" /></div>
                    <div><p className="font-semibold text-[#3D405B] text-sm">Email</p><p className="text-gray-600 text-sm">hello@serenityyoga.id</p></div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-heading font-semibold text-[#3D405B] mb-4">Lokasi Studio</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#7C9A92]/10 rounded-full flex items-center justify-center shrink-0"><MapPin size={20} className="text-[#7C9A92]" /></div>
                    <div><p className="font-semibold text-[#3D405B] text-sm">Alamat</p><p className="text-gray-600 text-sm">Jl. Senopati No. 123, Lantai 2<br />Kebayoran Baru, Jakarta Selatan</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#7C9A92]/10 rounded-full flex items-center justify-center shrink-0"><Clock size={20} className="text-[#7C9A92]" /></div>
                    <div><p className="font-semibold text-[#3D405B] text-sm">Jam Operasional</p><p className="text-gray-600 text-sm">Senin - Jumat: 06:00 - 21:00<br />Sabtu - Minggu: 07:00 - 18:00</p></div>
                  </div>
                </div>
                <div className="mt-4 h-36 bg-gray-200 rounded-lg flex items-center justify-center"><span className="text-gray-500 text-sm">Google Maps</span></div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-heading font-semibold text-[#3D405B] mb-4">Ikuti Kami</h2>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Instagram size={24} /></a>
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Facebook size={24} /></a>
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Youtube size={24} /></a>
                </div>
                <p className="mt-3 text-gray-600 text-sm">Follow @serenityyoga.id untuk tips yoga dan promo!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">Kunjungi halaman <Link href="/membership" className="text-[#7C9A92] underline">Membership</Link> untuk FAQ lengkap</p>
        </div>
      </section>
    </div>
  );
}
