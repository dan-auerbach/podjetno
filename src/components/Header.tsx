'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.svg"
              alt="PODJETNO"
              width={320}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Domov
            </Link>
            <Link
              href="/zgodbe"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Zgodbe
            </Link>
            <Link
              href="/partnerstvo#kontakt"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Partnerstvo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Odpri meni"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Domov
              </Link>
              <Link
                href="/zgodbe"
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zgodbe
              </Link>
              <Link
                href="/partnerstvo#kontakt"
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partnerstvo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
