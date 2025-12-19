import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Shield, BookOpen, Users, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/mainberanda1.jpeg" alt="Background" fill className="object-cover" priority />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/75 to-teal-900/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Pendaftaran Dibuka untuk Tahun 2026-2027</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-2xl">
              Tempat Muslim Muda{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Berkembang
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 text-pretty leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Lingkungan pendidikan Islam yang mendukung di mana iman bertemu dengan keunggulan. Kami memberikan fondasi
              untuk pembelajaran seumur hidup yang berakar pada nilai-nilai Islam dan pengembangan karakter.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/daftar">
                <Button size="lg" className="rounded-full px-8 shadow-xl hover:shadow-2xl transition-all">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-white/30"
                >
                  Jelajahi Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Mengapa Keluarga Memilih Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Kami menggabungkan keunggulan akademik dengan pembangunan karakter dalam lingkungan yang hangat dan
              mendukung
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Nilai-Nilai Islam</h3>
              <p className="text-muted-foreground leading-relaxed">
                Memelihara iman, karakter, dan perkembangan moral melalui ajaran dan praktik Islam setiap hari.
              </p>
            </Card>

            <Card className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-md">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Guru Berpengalaman</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pendidik berdedikasi dan bersertifikat yang memahami perkembangan anak usia dini dan gaya belajar
                individu.
              </p>
            </Card>

            <Card className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50/30">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Lingkungan Aman</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fasilitas yang aman dan bersih dengan protokol keamanan yang komprehensif dan staf yang penuh perhatian.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-stone-50/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-border/50 mb-6">
                <span className="text-sm font-medium text-muted-foreground">Tentang Lembaga Kami</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Membangun Pemimpin Muslim Masa Depan, Hari Ini
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Di Yayasan Annajih, kami telah menyediakan pendidikan Islam yang luar biasa yang berakar pada
                nilai-nilai Al-Quran dan metodologi pengajaran modern. Pendekatan holistik kami memastikan setiap anak
                berkembang secara akademis, sosial, dan spiritual sesuai dengan prinsip-prinsip Islam.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kami percaya dalam memelihara potensi unik setiap anak sambil menumbuhkan cinta belajar dan identitas
                Islam yang mendalam yang bertahan seumur hidup.
              </p>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-6 border-2 bg-transparent">
                  Pelajari Lebih Lanjut Tentang Kami
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/learning5.jpeg"
                  alt="Anak-anak belajar"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl -z-10 blur-2xl opacity-50" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl -z-10 blur-2xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Program Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Kurikulum yang sesuai dengan usia dirancang untuk menginspirasi rasa ingin tahu dan mendorong perkembangan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Kelompok Bermain",
                age: "2-3 Tahun",
                color: "from-pink-500 to-rose-600",
                description: "Pengenalan pembelajaran melalui bermain, sosialisasi, dan pengalaman sensorik.",
              },
              {
                title: "RA A",
                age: "3-4 Tahun",
                color: "from-amber-500 to-orange-600",
                description: "Membangun keterampilan dasar dalam literasi, numerasi, dan ekspresi kreatif.",
              },
              {
                title: "RA B",
                age: "4-5 Tahun",
                color: "from-teal-500 to-emerald-600",
                description: "Persiapan lanjutan untuk sekolah dasar dengan fokus akademis yang ditingkatkan.",
              },
              {
                title: "Program Khusus",
                age: "Semua Usia",
                color: "from-blue-500 to-indigo-600",
                description: "Kursus Bahasa Inggris, Bahasa Arab, Mengaji, Komputer, Matematika dan lainnya.",
              },
            ].map((program, i) => (
              <Card
                key={i}
                className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">{program.age}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                <Link
                  href="/programs"
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 bg-transparent">
                Lihat Semua Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-amber-600 via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
              Siap Memulai Perjalanan Anak Anda?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-8 sm:mb-10 text-pretty px-2">
              Jadwalkan tur dan temukan bagaimana kami dapat memelihara potensi anak Anda
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/daftar">
                <Button size="lg" variant="secondary" className="rounded-full px-6 sm:px-8 shadow-xl text-sm sm:text-base">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="tel:+6289633854491">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm text-sm sm:text-base"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white p-1">
                  <Image
                    src="/images/logo-yayasan.png"
                    alt="Logo Yayasan Annajih"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">Yayasan Annajih</h3>
                  <p className="text-xs text-slate-400">Pendidikan Islam</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Memelihara pikiran muda Muslim dengan nilai-nilai Islam dan pendidikan modern.
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li>
                  <Link href="/" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Program
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-xs sm:text-sm hover:text-white transition-colors">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Program</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                <li className="text-xs sm:text-sm">Kelompok Bermain</li>
                <li className="text-xs sm:text-sm">RA Kelompok A</li>
                <li className="text-xs sm:text-sm">RA Kelompok B</li>
                <li className="text-xs sm:text-sm">Program Khusus</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">Info Kontak</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Perumnas Putra Wong Kito, Jl. Arus Jajar, Pekan Sabtu, Kec. Selebar, Bengkulu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+62 89633854491</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all">yayasanpendidikanislamannajih@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-slate-800 text-center">
            <p className="text-xs sm:text-sm text-slate-400">© 2025 Yayasan Annajih. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
