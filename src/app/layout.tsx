import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://podjetno.mojimediji.si'),
  title: {
    default: 'PODJETNO | Navdihujoče zgodbe podjetnikov',
    template: '%s | PODJETNO',
  },
  description:
    'Odkrivamo neznane zgodbe uspešnih podjetnikov po Sloveniji. Projekt Moji mediji deli navdihujoče zgodbe o delu, vztrajnosti in podjetniški miselnosti.',
  keywords: [
    'podjetništvo',
    'podjetniki',
    'Slovenija',
    'zgodbe',
    'Moji mediji',
    'lokalni podjetniki',
    'startup',
    'poslovna zgodba',
  ],
  authors: [{ name: 'Moji mediji d.o.o.' }],
  creator: 'Moji mediji d.o.o.',
  publisher: 'Moji mediji d.o.o.',
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    url: 'https://podjetno.mojimediji.si',
    siteName: 'PODJETNO',
    title: 'PODJETNO | Navdihujoče zgodbe podjetnikov',
    description:
      'Odkrivamo neznane zgodbe uspešnih podjetnikov po Sloveniji. Projekt Moji mediji deli navdihujoče zgodbe o delu, vztrajnosti in podjetniški miselnosti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PODJETNO - Navdihujoče zgodbe podjetnikov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PODJETNO | Navdihujoče zgodbe podjetnikov',
    description:
      'Odkrivamo neznane zgodbe uspešnih podjetnikov po Sloveniji.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://podjetno.mojimediji.si',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
