import Link from 'next/link';
import { Award, Clock, Users, ArrowRight, Instagram } from 'lucide-react';

const instruktur = [
  { nama: "Ibu Made Dewi", role: "Yoga Director", sertifikat: "RYT-500", pengalaman: "15 tahun", spesialisasi: ["Hatha Yoga", "Meditation", "Yoga Philosophy"], bio: "Made Dewi adalah pendiri dan direktur Serenity Yoga Studio. Beliau memulai perjalanan yoga di Bali dan telah belajar dengan berbagai guru yoga ternama di India.", quote: "Yoga bukan tentang menyentuh jari kaki, tapi tentang apa yang kamu pelajari dalam perjalanan ke sana.", kelasPerMinggu: 20, siswa: 500 },
  { nama: "Mbak Sarah Wijaya", role: "Vinyasa Specialist", sertifikat: "RYT-200", pengalaman: "8 tahun", spesialisasi: ["Vinyasa Flow", "Hatha Yoga", "Core Yoga"], bio: "Sarah menemukan yoga saat mencari cara untuk mengatasi stress dari pekerjaannya. Kelasnya dikenal energik dan menyenangkan.", quote: "Move with intention, breathe with purpose.", kelasPerMinggu: 15, siswa: 350 },
  { nama: "Mas Yoga Pratama", role: "Power & Ashtanga", sertifikat: "RYT-500", pengalaman: "10 tahun", spesialisasi: ["Power Yoga", "Ashtanga", "Arm Balances"], bio: "Yoga memulai praktek yoga sebagai pelengkap latihannya sebagai atlet. Ia kemudian belajar langsung di Mysore, India.", quote: "Strength comes from overcoming the things you thought you couldn't.", kelasPerMinggu: 12, siswa: 300 },
  { nama: "Ibu Ratna Kusuma", role: "Prenatal & Yin", sertifikat: "RYT-200", pengalaman: "7 tahun", spesialisasi: ["Prenatal Yoga", "Yin Yoga", "Restorative"], bio: "Ratna menemukan passion-nya dalam yoga prenatal setelah pengalaman pribadinya selama kehamilan.", quote: "In stillness, we find strength. In softness, we find power.", kelasPerMinggu: 10, siswa: 250 },
];

export default function InstrukturPage() {
  return (
    <main className="pt-16">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-text mb-3">Tim Instruktur Kami</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Dipandu oleh instruktur bersertifikat internasional</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            {instruktur.map((person, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-4">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center p-8">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-[family-name:var(--font-heading)] font-semibold">
                      {person.nama.split(' ').pop()?.charAt(0)}
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-text">{person.nama}</h2>
                        <p className="text-primary font-medium text-sm">{person.role}</p>
                      </div>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Award size={14} className="text-accent" />{person.sertifikat}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock size={14} className="text-primary" />{person.pengalaman}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {person.spesialisasi.map((s, j) => (
                        <span key={j} className="bg-secondary/50 px-2 py-0.5 rounded text-xs text-text">{s}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{person.bio}</p>
                    <blockquote className="border-l-2 border-primary pl-3 italic text-gray-500 text-sm mb-3">
                      &ldquo;{person.quote}&rdquo;
                    </blockquote>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users size={14} className="text-primary" />
                        <span className="text-gray-600">{person.siswa}+ siswa</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-primary" />
                        <span className="text-gray-600">{person.kelasPerMinggu} kelas/minggu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-text mb-3">Ingin Bergabung dengan Tim Kami?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">Kami selalu mencari instruktur yoga bersertifikat yang passionate</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors">
            Kirim Lamaran <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white mb-3">Siap Belajar dari yang Terbaik?</h2>
          <p className="text-white/80 mb-6">Coba kelas pertama Anda secara GRATIS</p>
          <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors">
            Daftar Trial Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
