import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BookOpen, Target, Eye, Heart, Award, Users, Home } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/teachers-annajih.png" alt="Tim Pengajar Yayasan Annajih" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-amber-900/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-foreground">Tentang Lembaga Kami</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight drop-shadow-2xl">
              Visi & Misi Kami
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty leading-relaxed drop-shadow-lg px-2">
              Berkomitmen menumbuhkan kecerdasan dengan keunggulan, kasih sayang, dan nilai-nilai Islam
            </p>
          </div>
        </div>
      </section>

      {/* School Profile */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/mainberanda1.jpeg"
                  alt="School building"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl -z-10 blur-3xl opacity-40" />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Landasan Kesuksesan Sepanjang Hayat
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Yayasan Annajih menjadi mercusuar pendidikan Islam berkualitas di komunitas kami. Kami memadukan
                kekayaan ajaran Islam dengan metodologi pendidikan modern untuk menghadirkan pengalaman belajar holistik
                yang berakar pada keimanan.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Fasilitas kami, pendidik berpengalaman, dan lingkungan Islami yang hangat menjadi fondasi sempurna bagi
                perjalanan pendidikan anak Anda. Kami percaya setiap anak unik dan berhak mendapat perhatian personal
                untuk mencapai potensi terbaiknya sebagai Muslim.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dengan ukuran kelas kecil dan kurikulum yang menyeimbangkan keunggulan akademik serta pembentukan
                karakter Islami, kami menyiapkan anak untuk sukses di dunia dan akhirat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-stone-50/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Visi Kami</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mewujudkan generasi qur'ani yang cerdas berakhlak, kreatif, berwawasan digital dan peduli lingkungan.
              </p>
            </Card>

            <Card className="p-10 rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Misi Kami</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Menanamkan kecintaan dan pengamalan nilai Al-Qur'an.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Mengembangkan potensi fisik, intelektual, sosial, emosional dan spiritual anak secara holistik
                    (menyeluruh).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Menyelenggarakan pembelajaran kreatif dengan integrasi teknologi digital.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    Membiasakan sikap peduli dan bertanggung jawab terhadap lingkungan hidup melalui kegiatan
                    sehari-hari.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nilai-Nilai Utama Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Prinsip yang memandu setiap langkah kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Iman & Akhlak",
                color: "from-rose-500 to-pink-600",
                description: "Menanamkan nilai-nilai Islam dan akhlak mulia melalui keteladanan dan pembiasaan harian.",
              },
              {
                icon: Users,
                title: "Komunitas & Rasa Hormat",
                color: "from-emerald-500 to-teal-600",
                description: "Membangun komunitas peduli yang merayakan keberagaman dan menghargai setiap individu.",
              },
              {
                icon: Award,
                title: "Keunggulan & Pertumbuhan",
                color: "from-amber-500 to-orange-600",
                description:
                  "Mengejar keunggulan pendidikan sambil memupuk bakat dan potensi unik setiap anak.",
              },
              {
                icon: Home,
                title: "Keamanan & Kesejahteraan",
                color: "from-blue-500 to-indigo-600",
                description: "Menjaga lingkungan aman dan sehat agar anak nyaman bereksplorasi dan belajar.",
              },
              {
                icon: BookOpen,
                title: "Inovasi & Kreativitas",
                color: "from-purple-500 to-violet-600",
                description: "Mendorong rasa ingin tahu, kreativitas, dan berpikir kritis lewat aktivitas yang menarik.",
              },
              {
                icon: Target,
                title: "Kemitraan & Kepercayaan",
                color: "from-cyan-500 to-blue-600",
                description: "Membangun kemitraan kuat dengan keluarga melalui komunikasi terbuka dan saling percaya.",
              },
            ].map((value, i) => (
              <Card
                key={i}
                className="p-8 rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              Bergabunglah Dengan Kami
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-8 sm:mb-10 text-pretty px-2">
              Lihat sendiri bagaimana kami memelihara pikiran muda dalam lingkungan yang penuh kasih dan berpusat pada iman
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
