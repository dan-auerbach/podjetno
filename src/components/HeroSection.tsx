import Image from 'next/image';

const MEDIA_LINKS: { name: string; url: string }[] = [
  { name: 'Mariborinfo', url: 'https://mariborinfo.com' },
  { name: 'Ljubljanainfo', url: 'https://ljubljanainfo.com' },
  { name: 'Sobotainfo', url: 'https://sobotainfo.com' },
  { name: 'Ptujinfo', url: 'https://ptujinfo.com' },
  { name: 'Dolenjskainfo', url: 'https://dolenjskainfo.com' },
  { name: 'Gorenjskainfo', url: 'https://gorenjskainfo.com' },
  { name: 'TV IDEA', url: 'https://tvidea.si' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(74,222,128,0.1)_25%,rgba(74,222,128,0.1)_50%,transparent_50%,transparent_75%,rgba(74,222,128,0.1)_75%)] bg-[length:64px_64px]" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.svg"
              alt="PODJETNO - Navdihujoče zgodbe podjetnikov"
              width={1400}
              height={350}
              className="h-56 md:h-80 lg:h-96 w-auto"
              priority
            />
          </div>

          {/* Description */}
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Odkrivamo in delimo zgodbe podjetnikov iz vseh koncev Slovenije,
            ki z delom, vztrajnostjo in pogumom gradijo uspešna podjetja.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="#zgodbe"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors gap-2 text-lg"
            >
              Odkrijte zgodbe
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>

          {/* Portals list */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-500 mb-4">Objavljamo na:</p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-400">
              {MEDIA_LINKS.map((media) => (
                <a
                  key={media.name}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-colors"
                >
                  {media.name}
                </a>
              ))}
              <span className="px-3 py-1 bg-slate-800 rounded-full inline-flex items-center gap-2">
                + družbena omrežja
                <a
                  href="https://www.linkedin.com/company/moji-mediji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/mojimediji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
