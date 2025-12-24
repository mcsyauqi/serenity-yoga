'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ArrowRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const membership = [
  {
    nama: "Drop-in",
    harga: "Rp 150.000",
    periode: "/kelas",
    deskripsi: "Cocok untuk mencoba atau yang jarang berlatih",
    fitur: [
      { nama: "Akses 1 kelas yoga", included: true },
      { nama: "Yoga mat tersedia", included: true },
      { nama: "Akses locker sementara", included: true },
      { nama: "Air mineral gratis", included: true },
      { nama: "Handuk", included: false },
      { nama: "Diskon workshop", included: false },
      { nama: "Guest pass", included: false },
      { nama: "Priority booking", included: false },
    ],
    populer: false,
    highlight: "Tanpa Komitmen"
  },
  {
    nama: "Monthly",
    harga: "Rp 800.000",
    periode: "/bulan",
    deskripsi: "Pilihan terbaik untuk yoga rutin",
    fitur: [
      { nama: "Unlimited kelas yoga", included: true },
      { nama: "Yoga mat premium", included: true },
      { nama: "Akses locker pribadi", included: true },
      { nama: "Air mineral gratis", included: true },
      { nama: "Handuk gratis", included: true },
      { nama: "Diskon workshop 10%", included: true },
      { nama: "1 Guest pass/bulan", included: true },
      { nama: "Priority booking", included: false },
    ],
    populer: true,
    highlight: "Paling Populer"
  },
  {
    nama: "Annual",
    harga: "Rp 7.200.000",
    periode: "/tahun",
    hargaBulan: "Rp 600.000/bulan",
    deskripsi: "Hemat 25% dengan komitmen tahunan",
    fitur: [
      { nama: "Unlimited kelas yoga", included: true },
      { nama: "Yoga mat premium", included: true },
      { nama: "Locker permanen", included: true },
      { nama: "Air mineral gratis", included: true },
      { nama: "Handuk & toiletries", included: true },
      { nama: "Free 2 workshop/tahun", included: true },
      { nama: "3 Guest pass/bulan", included: true },
      { nama: "Priority booking", included: true },
    ],
    populer: false,
    highlight: "Best Value"
  }
];

const addOns = [
  { nama: "Private Session (1-on-1)", harga: "Rp 500.000/sesi" },
  { nama: "Semi Private (2-3 orang)", harga: "Rp 350.000/orang/sesi" },
  { nama: "Rental Yoga Mat Premium", harga: "Rp 25.000/kelas" },
  { nama: "Rental Yoga Props Set", harga: "Rp 15.000/kelas" },
  { nama: "Extra Guest Pass", harga: "Rp 100.000/pass" },
];

const faq = [
  {
    q: "Apakah saya bisa freeze membership?",
    a: "Ya, member Monthly dan Annual bisa freeze membership hingga 30 hari per tahun dengan pemberitahuan minimal 7 hari sebelumnya."
  },
  {
    q: "Bagaimana cara reservasi kelas?",
    a: "Reservasi bisa dilakukan melalui WhatsApp, telepon, atau langsung di studio minimal 2 jam sebelum kelas dimulai."
  },
  {
    q: "Apakah ada batas kelas per hari?",
    a: "Tidak ada batasan jumlah kelas per hari untuk member unlimited. Anda bisa mengikuti sebanyak mungkin kelas yang Anda mau."
  },
  {
    q: "Apa yang terjadi jika saya tidak bisa hadir setelah reservasi?",
    a: "Harap batalkan reservasi minimal 4 jam sebelum kelas. Pembatalan mendadak 3x dalam sebulan akan dikenakan denda Rp 50.000."
  },
  {
    q: "Apakah membership bisa direfund?",
    a: "Membership tidak dapat di-refund setelah pembayaran. Namun, Anda bisa transfer ke orang lain dengan biaya admin Rp 100.000."
  }
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Paket Membership
            </h1>
            <p className="text-lg text-gray-600">
              Investasi terbaik untuk kesehatan dan ketenangan pikiran Anda. Pilih paket yang sesuai dengan gaya hidup yoga Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membership.map((paket, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  paket.populer
                    ? 'bg-[#7C9A92] text-white scale-105 shadow-xl relative z-10'
                    : 'bg-white shadow-sm'
                }`}
              >
                {/* Highlight Badge */}
                <div className={`text-center py-2 text-sm font-medium ${
                  paket.populer ? 'bg-[#B8860B] text-white' : 'bg-[#E8D5B7]/50 text-[#3D405B]'
                }`}>
                  {paket.highlight}
                </div>

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-heading font-semibold mb-2 ${
                      paket.populer ? 'text-white' : 'text-[#3D405B]'
                    }`}>
                      {paket.nama}
                    </h3>
                    <div className="mb-2">
                      <span className={`text-4xl font-bold ${
                        paket.populer ? 'text-white' : 'text-[#7C9A92]'
                      }`}>
                        {paket.harga}
                      </span>
                      <span className={paket.populer ? 'text-white/80' : 'text-gray-500'}>
                        {paket.periode}
                      </span>
                    </div>
                    {paket.hargaBulan && (
                      <p className="text-sm text-[#E8D5B7]">{paket.hargaBulan}</p>
                    )}
                    <p className={`mt-2 text-sm ${
                      paket.populer ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {paket.deskripsi}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {paket.fitur.map((fitur, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {fitur.included ? (
                          <Check size={18} className={paket.populer ? 'text-[#E8D5B7]' : 'text-[#7C9A92]'} />
                        ) : (
                          <X size={18} className={paket.populer ? 'text-white/40' : 'text-gray-300'} />
                        )}
                        <span className={
                          fitur.included
                            ? paket.populer ? 'text-white' : 'text-gray-700'
                            : paket.populer ? 'text-white/40' : 'text-gray-400'
                        }>
                          {fitur.nama}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontak"
                    className={`block text-center py-4 rounded-full font-semibold transition-all ${
                      paket.populer
                        ? 'bg-white text-[#7C9A92] hover:bg-[#E8D5B7]'
                        : 'bg-[#7C9A92] text-white hover:bg-[#6a8880]'
                    }`}
                  >
                    Pilih {paket.nama}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Layanan Tambahan</h2>
            <p className="section-subtitle">
              Tingkatkan pengalaman yoga Anda dengan layanan premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOns.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#FAF8F5] rounded-xl p-5 flex justify-between items-center"
              >
                <span className="text-[#3D405B] font-medium">{item.nama}</span>
                <span className="text-[#7C9A92] font-semibold text-sm">{item.harga}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-[#3D405B] flex items-center gap-2">
                    <HelpCircle size={18} className="text-[#7C9A92]" />
                    {item.q}
                  </span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 pl-12">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7C9A92]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">
            Masih Ragu?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Coba 1 kelas GRATIS sebelum memutuskan. Tidak ada komitmen, tidak ada tekanan.
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-[#7C9A92] px-8 py-4 rounded-full font-semibold hover:bg-[#E8D5B7] transition-all">
            Daftar Trial Class Gratis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
