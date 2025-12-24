import Link from 'next/link';
import { ArrowRight, Clock, Check, Star, Sparkles, Heart, Leaf } from 'lucide-react';

const kelasYoga = [
  { nama: "Hatha Yoga", deskripsi: "Yoga dasar untuk pemula dengan fokus pada postur dan pernapasan", durasi: "60 menit", level: "Semua level", icon: "🧘" },
  { nama: "Vinyasa Flow", deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas", durasi: "75 menit", level: "Intermediate", icon: "🌊" },
  { nama: "Yin Yoga", deskripsi: "Deep stretch untuk relaksasi dan fleksibilitas", durasi: "60 menit", level: "Semua level", icon: "🌙" },
  { nama: "Power Yoga", deskripsi: "Yoga intensif untuk membangun kekuatan dan stamina", durasi: "60 menit", level: "Intermediate-Advanced", icon: "💪" },
  { nama: "Prenatal Yoga", deskripsi: "Yoga khusus untuk ibu hamil yang aman dan nyaman", durasi: "60 menit", level: "Semua trimester", icon: "🤰" },
  { nama: "Meditation", deskripsi: "Guided meditation untuk ketenangan pikiran", durasi: "45 menit", level: "Semua level", icon: "🕯️" }
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
  { nama: "Dewi Anggraini", status: "Member 2 tahun", quote: "Serenity Yoga mengubah hidup saya. Stress berkurang dan tidur lebih nyenyak." },
  { nama: "Andi Pratama", status: "Member baru", quote: "Instrukturnya sabar dan perhatian. Cocok banget untuk pemula seperti saya." },
  { nama: "Ratna Sari", status: "Member 3 tahun", quote: "Studio terbersih dan paling nyaman di Jakarta. Highly recommended!" }
];

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full mb-6 shadow-sm">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm text-text font-medium">Studio Yoga Premium di Jakarta</span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-text leading-[1.1] mb-6">
                Temukan <br />
                <span className="text-primary italic">Kedamaian</span><br />
                dalam Dirimu
              </h1>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Mulai perjalanan yoga Anda bersama instruktur bersertifikat internasional dalam suasana yang tenang dan menenangkan.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/kontak" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25">
                  Coba Kelas Gratis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/jadwal" className="px-8 py-4 border-2 border-text/20 text-text font-semibold rounded-full hover:border-primary hover:text-primary transition-colors">
                  Lihat Jadwal
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="font-heading text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-gray-500">Jenis Kelas</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold text-primary">10</p>
                  <p className="text-sm text-gray-500">Instruktur</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold text-primary">5K+</p>
                  <p className="text-sm text-gray-500">Member Aktif</p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Main circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full"></div>
                <div className="absolute inset-4 bg-secondary/40 rounded-full"></div>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-heading text-6xl text-primary mb-2">🧘‍♀️</p>
                    <p className="font-heading text-2xl text-text font-semibold">Serenity</p>
                    <p className="text-primary text-sm tracking-widest">YOGA STUDIO</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 right-10 bg-white rounded-2xl shadow-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Certified</p>
                      <p className="text-sm font-semibold text-text">RYT-500</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <Star size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="text-sm font-semibold text-text">4.9/5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-6 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white">
            <div className="flex items-center gap-2">
              <Leaf size={20} />
              <span className="text-sm font-medium">100% Natural Environment</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} />
              <span className="text-sm font-medium">Personal Attention</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={20} />
              <span className="text-sm font-medium">Premium Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kelas */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Kelas Kami</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">Temukan Kelas yang Tepat</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Berbagai pilihan kelas yoga untuk semua level, dari pemula hingga advanced</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kelasYoga.map((kelas, i) => (
              <div key={i} className="group bg-background rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{kelas.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-text mb-2">{kelas.nama}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{kelas.deskripsi}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <Clock size={14} /> {kelas.durasi}
                  </span>
                  <span className="bg-secondary/50 px-3 py-1 rounded-full text-text text-xs font-medium">{kelas.level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/kelas" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
              Lihat Semua Kelas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instruktur */}
      <section className="py-24 bg-gradient-to-b from-background to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Tim Kami</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">Instruktur Bersertifikat</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Belajar dari instruktur profesional dengan sertifikasi internasional</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instruktur.map((person, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/40 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-heading font-bold shadow-lg">
                      {person.nama.split(' ').pop()?.charAt(0)}
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text">{person.nama}</h3>
                <p className="text-primary text-sm font-medium">{person.role}</p>
                <p className="text-xs text-gray-500 mt-1">{person.sertifikat} • {person.pengalaman}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/instruktur" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
              Lihat Semua Instruktur <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Harga</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">Paket Membership</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Pilih paket yang sesuai dengan kebutuhan yoga Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {membership.map((paket, i) => (
              <div key={i} className={`rounded-2xl p-8 relative ${paket.populer ? 'bg-primary text-white shadow-2xl shadow-primary/30 scale-105' : 'bg-background'}`}>
                {paket.populer && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    PALING POPULER
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`font-heading text-2xl font-semibold mb-2 ${paket.populer ? 'text-white' : 'text-text'}`}>
                    {paket.nama}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${paket.populer ? 'text-white' : 'text-primary'}`}>{paket.harga}</span>
                    <span className={`text-sm ${paket.populer ? 'text-white/70' : 'text-gray-500'}`}>{paket.periode}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {paket.fitur.map((fitur, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check size={18} className={paket.populer ? 'text-secondary' : 'text-primary'} />
                      <span className={paket.populer ? 'text-white/90' : 'text-gray-600'}>{fitur}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className={`block text-center py-4 rounded-full font-semibold transition-all ${
                    paket.populer ? 'bg-white text-primary hover:bg-secondary hover:shadow-lg' : 'bg-primary text-white hover:bg-primary-dark'
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
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Testimoni</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">Kata Member Kami</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Dengarkan pengalaman transformatif dari komunitas Serenity Yoga</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimoni.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-lg">
                    {item.nama.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-text">{item.nama}</p>
                    <p className="text-sm text-gray-500">{item.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Daftar sekarang dan dapatkan <span className="font-bold text-secondary">1 KELAS GRATIS</span> untuk pengalaman pertama Anda
          </p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary hover:shadow-2xl transition-all">
            Daftar Trial Class <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
