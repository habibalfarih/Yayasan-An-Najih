"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-white">
            <Image
              src="/images/logo-yayasan.png"
              alt="Logo Yayasan Annajih"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Yayasan Annajih</h1>
            <p className="text-xs text-muted-foreground">Pendidikan Islam</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/programs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Program
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Galeri
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Kontak
          </Link>
          <Link href="/daftar">
            <Button className="rounded-full px-6 shadow-sm">Daftar Sekarang</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-white">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/programs"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Program
            </Link>
            <Link
              href="/gallery"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link href="/daftar" onClick={() => setMobileMenuOpen(false)}>
              <Button className="rounded-full w-full mt-2">Daftar Sekarang</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
