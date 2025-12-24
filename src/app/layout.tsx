import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Serenity Yoga | Studio Yoga Jakarta | Kelas Yoga untuk Pemula",
  description: "Studio yoga dengan suasana tenang dan instruktur bersertifikat. Temukan ketenangan pikiran dan kesehatan tubuh di Serenity Yoga Studio Jakarta.",
  keywords: "yoga jakarta, studio yoga, kelas yoga pemula, hatha yoga, vinyasa yoga, prenatal yoga",
  openGraph: {
    title: "Serenity Yoga Studio",
    description: "Temukan Kedamaian dalam Dirimu - Studio yoga terbaik di Jakarta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
