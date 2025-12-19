"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  FileText,
  Users,
  CheckCircle2,
  AirVent,
  Camera,
  GraduationCap,
  Trees,
  Baby,
  Clock,
  Phone,
  MapPin,
  Instagram,
  Mail,
  MessageCircle,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { useState } from "react"

export default function DaftarPage() {
  const [formData, setFormData] = useState({
    namaOrangTua: "",
    nomorWhatsApp: "",
    email: "",
    namaAnak: "",
    usiaAnak: "",
    jenjang: "",
    alamat: "",
    informasiTambahan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format message for WhatsApp
    const message = `*FORMULIR PENDAFTARAN YAYASAN ANNAJIH*

*Data Orang Tua/Wali:*
Nama Lengkap: ${formData.namaOrangTua}
No. WhatsApp: ${formData.nomorWhatsApp}
Email: ${formData.email || "-"}

*Data Anak:*
Nama Lengkap: ${formData.namaAnak}
Usia: ${formData.usiaAnak} tahun
Jenjang yang Diminati: ${formData.jenjang}
Alamat Domisili: ${formData.alamat}

*Informasi Tambahan:*
${formData.informasiTambahan || "-"}

Terima kasih!`

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/6289633854491?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/ra.jpeg" alt="Siswa RA Annajih" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/80 to-amber-900/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-emerald-700">Tahun Ajaran 2026/2027</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight drop-shadow-2xl">
              Daftar Sekarang
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty leading-relaxed drop-shadow-lg px-2">
              Bergabunglah dengan keluarga besar Yayasan Annajih. Mari wujudkan generasi Qur'ani yang cerdas berakhlak
            </p>
          </div>
        </div>
      </section>

      {/* Informasi PPDB & Program Unggulan */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-white to-emerald-50/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wide">PPDB 2026/2027</p>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-1 sm:mt-2">Informasi Pendaftaran</h2>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 sm:px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold self-start sm:self-auto">
                  Gelombang 1
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <p>
                  Periode pendaftaran: <span className="font-semibold text-foreground">08 Desember – 31 Januari 2026</span>
                </p>
                <p>
                  Biaya pendaftaran: <span className="font-semibold text-foreground">Rp100.000</span>
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-semibold">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  Gratis untuk anak yatim piatu
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Program Unggulan Annajih</h3>
                <ol className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground list-decimal list-inside">
                  <li>Anak mampu melafalkan surah, doa-doa, dan hadits pilihan</li>
                  <li>Anak mampu melafalkan bacaan dan gerakan shalat</li>
                  <li>Anak mampu melafalkan alfabet dan bagian tubuh dalam Bahasa Inggris</li>
                  <li>Outdoor Learning Environment (pembelajaran luar ruangan)</li>
                  <li>Program pengembangan motorik dan sosial</li>
                </ol>
              </div>
            </Card>

            <Card className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-rose-50 to-orange-50/40">
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wide">Visi</p>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">Mewujudkan generasi qur&apos;ani</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Generasi cerdas berakhlak, kreatif, berwawasan digital, dan peduli lingkungan.
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-orange-700 uppercase tracking-wide">Misi</p>
                  <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-inside mt-2">
                    <li>Menanamkan kecintaan dan pengamalan nilai Al-Qur&apos;an.</li>
                    <li>Mengembangkan potensi fisik, intelektual, sosial, emosional, dan spiritual anak secara holistik.</li>
                    <li>Menyelenggarakan pembelajaran kreatif dengan integrasi teknologi digital.</li>
                    <li>Membiasakan sikap peduli dan bertanggung jawab terhadap lingkungan melalui kegiatan sehari-hari.</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Rincian Biaya */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-sky-50/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">Rincian Biaya</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Transparan untuk Laki-laki dan Perempuan</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-border/50 shadow-md bg-gradient-to-br from-blue-50 to-indigo-50/50">
                <p className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wide">Laki-laki</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-1 sm:mt-2">Rp2.475.000</p>
              </Card>
              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-border/50 shadow-md bg-gradient-to-br from-pink-50 to-rose-50/50">
                <p className="text-xs sm:text-sm font-semibold text-pink-700 uppercase tracking-wide">Perempuan</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-1 sm:mt-2">Rp2.525.000</p>
              </Card>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-border/50 shadow-md bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  Administrasi
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Pendaftaran</span><span className="font-medium">Rp100.000</span></li>
                  <li className="flex justify-between"><span>SPP/bulan</span><span className="font-medium">Rp100.000</span></li>
                  <li className="flex justify-between"><span>ATK/tahun</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Buku Paket</span><span className="font-medium">Rp250.000</span></li>
                  <li className="flex justify-between"><span>Uang bangunan</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Raport & lembar kerja</span><span className="font-medium">Rp100.000</span></li>
                </ul>
                <div className="mt-3 sm:mt-4 pt-3 border-t border-border">
                  <p className="text-sm sm:text-base font-bold text-foreground">Total: Rp950.000</p>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-border/50 shadow-md bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Star className="w-4 h-4 text-emerald-600" />
                  </div>
                  Kegiatan
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Pekan Gizi</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Ajang Kreasi</span><span className="font-medium">Rp150.000</span></li>
                  <li className="flex justify-between"><span>Haflah Akhirusannah</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Outing Kelas</span><span className="font-medium">Rp200.000</span></li>
                </ul>
                <div className="mt-3 sm:mt-4 pt-3 border-t border-border">
                  <p className="text-sm sm:text-base font-bold text-foreground">Total: Rp750.000</p>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-border/50 shadow-md bg-white sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-600" />
                  </div>
                  Seragam
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Baju kotak-kotak</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Baju Muslim</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Baju Batik</span><span className="font-medium">Rp200.000</span></li>
                  <li className="flex justify-between"><span>Baju Olahraga</span><span className="font-medium">Rp175.000</span></li>
                  <li className="flex justify-between"><span>Jilbab</span><span className="font-medium">Rp50.000</span></li>
                </ul>
                <div className="mt-3 sm:mt-4 pt-3 border-t border-border">
                  <p className="text-sm sm:text-base font-bold text-foreground">Total: Rp825.000</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Persyaratan Pendaftaran */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Persyaratan Pendaftaran</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Dokumen yang perlu Bapak/Ibu siapkan</p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              <Card className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md mx-auto">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-foreground mb-0.5 sm:mb-1 md:mb-2">Akta Kelahiran</h3>
                <p className="text-xs sm:text-xs md:text-sm text-muted-foreground hidden sm:block">Fotokopi</p>
              </Card>

              <Card className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-foreground mb-0.5 sm:mb-1 md:mb-2">Kartu Keluarga</h3>
                <p className="text-xs sm:text-xs md:text-sm text-muted-foreground hidden sm:block">Fotokopi</p>
              </Card>

              <Card className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-md mx-auto">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-foreground mb-0.5 sm:mb-1 md:mb-2">Pas Foto</h3>
                <p className="text-xs sm:text-xs md:text-sm text-muted-foreground hidden sm:block">Ukuran 3x4</p>
              </Card>
            </div>

            <Card className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-border/50 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Jenjang Pendidikan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-blue-100">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    KB
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Kelompok Bermain</p>
                    <p className="text-xs text-muted-foreground">2-3 Tahun</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-indigo-100">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    A
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">RA Kelompok A</p>
                    <p className="text-xs text-muted-foreground">4-5 Tahun</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-rose-100">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    B
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">RA Kelompok B</p>
                    <p className="text-xs text-muted-foreground">5-6 Tahun</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fasilitas RA Annajih */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-stone-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Fasilitas RA Annajih</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Lingkungan belajar yang nyaman dan modern</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-3 sm:mb-4 shadow-md mx-auto">
                  <AirVent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Ruangan Ber-AC</h3>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-3 sm:mb-4 shadow-md mx-auto">
                  <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">CCTV</h3>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 sm:mb-4 shadow-md mx-auto">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Guru Profesional</h3>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3 sm:mb-4 shadow-md mx-auto">
                  <Trees className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">Garden Learning</h3>
              </Card>
            </div>

            {/* Biaya Penitipan Anak */}
            <Card className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-border/50 shadow-lg mt-6 sm:mt-8 bg-gradient-to-br from-white to-slate-50/30">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Baby className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-600" />
                Biaya Penitipan Anak
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Waktu: 07.30 - 16.00 WIB</p>
                    <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                      <p>0-1 tahun: Rp 700.000</p>
                      <p>2-6 tahun: Rp 500.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Fasilitas Playground</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Area bermain yang aman dan menyenangkan untuk perkembangan motorik anak
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulir Pendaftaran */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">Formulir Pendaftaran</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
                Mohon isi formulir berikut dengan lengkap. Data akan dikirim ke tim kami via WhatsApp
              </p>
            </div>

            <Card className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-border/50 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Data Orang Tua */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground border-b border-border pb-2 sm:pb-3">
                    Data Orang Tua / Wali
                  </h3>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="namaOrangTua" className="text-sm font-medium">
                      Nama Lengkap Orang Tua / Wali <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="namaOrangTua"
                      name="namaOrangTua"
                      type="text"
                      placeholder="Contoh: Bapak Ahmad / Ibu Siti"
                      value={formData.namaOrangTua}
                      onChange={handleChange}
                      required
                      className="rounded-xl text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="nomorWhatsApp" className="text-sm font-medium">
                        Nomor WhatsApp <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="nomorWhatsApp"
                        name="nomorWhatsApp"
                        type="tel"
                        placeholder="081234567890"
                        value={formData.nomorWhatsApp}
                        onChange={handleChange}
                        required
                        className="rounded-xl text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email (Opsional)
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Data Anak */}
                <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground border-b border-border pb-2 sm:pb-3">Data Anak</h3>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="namaAnak" className="text-sm font-medium">
                      Nama Lengkap Anak <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="namaAnak"
                      name="namaAnak"
                      type="text"
                      placeholder="Contoh: Muhammad Rizki"
                      value={formData.namaAnak}
                      onChange={handleChange}
                      required
                      className="rounded-xl text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="usiaAnak" className="text-sm font-medium">
                        Usia Anak <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="usiaAnak"
                        name="usiaAnak"
                        type="number"
                        placeholder="5"
                        value={formData.usiaAnak}
                        onChange={handleChange}
                        required
                        min="0"
                        max="14"
                        className="rounded-xl text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="jenjang" className="text-sm font-medium">
                        Jenjang <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="jenjang"
                        name="jenjang"
                        value={formData.jenjang}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Pilih</option>
                        <option value="KB">KB (2-3 Tahun)</option>
                        <option value="RA A">RA A (4-5 Tahun)</option>
                        <option value="RA B">RA B (5-6 Tahun)</option>
                        <option value="Program Khusus">Khusus (4-14 Tahun)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="alamat" className="text-sm font-medium">
                      Alamat Domisili <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="alamat"
                      name="alamat"
                      placeholder="Masukkan alamat lengkap"
                      value={formData.alamat}
                      onChange={handleChange}
                      required
                      className="rounded-xl min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="informasiTambahan" className="text-sm font-medium">
                      Informasi Tambahan (Opsional)
                    </Label>
                    <Textarea
                      id="informasiTambahan"
                      name="informasiTambahan"
                      placeholder="Pertanyaan atau informasi tambahan"
                      value={formData.informasiTambahan}
                      onChange={handleChange}
                      className="rounded-xl min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full shadow-lg py-5 sm:py-6 text-sm sm:text-base">
                  <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Kirim Formulir via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Data Bapak/Ibu akan dikirim ke tim kami melalui WhatsApp untuk proses pendaftaran lebih lanjut.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Hubungi Kami - Redesigned */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">Hubungi Kami</h2>
              <p className="text-sm sm:text-base md:text-lg text-emerald-100">Ada pertanyaan? Tim kami siap membantu Anda</p>
            </div>

            {/* Quick Contact Buttons - Mobile */}
            <div className="grid grid-cols-2 gap-3 mb-6 sm:hidden">
              <a
                href="https://wa.me/6289633854491"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium text-sm">WhatsApp</span>
              </a>
              <a
                href="tel:+6289633854491"
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium text-sm">Telepon</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Tim Pendaftaran */}
              <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-0 shadow-xl bg-white/95 backdrop-blur-sm lg:col-span-2">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Tim Pendaftaran</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      <a href="tel:+6289633854491" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span className="font-medium">Umi Musdalifah:</span>
                        <span>089633854491</span>
                      </a>
                      <a href="tel:+6282177628568" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span className="font-medium">Umi Inten Emilya:</span>
                        <span>082177628568</span>
                      </a>
                      <a href="tel:+6282176731420" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span className="font-medium">Umi Siti Handika:</span>
                        <span>082176731420</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Alamat */}
              <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">Alamat</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Perumnas Putra Wong Kito, Jl. Arus Jajar, Pekan Sabtu, Kec. Selebar, Bengkulu
                    </p>
                  </div>
                </div>
              </Card>

              {/* Instagram */}
              <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">Instagram</h3>
                    <a
                      href="https://instagram.com/yayasan_annajih"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-pink-600 hover:text-pink-700 font-medium"
                    >
                      @yayasan_annajih
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Follow untuk update terbaru</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Main Footer */}
          <div className="py-10 sm:py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Logo & Description */}
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                    <Image
                      src="/images/logo-yayasan.png"
                      alt="Yayasan Annajih Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">Yayasan Annajih</h3>
                    <p className="text-xs text-slate-400">Pendidikan Islam</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed max-w-md text-slate-400">
                  Mewujudkan generasi Qur'ani yang cerdas berakhlak, kreatif, berwawasan digital dan peduli lingkungan.
                </p>

                {/* Social Links - Mobile */}
                <div className="flex gap-3 mt-4 sm:mt-6">
                  <a
                    href="https://wa.me/6289633854491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://instagram.com/yayasan_annajih"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:yayasanpendidikanislamannajih@gmail.com"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigasi</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs" className="hover:text-white transition-colors">
                      Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="hover:text-white transition-colors">
                      Galeri
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kontak</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>089633854491</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>Perumnas Putra Wong Kito, Jl. Arus Jajar, Bengkulu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 py-5 sm:py-6">
            <p className="text-xs sm:text-sm text-slate-500 text-center">
              © 2025 Yayasan Annajih. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
