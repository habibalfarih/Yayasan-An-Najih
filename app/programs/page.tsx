import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Users,
  Music,
  Palette,
  Sun,
  Moon,
  Heart,
  GraduationCap,
  Languages,
  BookMarked,
  Computer,
  Calculator,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/learning1.jpeg" alt="Kegiatan Belajar" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/85 via-orange-900/80 to-rose-900/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-foreground">Program Kami</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight drop-shadow-2xl">
              Program untuk Setiap Tahap
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty leading-relaxed drop-shadow-lg px-2">
              Kurikulum yang sesuai dengan usia dirancang untuk menginspirasi rasa ingin tahu dan mendorong perkembangan holistik
            </p>
          </div>
        </div>
      </section>

      {/* Age Programs */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {/* Playgroup */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/kb.jpeg"
                    alt="Aktivitas kelompok bermain"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl -z-10 blur-3xl opacity-40" />
              </div>

              <div className="order-1 md:order-2">
                <Card className="p-8 rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-md">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-3">Kelompok Bermain</h2>
                  <p className="text-xl font-medium text-muted-foreground mb-6">Usia 2-3 Tahun</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Program Kelompok Bermain kami memperkenalkan balita pada kegembiraan belajar melalui aktivitas
                    berbasis permainan. Kami fokus pada sosialisasi, eksplorasi sensorik, dan membangun kepercayaan diri
                    dalam lingkungan yang mendukung.
                  </p>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-semibold text-foreground">Area Fokus Utama:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                        <span>Interaksi sosial dan berbagi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                        <span>Pengembangan keterampilan motorik halus dan kasar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                        <span>Pengenalan adab dan nilai-nilai Islam</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                        <span>Permainan dan eksplorasi sensorik</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>

            {/* Kindergarten A */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8 rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-md">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-3">RA A</h2>
                  <p className="text-xl font-medium text-muted-foreground mb-6">Usia 3-4 Tahun</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Program ini membangun keterampilan akademik dasar sambil mendorong kreativitas dan kemandirian.
                    Anak-anak terlibat dalam aktivitas pembelajaran terstruktur yang mempersiapkan mereka untuk
                    pendidikan yang lebih lanjut.
                  </p>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-semibold text-foreground">Area Fokus Utama:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Pra-literasi dan fonetik awal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Numerasi dasar dan berhitung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Cerita Islami dan doa dasar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>Seni kreatif dan musik</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/activities2.jpeg"
                    alt="Aktivitas TK A"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl -z-10 blur-3xl opacity-40" />
              </div>
            </div>

            {/* Kindergarten B */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/activities1.jpeg"
                    alt="Aktivitas TK B"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl -z-10 blur-3xl opacity-40" />
              </div>

              <div className="order-1 md:order-2">
                <Card className="p-8 rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6 shadow-md">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground mb-3">RA B</h2>
                  <p className="text-xl font-medium text-muted-foreground mb-6">Usia 4-5 Tahun</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Program paling lanjutan kami mempersiapkan anak-anak untuk sekolah dasar dengan fokus akademis yang
                    ditingkatkan. Siswa mengembangkan keterampilan berpikir kritis dan mendapatkan kepercayaan diri
                    dalam kemampuan mereka.
                  </p>
                  <div className="space-y-3 mb-6">
                    <h3 className="font-semibold text-foreground">Area Fokus Utama:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>Kesiapan membaca dan pemahaman</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>Konsep matematika dan pemecahan masalah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>Studi Islam lanjutan dan pengenalan Al-Quran</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>Eksplorasi dan penemuan sains</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-blue-50/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Program Khusus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Program kursus tambahan untuk memperkaya pembelajaran dan mengembangkan bakat anak
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Languages,
                title: "Kursus Bahasa Inggris",
                color: "from-blue-500 to-cyan-600",
                description:
                  "Program pembelajaran bahasa Inggris dengan metode interaktif dan menyenangkan untuk anak.",
              },
              {
                icon: BookMarked,
                title: "Kursus Bahasa Arab",
                color: "from-emerald-500 to-teal-600",
                description: "Pengenalan dan pembelajaran bahasa Arab sebagai bahasa Al-Quran sejak dini.",
              },
              {
                icon: Moon,
                title: "Kursus Mengaji",
                color: "from-indigo-500 to-purple-600",
                description: "Pembelajaran membaca Al-Quran dengan tajwid yang benar dan adab yang baik.",
              },
              {
                icon: Computer,
                title: "Kursus Komputer",
                color: "from-violet-500 to-purple-600",
                description: "Pengenalan teknologi komputer dasar untuk mempersiapkan era digital.",
              },
              {
                icon: Calculator,
                title: "Kursus Matematika",
                color: "from-amber-500 to-orange-600",
                description: "Program matematika tambahan untuk memperkuat pemahaman konsep dasar berhitung.",
              },
              {
                icon: GraduationCap,
                title: "Dan Lain-Lain",
                color: "from-rose-500 to-pink-600",
                description: "Program kursus lainnya yang disesuaikan dengan kebutuhan dan minat anak.",
              },
            ].map((course, i) => (
              <Card
                key={i}
                className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{course.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrichment Activities */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-stone-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Aktivitas Pengayaan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Di luar akademik, kami menawarkan berbagai aktivitas untuk memelihara perkembangan yang menyeluruh
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Moon,
                title: "Studi Islam",
                color: "from-indigo-500 to-purple-600",
                description: "Pengajaran Islam harian, praktik shalat, bacaan Al-Quran, dan pengembangan moral.",
              },
              {
                icon: Palette,
                title: "Seni Kreatif",
                color: "from-pink-500 to-rose-600",
                description: "Melukis, menggambar, kerajinan, dan aktivitas langsung yang mendorong kreativitas.",
              },
              {
                icon: Music,
                title: "Musik & Gerakan",
                color: "from-cyan-500 to-blue-600",
                description: "Lagu, irama, tari, dan aktivitas musikal untuk perkembangan fisik dan kognitif.",
              },
              {
                icon: Sun,
                title: "Bermain Luar Ruangan",
                color: "from-amber-500 to-orange-600",
                description: "Aktivitas luar ruangan yang aman, permainan, dan latihan fisik di taman bermain kami.",
              },
              {
                icon: BookOpen,
                title: "Waktu Cerita",
                color: "from-emerald-500 to-teal-600",
                description: "Sesi membaca harian dengan cerita Islami dan literatur yang sesuai usia.",
              },
              {
                icon: Users,
                title: "Keterampilan Sosial",
                color: "from-violet-500 to-purple-600",
                description: "Aktivitas kelompok, lingkaran berbagi, dan pelajaran empati dan kerjasama.",
              },
            ].map((activity, i) => (
              <Card
                key={i}
                className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-amber-600 via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
              Temukan Program yang Sempurna
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-8 sm:mb-10 text-pretty px-2">
              Mari diskusikan program mana yang paling sesuai untuk usia dan perkembangan anak Anda
            </p>
            <Link href="/daftar">
              <Button size="lg" variant="secondary" className="rounded-full px-6 sm:px-8 shadow-xl text-sm sm:text-base">
                Daftar Sekarang
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-slate-400">© 2025 Yayasan Annajih. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
