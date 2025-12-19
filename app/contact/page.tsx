"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, Instagram, MessageCircle, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Halo! Nama saya ${formData.name}.\n\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan: ${formData.message}`
    const whatsappUrl = `https://wa.me/6289633854491?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <Image src="/building-background.png" alt="Gedung Sekolah" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-cyan-900/80 to-teal-900/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-foreground">Hubungi Kami</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight drop-shadow-2xl">
              Mari Mulai Percakapan
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty leading-relaxed drop-shadow-lg px-2">
              Kami siap menjawab pertanyaan Anda tentang pendaftaran, tur sekolah, maupun program kami.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards - Mobile First */}
      <section className="py-8 sm:py-12 md:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/6289633854491"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="tel:+6289633854491"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Phone className="w-6 h-6" />
              <span className="text-sm font-medium">Telepon</span>
            </a>
            <a
              href="mailto:yayasanpendidikanislamannajih@gmail.com"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Mail className="w-6 h-6" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://instagram.com/yayasan_annajih"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">
                Kunjungi atau Hubungi Kami
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                Staf kami siap membantu pertanyaan pendaftaran, penjadwalan tur, atau informasi program.
              </p>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Address Card */}
                <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Alamat</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Perumnas Putra Wong Kito, Jl. Arus Jajar, Pekan Sabtu, Kec. Selebar, Bengkulu, KP 38213
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Phone Card */}
                <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telepon / WhatsApp</h3>
                      <a
                        href="tel:+6289633854491"
                        className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +62 89633854491
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email Card */}
                <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                      <a
                        href="mailto:yayasanpendidikanislamannajih@gmail.com"
                        className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors break-all"
                      >
                        yayasanpendidikanislamannajih@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Hours Card */}
                <Card className="p-4 sm:p-5 md:p-6 rounded-2xl border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Jam Operasional</h3>
                      <div className="text-sm sm:text-base text-muted-foreground space-y-0.5">
                        <p>Senin–Jumat: 07.30 - 17.30</p>
                        <p>Sabtu: 08.00 - 12.00</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Instagram Card - Hidden on mobile (shown in quick contacts) */}
                <Card className="hidden md:block p-4 sm:p-5 md:p-6 rounded-2xl border-border/50 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Instagram</h3>
                      <a
                        href="https://instagram.com/yayasan_annajih"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                      >
                        @yayasan_annajih
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <Card className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-border/50 shadow-xl bg-gradient-to-br from-white to-slate-50/30">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                  Kirim Pesan
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 md:mb-8">
                  Isi formulir di bawah ini dan kami akan membalas melalui WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-sm sm:text-base"
                      placeholder="Nama lengkap Anda"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-sm sm:text-base"
                        placeholder="nama@contoh.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        No. WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-sm sm:text-base"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Pesan Anda <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow resize-none text-sm sm:text-base"
                      placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-xl shadow-lg text-sm sm:text-base py-5 sm:py-6">
                    <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Kirim via WhatsApp
                  </Button>

                  <p className="text-xs sm:text-sm text-muted-foreground text-center">
                    Setelah dikirim, Anda akan diarahkan ke WhatsApp
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-stone-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">Lokasi Kami</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Temukan kami di peta</p>
            </div>

            <Card className="overflow-hidden rounded-2xl sm:rounded-3xl border-border/50 shadow-xl">
              <div className="aspect-video sm:aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  title="Lokasi RA An-Najih"
                  src="https://www.google.com/maps?q=-3.816594,102.309991&z=19&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>

            {/* Open in Google Maps */}
            <div className="text-center mt-4 sm:mt-6">
              <a
                href="https://maps.google.com/?q=-3.816594,102.309991"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/50 shadow-sm text-sm font-medium text-primary hover:bg-slate-50 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-6 sm:mb-8 md:mb-10 text-pretty px-2">
              Daftarkan anak Anda sekarang dan bergabung dengan keluarga besar Yayasan Annajih
            </p>
            <Link href="/daftar">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-6 sm:px-8 shadow-xl text-sm sm:text-base"
              >
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
