import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="PODJETNO"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Navdihujoče zgodbe uspešnih podjetnikov po Sloveniji delimo na
              sedmih lokalnih medijih, TV IDEA ter družbenih omrežjih.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/mojimediji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/moji-mediji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  href="/zgodbe"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Vse zgodbe
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerstvo"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Partnerstvo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="mailto:info@mojimediji.si"
                  className="hover:text-white transition-colors"
                >
                  info@mojimediji.si
                </a>
              </li>
              <li>Moji mediji d.o.o.</li>
              <li>Wolfova 1</li>
              <li>1000 Ljubljana</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Moji mediji d.o.o. Vse pravice pridržane.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/zasebnost"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Zasebnost
            </Link>
            <Link
              href="/piskotki"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Piškotki
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
