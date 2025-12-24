'use client';

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
    <main className="pt-16">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-text mb-3">Paket Membership</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Investasi terbaik untuk kesehatan dan ketenangan pikiran Anda</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {membership.map((paket, i) => (
              <div key={i} className={`rounded-xl overflow-hidden ${paket.populer ? 'bg-primary text-white shadow-lg' : 'bg-white shadow-sm border border-gray-100'}`}>
                <div className={`text-center py-2 text-xs font-medium ${paket.populer ? 'bg-accent text-white' : 'bg-secondary/50 text-text'}`}>
                  {paket.highlight}
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className={`font-[family-name:var(--font-heading)] text-xl font-semibold mb-1 ${paket.populer ? 'text-white' : 'text-text'}`}>
                      {paket.nama}
                    </h3>
                    <div className="mb-1">
                      <span className={`text-2xl font-bold ${paket.populer ? 'text-white' : 'text-primary'}`}>{paket.harga}</span>
                      <span className={`text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.periode}</span>
                    </div>
                    {paket.hargaBulan && <p className="text-xs text-secondary">{paket.hargaBulan}</p>}
                    <p className={`mt-1 text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.deskripsi}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {paket.fitur.map((fitur, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        {fitur.included ? (
                          <Check size={16} className={paket.populer ? 'text-secondary' : 'text-primary'} />
                        ) : (
                          <X size={16} className={paket.populer ? 'text-white/40' : 'text-gray-300'} />
                        )}
                        <span className={fitur.included ? (paket.populer ? 'text-white' : 'text-gray-700') : (paket.populer ? 'text-white/40' : 'text-gray-400')}>
                          {fitur.nama}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontak"
                    className={`block text-center py-3 rounded-full font-medium text-sm transition-colors ${
                      paket.populer ? 'bg-white text-primary hover:bg-secondary' : 'bg-primary text-white hover:bg-primary-dark'
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text text-center mb-8">Layanan Tambahan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-4 text-center">
                <p className="text-text font-medium text-sm mb-1">{item.nama}</p>
                <p className="text-primary font-semibold text-sm">{item.harga}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text text-center mb-8">Pertanyaan Umum</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-text text-sm">{item.q}</span>
                  <ChevronDown size={18} className={`text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-gray-600 text-sm">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">Masih Ragu?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Coba 1 kelas GRATIS sebelum memutuskan. Tidak ada komitmen.</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
            Daftar Trial Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
