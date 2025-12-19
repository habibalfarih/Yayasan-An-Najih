"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { useMemo, useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "activities" | "event" | "learning" | "facilities">(
    "all",
  )
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    { src: "/activities-outdoor.png", caption: "Kegiatan Luar Ruangan", category: "activities" },
    { src: "/activities1.jpeg", caption: "Aktivitas Seni & Kerajinan", category: "activities" },
    { src: "/activities2.jpeg", caption: "Belajar Sambil Bermain", category: "activities" },
    { src: "/events-award.png", caption: "Penerimaan Penghargaan", category: "event" },
    { src: "/events-dance.png", caption: "Penampilan Tari Siswa", category: "event" },
    {
      src: "/facilitites1.jpeg",
      caption: "Kebun yang hijau untuk media pembelajaran alamiah",
      category: "facilities",
    },
    { src: "/facilities2.jpeg", caption: "Ruang kelas ber AC dan kipas anak", category: "facilities" },
    { src: "/facilities-garden.png", caption: "Taman Bermain Hijau", category: "facilities" },
    { src: "/facilities3.jpeg", caption: "Ruang Kelas Nyaman", category: "facilities" },
    { src: "/facilities4.jpeg", caption: "Kebun yang hijau untuk media pembelajaran alamiah", category: "facilities" },
    { src: "/learning1.jpeg", caption: "Belajar bersama", category: "learning" },
    { src: "/learning2.jpeg", caption: "Belajar menulis dan membaca bersama", category: "learning" },
    { src: "/learning3.jpeg", caption: "Belajar dan bermain bersama", category: "learning" },
    { src: "/learning4.jpeg", caption: "Belajar dan bermain bersama", category: "learning" },
    { src: "/learning5.jpeg", caption: "Belajar dan bermain bersama", category: "learning" },
    { src: "/learning6.jpeg", caption: "Belajar dan bermain bersama", category: "learning" },
    { src: "/building-background.png", caption: "Gedung Sekolah", category: "facilities" },
    { src: "/mainberanda1.jpeg", caption: "Kegiatan Bersama", category: "activities" },
  ]

  const filteredImages = useMemo(
    () => (selectedCategory === "all" ? images : images.filter((image) => image.category === selectedCategory)),
    [selectedCategory],
  )

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }, [filteredImages.length])

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }, [filteredImages.length])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, goToPrevious, goToNext])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/events-dance.png" alt="Penampilan Siswa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/80 to-cyan-900/70" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg border border-white/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium text-foreground">Galeri Foto</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight drop-shadow-2xl">
              Momen Kegembiraan & Pembelajaran
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 text-pretty leading-relaxed drop-shadow-lg px-2">
              Jelajahi aktivitas dan pengalaman yang membuat setiap hari istimewa di Yayasan Annajih
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter + Grid */}
      <section className="py-10 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {[
              { value: "all", label: "Semua" },
              { value: "activities", label: "Aktivitas" },
              { value: "event", label: "Acara" },
              { value: "learning", label: "Pembelajaran" },
              { value: "facilities", label: "Fasilitas" },
            ].map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className="rounded-full px-4 sm:px-6 text-xs sm:text-sm h-8 sm:h-10"
                onClick={() => setSelectedCategory(category.value as typeof selectedCategory)}
                aria-pressed={selectedCategory === category.value}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {filteredImages.map((image, i) => (
              <Card
                key={i}
                className="group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  {/* Caption on hover - Desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    <p className="text-white font-medium text-sm md:text-base truncate">{image.caption}</p>
                  </div>
                </div>
                {/* Caption - Always visible on mobile */}
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-foreground line-clamp-2">{image.caption}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            aria-label="Selanjutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative w-full max-w-5xl max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] flex items-center justify-center">
              <Image
                src={filteredImages[currentImageIndex]?.src || ""}
                alt={filteredImages[currentImageIndex]?.caption || ""}
                width={1200}
                height={800}
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] w-auto h-auto object-contain rounded-lg sm:rounded-xl"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 sm:mt-6 text-center max-w-2xl px-4">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                {filteredImages[currentImageIndex]?.caption}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>

            {/* Thumbnail Navigation - Desktop */}
            <div className="hidden md:flex items-center justify-center gap-2 mt-6 overflow-x-auto max-w-full px-4">
              {filteredImages.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                    i === currentImageIndex
                      ? "ring-2 ring-white ring-offset-2 ring-offset-black/50 opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Dots Navigation - Mobile */}
            <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
              {filteredImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentImageIndex
                      ? "bg-white w-4"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Gambar ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Swipe hint - Mobile only */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center md:hidden">
            <p className="text-white/40 text-xs">Geser untuk navigasi • Ketuk untuk tutup</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-amber-600 via-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
              Lihat Sekolah Kami Secara Langsung
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-50 mb-8 sm:mb-10 text-pretty px-2">
              Rasakan lingkungan yang hangat dan mendukung di mana anak Anda akan berkembang
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
