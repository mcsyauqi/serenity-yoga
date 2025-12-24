'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const membership = [
  { nama: "Drop-in", harga: "Rp 150.000", periode: "/kelas", deskripsi: "Cocok untuk mencoba", fitur: [{ nama: "Akses 1 kelas yoga", included: true }, { nama: "Yoga mat tersedia", included: true }, { nama: "Akses locker", included: true }, { nama: "Air mineral gratis", included: true }, { nama: "Handuk", included: false }, { nama: "Diskon workshop", included: false }, { nama: "Guest pass", included: false }, { nama: "Priority booking", included: false }], populer: false, highlight: "Tanpa Komitmen" },
  { nama: "Monthly", harga: "Rp 800.000", periode: "/bulan", deskripsi: "Pilihan terbaik", fitur: [{ nama: "Unlimited kelas yoga", included: true }, { nama: "Yoga mat premium", included: true }, { nama: "Locker pribadi", included: true }, { nama: "Air mineral gratis", included: true }, { nama: "Handuk gratis", included: true }, { nama: "Diskon workshop 10%", included: true }, { nama: "1 Guest pass/bulan", included: true }, { nama: "Priority booking", included: false }], populer: true, highlight: "Paling Populer" },
  { nama: "Annual", harga: "Rp 7.200.000", periode: "/tahun", hargaBulan: "Rp 600.000/bulan", deskripsi: "Hemat 25%", fitur: [{ nama: "Unlimited kelas yoga", included: true }, { nama: "Yoga mat premium", included: true }, { nama: "Locker permanen", included: true }, { nama: "Air mineral gratis", included: true }, { nama: "Handuk & toiletries", included: true }, { nama: "Free 2 workshop/tahun", included: true }, { nama: "3 Guest pass/bulan", included: true }, { nama: "Priority booking", included: true }], populer: false, highlight: "Best Value" }
];

const addOns = [
  { nama: "Private Session (1-on-1)", harga: "Rp 500.000/sesi" },
  { nama: "Semi Private (2-3 orang)", harga: "Rp 350.000/orang" },
  { nama: "Rental Yoga Mat Premium", harga: "Rp 25.000/kelas" },
  { nama: "Extra Guest Pass", harga: "Rp 100.000/pass" },
];

const faq = [
  { q: "Apakah saya bisa freeze membership?", a: "Ya, member Monthly dan Annual bisa freeze membership hingga 30 hari per tahun dengan pemberitahuan minimal 7 hari sebelumnya." },
  { q: "Bagaimana cara reservasi kelas?", a: "Reservasi bisa dilakukan melalui WhatsApp, telepon, atau langsung di studio minimal 2 jam sebelum kelas dimulai." },
  { q: "Apakah ada batas kelas per hari?", a: "Tidak ada batasan jumlah kelas per hari untuk member unlimited. Anda bisa mengikuti sebanyak mungkin kelas yang Anda mau." },
  { q: "Apakah membership bisa direfund?", a: "Membership tidak dapat di-refund setelah pembayaran. Namun, Anda bisa transfer ke orang lain dengan biaya admin Rp 100.000." },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#7C9A92]/10 via-[#FAF8F5] to-[#E8D5B7]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-[#3D405B] mb-4">Paket Membership</h1>
            <p className="text-gray-600">Investasi terbaik untuk kesehatan dan ketenangan pikiran Anda</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {membership.map((paket, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`rounded-xl overflow-hidden ${paket.populer ? 'bg-[#7C9A92] text-white md:scale-105 shadow-xl relative z-10' : 'bg-white shadow-sm'}`}>
                <div className={`text-center py-2 text-xs font-semibold ${paket.populer ? 'bg-[#B8860B] text-white' : 'bg-[#E8D5B7]/50 text-[#3D405B]'}`}>{paket.highlight}</div>
                <div className="p-5 lg:p-6">
                  <div className="text-center mb-5">
                    <h3 className={`text-xl font-heading font-semibold mb-1 ${paket.populer ? 'text-white' : 'text-[#3D405B]'}`}>{paket.nama}</h3>
                    <div className="mb-1">
                      <span className={`text-3xl font-bold ${paket.populer ? 'text-white' : 'text-[#7C9A92]'}`}>{paket.harga}</span>
                      <span className={`text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.periode}</span>
                    </div>
                    {paket.hargaBulan && <p className="text-xs text-[#E8D5B7]">{paket.hargaBulan}</p>}
                    <p className={`mt-1 text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.deskripsi}</p>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {paket.fitur.map((fitur, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        {fitur.included ? <Check size={16} className={paket.populer ? 'text-[#E8D5B7]' : 'text-[#7C9A92]'} /> : <X size={16} className={paket.populer ? 'text-white/40' : 'text-gray-300'} />}
                        <span className={fitur.included ? (paket.populer ? 'text-white' : 'text-gray-700') : (paket.populer ? 'text-white/40' : 'text-gray-400')}>{fitur.nama}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontak" className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${paket.populer ? 'bg-white text-[#7C9A92] hover:bg-[#E8D5B7]' : 'bg-[#7C9A92] text-white hover:bg-[#6a8880]'}`}>Pilih {paket.nama}</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#3D405B] text-center mb-8">Layanan Tambahan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-[#FAF8F5] rounded-xl p-4 text-center">
                <p className="text-[#3D405B] font-medium text-sm mb-1">{item.nama}</p>
                <p className="text-[#7C9A92] font-semibold text-sm">{item.harga}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#3D405B] text-center mb-8">Pertanyaan Umum</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {faq.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-5 py-4 flex items-center justify-between text-left">
                  <span className="font-medium text-[#3D405B] text-sm">{item.q}</span>
                  <ChevronDown size={18} className={`text-[#7C9A92] transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && <div className="px-5 pb-4 text-gray-600 text-sm">{item.a}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#7C9A92]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-3">Masih Ragu?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Coba 1 kelas GRATIS sebelum memutuskan. Tidak ada komitmen.</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-6 py-3 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">Daftar Trial Class <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
