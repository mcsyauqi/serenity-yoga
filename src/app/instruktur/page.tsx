import Link from 'next/link';
import { Award, Clock, Users, ArrowRight, Instagram, Star, GraduationCap, Heart, CheckCircle } from 'lucide-react';

const instruktur = [
  { nama: "Ibu Made Dewi", role: "Yoga Director & Founder", sertifikat: "RYT-500, E-RYT 200", pengalaman: "15 tahun", spesialisasi: ["Hatha Yoga", "Meditation", "Yoga Philosophy", "Pranayama"], bio: "Made Dewi adalah pendiri dan direktur Serenity Yoga Studio. Beliau memulai perjalanan yoga di Bali tahun 2009 dan telah belajar dengan berbagai guru yoga ternama di India termasuk di Rishikesh dan Mysore. Beliau memiliki passion khusus dalam yoga philosophy dan meditation.", quote: "Yoga bukan tentang menyentuh jari kaki, tapi tentang apa yang kamu pelajari dalam perjalanan ke sana.", kelasPerMinggu: 20, siswa: 500, instagram: "@madedewi.yoga" },
  { nama: "Mbak Sarah Wijaya", role: "Senior Instructor - Vinyasa Specialist", sertifikat: "RYT-200, Yoga Alliance", pengalaman: "8 tahun", spesialisasi: ["Vinyasa Flow", "Hatha Yoga", "Core Yoga", "Hip Opening"], bio: "Sarah menemukan yoga saat mencari cara untuk mengatasi stress dari pekerjaannya di dunia korporat. Setelah merasakan transformasi dalam hidupnya, ia memutuskan untuk menjadi instruktur penuh waktu. Kelasnya dikenal energik, kreatif, dan menyenangkan.", quote: "Move with intention, breathe with purpose.", kelasPerMinggu: 15, siswa: 350, instagram: "@sarahyoga.id" },
  { nama: "Mas Yoga Pratama", role: "Senior Instructor - Power & Ashtanga", sertifikat: "RYT-500, Ashtanga Authorized", pengalaman: "10 tahun", spesialisasi: ["Power Yoga", "Ashtanga", "Arm Balances", "Inversions"], bio: "Yoga memulai praktek yoga sebagai pelengkap latihannya sebagai atlet profesional. Ia kemudian jatuh cinta dengan Ashtanga dan belajar langsung di KPJAYI Mysore, India selama 6 bulan. Kelasnya fokus pada alignment yang presisi dan kekuatan.", quote: "Strength comes from overcoming the things you thought you couldn't.", kelasPerMinggu: 12, siswa: 300, instagram: "@yogapratama" },
  { nama: "Ibu Ratna Kusuma", role: "Specialist - Prenatal & Therapeutic", sertifikat: "RYT-200, Prenatal Certified", pengalaman: "7 tahun", spesialisasi: ["Prenatal Yoga", "Yin Yoga", "Restorative", "Yoga Therapy"], bio: "Ratna menemukan passion-nya dalam yoga prenatal setelah pengalaman pribadinya selama kehamilan. Ia berdedikasi membantu ibu hamil merasa nyaman dan siap secara fisik maupun mental untuk persalinan. Pendekatannya sangat gentle dan nurturing.", quote: "In stillness, we find strength. In softness, we find power.", kelasPerMinggu: 10, siswa: 250, instagram: "@ratna.yoga" },
];

const sertifikasi = [
  { nama: "Yoga Alliance RYT-500", desc: "Sertifikasi tertinggi yang diakui secara internasional" },
  { nama: "Yoga Alliance RYT-200", desc: "Standar dasar untuk instruktur yoga profesional" },
  { nama: "Prenatal Yoga Certified", desc: "Khusus untuk mengajar ibu hamil dengan aman" },
  { nama: "Ashtanga Authorized", desc: "Diakui langsung dari Mysore, India" },
];

