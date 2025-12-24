import Link from 'next/link';
import { ArrowRight, Clock, Check, Star } from 'lucide-react';

const kelasYoga = [
  { nama: "Hatha Yoga", deskripsi: "Yoga dasar untuk pemula dengan fokus pada postur dan pernapasan", durasi: "60 menit", level: "Semua level" },
  { nama: "Vinyasa Flow", deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas", durasi: "75 menit", level: "Intermediate" },
  { nama: "Yin Yoga", deskripsi: "Deep stretch untuk relaksasi dan fleksibilitas", durasi: "60 menit", level: "Semua level" },
  { nama: "Power Yoga", deskripsi: "Yoga intensif untuk membangun kekuatan dan stamina", durasi: "60 menit", level: "Intermediate-Advanced" },
  { nama: "Prenatal Yoga", deskripsi: "Yoga khusus untuk ibu hamil yang aman dan nyaman", durasi: "60 menit", level: "Semua trimester" },
  { nama: "Meditation", deskripsi: "Guided meditation untuk ketenangan pikiran", durasi: "45 menit", level: "Semua level" }
];

const instruktur = [
  { nama: "Ibu Made Dewi", role: "Yoga Director", sertifikat: "RYT-500", pengalaman: "15 tahun" },
  { nama: "Mbak Sarah", role: "Vinyasa Specialist", sertifikat: "RYT-200", pengalaman: "8 tahun" },
  { nama: "Mas Yoga", role: "Power & Ashtanga", sertifikat: "RYT-500", pengalaman: "10 tahun" },
  { nama: "Ibu Ratna", role: "Prenatal & Yin", sertifikat: "RYT-200", pengalaman: "7 tahun" }
];

const membership = [
  { nama: "Drop-in", harga: "Rp 150.000", periode: "/kelas", fitur: ["1 kelas yoga", "Yoga mat tersedia", "Akses locker"], populer: false },
  { nama: "Monthly", harga: "Rp 800.000", periode: "/bulan", fitur: ["Unlimited kelas", "Yoga mat premium", "Locker pribadi", "Diskon workshop 10%"], populer: true },
  { nama: "Annual", harga: "Rp 7.200.000", periode: "/tahun", fitur: ["Unlimited kelas", "Semua fasilitas", "Free 2 workshop", "Priority booking"], populer: false }
];

const testimoni = [
  { nama: "Dewi", status: "Member 2 tahun", quote: "Serenity Yoga mengubah hidup saya. Stress berkurang dan tidur lebih nyenyak." },
  { nama: "Andi", status: "Member baru", quote: "Instrukturnya sabar dan perhatian. Cocok banget untuk pemula seperti saya." },
  { nama: "Ratna", status: "Member 3 tahun", quote: "Studio terbersih dan paling nyaman di Jakarta. Highly recommended!" }
];

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-primary font-medium mb-2">Selamat Datang di Serenity Yoga Studio</p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-text mb-4">
              Temukan Kedamaian dalam Dirimu
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Studio yoga dengan suasana tenang dan instruktur bersertifikat internasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontak" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors">
                Coba Kelas Gratis <ArrowRight size={18} />
              </Link>
              <Link href="/jadwal" className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
                Lihat Jadwal
              </Link>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-gray-600">Jenis Kelas</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">10</p>
                <p className="text-sm text-gray-600">Instruktur</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-gray-600">Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kelas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-text mb-2">Jenis Kelas Yoga</h2>
            <p className="text-gray-600">Pilih kelas yang sesuai dengan kebutuhan dan level Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kelasYoga.map((kelas, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text mb-2">{kelas.nama}</h3>
                <p className="text-gray-600 text-sm mb-4">{kelas.deskripsi}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-primary">
                    <Clock size={14} /> {kelas.durasi}
                  </span>
                  <span className="bg-secondary/50 px-2 py-0.5 rounded text-text text-xs">{kelas.level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/kelas" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
              Lihat Semua Kelas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instruktur */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-text mb-2">Instruktur Kami</h2>
            <p className="text-gray-600">Dipandu oleh instruktur bersertifikat internasional</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instruktur.map((person, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-[family-name:var(--font-heading)] font-semibold">
                    {person.nama.split(' ').pop()?.charAt(0)}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-text">{person.nama}</h3>
                  <p className="text-primary text-sm">{person.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{person.sertifikat} &bull; {person.pengalaman}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/instruktur" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
              Lihat Semua Instruktur <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-text mb-2">Paket Membership</h2>
            <p className="text-gray-600">Pilih paket yang sesuai dengan gaya hidup yoga Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {membership.map((paket, i) => (
              <div key={i} className={`rounded-xl p-6 relative ${paket.populer ? 'bg-primary text-white' : 'bg-white border border-gray-100'}`}>
                {paket.populer && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Paling Populer
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`font-[family-name:var(--font-heading)] text-xl font-semibold ${paket.populer ? 'text-white' : 'text-text'}`}>
                    {paket.nama}
                  </h3>
                  <div className="mt-2">
                    <span className={`text-2xl font-bold ${paket.populer ? 'text-white' : 'text-primary'}`}>{paket.harga}</span>
                    <span className={`text-sm ${paket.populer ? 'text-white/80' : 'text-gray-500'}`}>{paket.periode}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {paket.fitur.map((fitur, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check size={16} className={paket.populer ? 'text-secondary' : 'text-primary'} />
                      <span className={paket.populer ? 'text-white/90' : 'text-gray-600'}>{fitur}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={`block text-center py-3 rounded-full font-medium transition-colors ${
                    paket.populer ? 'bg-white text-primary hover:bg-secondary' : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  Pilih Paket
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-text mb-2">Apa Kata Member Kami</h2>
            <p className="text-gray-600">Dengarkan pengalaman mereka yang telah merasakan manfaat yoga</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimoni.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-4">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-[family-name:var(--font-heading)] font-semibold">
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{item.nama}</p>
                    <p className="text-xs text-gray-500">{item.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">
            Mulai Perjalanan Yoga Anda
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Daftar sekarang dan dapatkan <span className="font-bold text-secondary">1 KELAS GRATIS</span> untuk pengalaman pertama Anda
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
            Daftar Trial Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
