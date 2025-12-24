import Link from 'next/link';
import { Clock, Users, ArrowRight, Check } from 'lucide-react';

const kelasYoga = [
  { nama: "Hatha Yoga", deskripsi: "Yoga klasik yang sempurna untuk pemula. Fokus pada postur dasar, teknik pernapasan, dan relaksasi.", durasi: "60 menit", level: "Semua level", manfaat: ["Meningkatkan fleksibilitas", "Memperbaiki postur tubuh", "Mengurangi stress", "Meningkatkan keseimbangan"], jadwal: "Setiap hari 07:00, 10:00, 17:00" },
  { nama: "Vinyasa Flow", deskripsi: "Yoga dinamis yang menghubungkan gerakan dengan napas. Membangun kekuatan, fleksibilitas, dan stamina.", durasi: "75 menit", level: "Intermediate", manfaat: ["Meningkatkan kardio", "Membakar kalori", "Membangun kekuatan", "Meningkatkan fokus"], jadwal: "Senin-Jumat 08:00, 18:30" },
  { nama: "Yin Yoga", deskripsi: "Praktik yoga yang lambat dan meditatif dengan postur yang ditahan selama 3-5 menit.", durasi: "60 menit", level: "Semua level", manfaat: ["Deep relaxation", "Meningkatkan fleksibilitas", "Mengurangi kecemasan", "Memperbaiki kualitas tidur"], jadwal: "Selasa, Kamis 19:30, Sabtu 16:00" },
  { nama: "Power Yoga", deskripsi: "Yoga intensif yang terinspirasi dari Ashtanga. Fokus pada membangun kekuatan otot dan daya tahan.", durasi: "60 menit", level: "Intermediate-Advanced", manfaat: ["Membangun otot", "Meningkatkan daya tahan", "Membakar lemak", "Meningkatkan kepercayaan diri"], jadwal: "Senin, Rabu, Jumat 06:30, 18:00" },
  { nama: "Prenatal Yoga", deskripsi: "Yoga yang dirancang khusus untuk ibu hamil. Fokus pada postur yang aman untuk persalinan.", durasi: "60 menit", level: "Semua trimester", manfaat: ["Mengurangi nyeri punggung", "Mempersiapkan persalinan", "Meningkatkan kualitas tidur", "Mengurangi stress kehamilan"], jadwal: "Selasa, Kamis 10:00, Sabtu 09:00" },
  { nama: "Meditation", deskripsi: "Kelas meditasi terpandu untuk menenangkan pikiran. Termasuk teknik pernapasan dan visualisasi.", durasi: "45 menit", level: "Semua level", manfaat: ["Mengurangi kecemasan", "Meningkatkan fokus", "Memperbaiki kualitas tidur", "Meningkatkan kesejahteraan"], jadwal: "Setiap hari 12:00, 20:00" },
  { nama: "Ashtanga Yoga", deskripsi: "Sistem yoga tradisional dengan sequence postur yang tetap untuk membangun kekuatan dan fokus.", durasi: "90 menit", level: "Intermediate-Advanced", manfaat: ["Meningkatkan disiplin", "Membangun kekuatan", "Detoksifikasi tubuh", "Meningkatkan stamina"], jadwal: "Senin, Rabu, Jumat 06:00" },
  { nama: "Restorative Yoga", deskripsi: "Yoga yang sangat gentle dengan prop untuk support penuh dan relaksasi mendalam.", durasi: "75 menit", level: "Semua level", manfaat: ["Deep relaxation", "Recovery otot", "Menyeimbangkan sistem saraf", "Mengurangi fatigue"], jadwal: "Minggu 10:00, 16:00" }
];

export default function KelasPage() {
  return (
    <main className="pt-16">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-text mb-3">Kelas Yoga Kami</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Temukan kelas yang sesuai dengan kebutuhan dan level Anda</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            {kelasYoga.map((kelas, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-3">
                  <div className="p-6 md:col-span-2">
                    <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text mb-2">{kelas.nama}</h2>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-primary text-sm">
                        <Clock size={14} /> {kelas.durasi}
                      </span>
                      <span className="bg-secondary/50 px-2 py-0.5 rounded text-text text-xs">{kelas.level}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{kelas.deskripsi}</p>
                    <p className="text-sm text-primary font-medium flex items-center gap-1">
                      <Users size={14} /> Jadwal: {kelas.jadwal}
                    </p>
                  </div>
                  <div className="bg-background p-6">
                    <h4 className="font-semibold text-text text-sm mb-3">Manfaat:</h4>
                    <ul className="space-y-2">
                      {kelas.manfaat.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Check size={14} className="text-primary shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">Siap Memulai Perjalanan Yoga Anda?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">Coba kelas pertama Anda secara GRATIS dan rasakan perbedaannya</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
            Daftar Trial Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