const values = [
  { icon: Heart, title: "Passion", desc: "Kami mencintai yoga dan ingin membagikan manfaatnya" },
  { icon: GraduationCap, title: "Education", desc: "Terus belajar dan mengembangkan diri" },
  { icon: Users, title: "Community", desc: "Membangun komunitas yang supportive" },
  { icon: Star, title: "Excellence", desc: "Memberikan pengajaran berkualitas tinggi" },
];

export default function InstrukturPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Tim Kami</p>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-text mb-6">
              Instruktur <span className="text-primary italic">Bersertifikat</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Belajar dari instruktur profesional dengan sertifikasi internasional dan pengalaman bertahun-tahun dalam dunia yoga.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Award size={18} className="text-accent" />
                <span className="text-text">Sertifikasi Internasional</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock size={18} className="text-primary" />
                <span className="text-text">Pengalaman 7-15 Tahun</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users size={18} className="text-primary" />
                <span className="text-text">1000+ Siswa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Kenali Kami</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">Tim Instruktur</h2>
          </div>

          <div className="space-y-8">
            {instruktur.map((person, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="grid md:grid-cols-4">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/40 flex flex-col items-center justify-center p-8">
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white text-5xl font-heading font-semibold mb-4 shadow-lg">
                      {person.nama.split(' ').pop()?.charAt(0)}
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
                      <Instagram size={18} />
                      <span className="text-sm font-medium">{person.instagram}</span>
                    </a>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <div className="mb-4">
                      <h3 className="font-heading text-2xl font-semibold text-text mb-1">{person.nama}</h3>
                      <p className="text-primary font-medium">{person.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full text-accent font-medium">
                        <Award size={16} />{person.sertifikat}
                      </span>
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} className="text-primary" />{person.pengalaman} pengalaman
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.spesialisasi.map((s, j) => (
                        <span key={j} className="bg-secondary/50 px-3 py-1 rounded-full text-sm text-text">{s}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{person.bio}</p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-gray-500 mb-6">
                      &ldquo;{person.quote}&rdquo;
                    </blockquote>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-primary" />
                        <span className="text-gray-600"><strong className="text-text">{person.siswa}+</strong> siswa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-primary" />
                        <span className="text-gray-600"><strong className="text-text">{person.kelasPerMinggu}</strong> kelas/minggu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Kredensial</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">Sertifikasi Tim Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Semua instruktur kami memiliki sertifikasi yang diakui secara internasional</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {sertifikasi.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text mb-2">{item.nama}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Filosofi</p>
            <h2 className="font-heading text-4xl font-semibold text-text mb-4">Nilai-Nilai Kami</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Karir</p>
              <h2 className="font-heading text-4xl font-semibold text-text mb-6">Bergabung dengan Tim Kami</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kami selalu mencari instruktur yoga berbakat yang memiliki passion untuk mengajar dan ingin berbagi manfaat yoga dengan lebih banyak orang.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-gray-600">Sertifikasi RYT-200 atau lebih tinggi</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-gray-600">Minimal 2 tahun pengalaman mengajar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-gray-600">Passion untuk yoga dan pengembangan diri</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-gray-600">Kemampuan komunikasi yang baik</span>
                </div>
              </div>
              <Link href="/kontak" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors">
                Kirim Lamaran <ArrowRight size={18} />
              </Link>
            </div>
            <div className="bg-background rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-text mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text">Competitive Pay</p>
                    <p className="text-gray-600 text-sm">Kompensasi yang kompetitif berdasarkan pengalaman</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text">Continuing Education</p>
                    <p className="text-gray-600 text-sm">Dukungan untuk workshop dan pelatihan lanjutan</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text">Free Classes</p>
                    <p className="text-gray-600 text-sm">Akses gratis ke semua kelas di studio</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-text">Supportive Community</p>
                    <p className="text-gray-600 text-sm">Lingkungan kerja yang positif dan supportive</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">Siap Belajar dari yang Terbaik?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Coba kelas pertama Anda secara GRATIS bersama instruktur bersertifikat kami</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all">
              Daftar Trial Class <ArrowRight size={18} />
            </Link>
            <Link href="/jadwal" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Lihat Jadwal Kelas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
