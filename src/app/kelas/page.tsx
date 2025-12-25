import Link from 'next/link';
import { Clock, Users, ArrowRight, Check, Star, Award, Heart, Zap } from 'lucide-react';

const kelasYoga = [
  { nama: "Hatha Yoga", deskripsi: "Yoga klasik yang sempurna untuk pemula. Fokus pada postur dasar, teknik pernapasan, dan relaksasi mendalam.", durasi: "60 menit", level: "Semua level", icon: "🧘", manfaat: ["Meningkatkan fleksibilitas", "Memperbaiki postur tubuh", "Mengurangi stress", "Meningkatkan keseimbangan"], jadwal: "Setiap hari 07:00, 10:00, 17:00", instruktur: "Ibu Made Dewi" },
  { nama: "Vinyasa Flow", deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas dalam aliran yang mengalir indah.", durasi: "75 menit", level: "Intermediate", icon: "🌊", manfaat: ["Meningkatkan kardio", "Membakar kalori", "Membangun kekuatan", "Meningkatkan fokus"], jadwal: "Senin-Jumat 08:00, 18:30", instruktur: "Mbak Sarah" },
  { nama: "Yin Yoga", deskripsi: "Praktik yoga yang lambat dan meditatif dengan postur yang ditahan selama 3-5 menit.", durasi: "60 menit", level: "Semua level", icon: "🌙", manfaat: ["Deep relaxation", "Meningkatkan fleksibilitas", "Mengurangi kecemasan", "Memperbaiki kualitas tidur"], jadwal: "Selasa, Kamis 19:30, Sabtu 16:00", instruktur: "Ibu Ratna" },
  { nama: "Power Yoga", deskripsi: "Yoga intensif yang terinspirasi dari Ashtanga untuk membangun kekuatan dan daya tahan.", durasi: "60 menit", level: "Intermediate-Advanced", icon: "💪", manfaat: ["Membangun otot", "Meningkatkan daya tahan", "Membakar lemak", "Meningkatkan kepercayaan diri"], jadwal: "Senin, Rabu, Jumat 06:30, 18:00", instruktur: "Mas Yoga" },
  { nama: "Prenatal Yoga", deskripsi: "Yoga yang dirancang khusus untuk ibu hamil dengan postur yang aman dan nyaman.", durasi: "60 menit", level: "Semua trimester", icon: "🤰", manfaat: ["Mengurangi nyeri punggung", "Mempersiapkan persalinan", "Meningkatkan kualitas tidur", "Mengurangi stress kehamilan"], jadwal: "Selasa, Kamis 10:00, Sabtu 09:00", instruktur: "Ibu Ratna" },
  { nama: "Meditation", deskripsi: "Kelas meditasi terpandu untuk menenangkan pikiran dengan berbagai teknik.", durasi: "45 menit", level: "Semua level", icon: "🕯️", manfaat: ["Mengurangi kecemasan", "Meningkatkan fokus", "Memperbaiki kualitas tidur", "Meningkatkan kesejahteraan"], jadwal: "Setiap hari 12:00, 20:00", instruktur: "Ibu Made Dewi" },
  { nama: "Ashtanga Yoga", deskripsi: "Sistem yoga tradisional dengan sequence postur yang tetap dan disiplin tinggi.", durasi: "90 menit", level: "Advanced", icon: "🔥", manfaat: ["Meningkatkan disiplin", "Membangun kekuatan", "Detoksifikasi tubuh", "Meningkatkan stamina"], jadwal: "Senin, Rabu, Jumat 06:00", instruktur: "Mas Yoga" },
  { nama: "Restorative Yoga", deskripsi: "Yoga yang sangat gentle dengan prop untuk support penuh dan relaksasi total.", durasi: "75 menit", level: "Semua level", icon: "🌿", manfaat: ["Deep relaxation", "Recovery otot", "Menyeimbangkan sistem saraf", "Mengurangi fatigue"], jadwal: "Minggu 10:00, 16:00", instruktur: "Ibu Ratna" }
];

const benefits = [
  { icon: Heart, title: "Kesehatan Fisik", desc: "Meningkatkan fleksibilitas, kekuatan, dan keseimbangan tubuh" },
  { icon: Zap, title: "Energi Positif", desc: "Meningkatkan energi dan vitalitas sepanjang hari" },
  { icon: Star, title: "Ketenangan Mental", desc: "Mengurangi stress dan meningkatkan fokus pikiran" },
  { icon: Award, title: "Kualitas Tidur", desc: "Tidur lebih nyenyak dan bangun lebih segar" }
];

const levels = [
  { level: "Beginner", desc: "Untuk yang baru memulai yoga. Tidak perlu pengalaman sebelumnya.", kelas: ["Hatha Yoga", "Yin Yoga", "Restorative Yoga", "Meditation"] },
  { level: "Intermediate", desc: "Untuk yang sudah familiar dengan postur dasar yoga.", kelas: ["Vinyasa Flow", "Power Yoga"] },
  { level: "Advanced", desc: "Untuk praktisi berpengalaman yang ingin tantangan lebih.", kelas: ["Ashtanga Yoga", "Advanced Vinyasa"] }
];

export default function KelasPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Kelas Yoga</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-text mb-6">
              Temukan Kelas yang <span className="text-primary italic">Tepat</span> untuk Anda
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Dari pemula hingga advanced, kami menyediakan berbagai jenis kelas yoga yang dipandu oleh instruktur bersertifikat internasional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontak" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all">
                Coba Kelas Gratis <ArrowRight size={18} />
              </Link>
              <Link href="/jadwal" className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">
                Lihat Jadwal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-6 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <item.icon size={24} />
                <div>
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs hidden md:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Classes */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Pilihan Kelas</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">8 Jenis Kelas Yoga</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Setiap kelas dirancang untuk memberikan pengalaman yoga yang unik dan bermanfaat</p>
          </div>

          <div className="space-y-6">
            {kelasYoga.map((kelas, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="grid md:grid-cols-3">
                  <div className="p-8 md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl">{kelas.icon}</span>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-text mb-1">{kelas.nama}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center gap-1 text-primary font-medium">
                            <Clock size={14} /> {kelas.durasi}
                          </span>
                          <span className="bg-secondary/50 px-3 py-1 rounded-full text-text text-xs font-medium">{kelas.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{kelas.deskripsi}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> {kelas.instruktur}</span>
                      <span className="flex items-center gap-1"><Clock size={14} className="text-primary" /> {kelas.jadwal}</span>
                    </div>
                  </div>
                  <div className="bg-background p-8">
                    <h4 className="font-semibold text-text mb-4">Manfaat:</h4>
                    <ul className="space-y-2">
                      {kelas.manfaat.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Check size={16} className="text-primary shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/kontak" className="mt-6 block text-center bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                      Daftar Kelas Ini
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Panduan Level</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-text mb-4">Pilih Sesuai Level Anda</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tidak yakin harus mulai dari mana? Berikut panduan untuk memilih kelas yang tepat</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${i === 0 ? 'bg-green-100' : i === 1 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                  <span className={`text-2xl font-bold ${i === 0 ? 'text-green-600' : i === 1 ? 'text-yellow-600' : 'text-red-600'}`}>{i + 1}</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-text mb-2">{item.level}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-text">Kelas yang cocok:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.kelas.map((k, j) => (
                      <span key={j} className="bg-white px-3 py-1 rounded-full text-sm text-primary border border-primary/20">{k}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Persiapan</p>
              <h2 className="font-heading text-4xl font-semibold text-text mb-6">Yang Perlu Anda Bawa</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tidak perlu khawatir jika Anda baru pertama kali. Kami menyediakan semua peralatan yang diperlukan.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Pakaian Nyaman</p>
                    <p className="text-gray-600 text-sm">Gunakan pakaian yang fleksibel dan nyaman untuk bergerak</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Botol Minum</p>
                    <p className="text-gray-600 text-sm">Tetap terhidrasi sebelum, selama, dan setelah kelas</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Handuk Kecil</p>
                    <p className="text-gray-600 text-sm">Untuk kelas yang lebih intensif seperti Power Yoga</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-heading text-2xl font-semibold text-text mb-6">Disediakan oleh Studio:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🧘</span>
                  <p className="font-medium text-text text-sm">Yoga Mat Premium</p>
                </div>
                <div className="bg-background rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🧱</span>
                  <p className="font-medium text-text text-sm">Yoga Blocks</p>
                </div>
                <div className="bg-background rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🎀</span>
                  <p className="font-medium text-text text-sm">Yoga Straps</p>
                </div>
                <div className="bg-background rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">🛋️</span>
                  <p className="font-medium text-text text-sm">Bolsters & Blankets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">FAQ</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">Pertanyaan Umum</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-text mb-2">Apakah saya harus fleksibel untuk ikut yoga?</h4>
              <p className="text-gray-600 text-sm">Tidak sama sekali! Yoga justru akan membantu Anda menjadi lebih fleksibel. Semua orang bisa yoga, terlepas dari tingkat fleksibilitas awal.</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-text mb-2">Berapa lama sebelum kelas saya harus datang?</h4>
              <p className="text-gray-600 text-sm">Kami sarankan datang 10-15 menit sebelum kelas dimulai untuk registrasi dan persiapan.</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h4 className="font-semibold text-text mb-2">Apakah ada batasan usia untuk ikut yoga?</h4>
              <p className="text-gray-600 text-sm">Yoga cocok untuk semua usia. Kami memiliki kelas untuk berbagai kelompok usia dan kondisi fisik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">Siap Memulai?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Coba kelas pertama Anda secara GRATIS dan rasakan perbedaannya</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all">
              Daftar Trial Class <ArrowRight size={18} />
            </Link>
            <Link href="/jadwal" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Lihat Jadwal Lengkap
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
