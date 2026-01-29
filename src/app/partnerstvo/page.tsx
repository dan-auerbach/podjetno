import type { Metadata } from 'next';
import Link from 'next/link';
import { STATS } from '@/types';

export const metadata: Metadata = {
  title: 'Partnerstvo',
  description:
    'Postanite partner projekta Podjetno in povežite svojo blagovno znamko z navdihujočimi zgodbami podjetnikov.',
  openGraph: {
    title: 'Partnerstvo | PODJETNO',
    description:
      'Postanite partner projekta Podjetno in povežite svojo blagovno znamko z navdihujočimi zgodbami podjetnikov.',
  },
  alternates: {
    canonical: 'https://podjetno.mojimediji.si/partnerstvo',
  },
};

export default function PartnershipPage() {
  const benefits = [
    {
      title: 'Široka pokritost',
      description:
        'Vaša blagovna znamka bo vidna na sedmih lokalnih portalih, TV IDEA in družbenih omrežjih.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Kredibilnost',
      description:
        'Povezava s kakovostno uredniško vsebino in zgodbami uspešnih podjetnikov.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: 'Lokalna publika',
      description:
        'Doseg lokalnih skupnosti in podjetij po vsej Sloveniji z visoko angažiranostjo.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Prilagodljivi paketi',
      description:
        'Različne oblike sodelovanja, prilagojene vašim potrebam in proračunu.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-green-400 uppercase tracking-wide mb-4">
              Partnerstvo
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Postanite del zgodbe
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Povežite svojo blagovno znamko z navdihujočimi zgodbami slovenskih
              podjetnikov in dosezite lokalne skupnosti po vsej Sloveniji.
            </p>
            <a
              href="mailto:info@mojimediji.si?subject=Povpraševanje za partnerstvo - Podjetno"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors gap-2 text-lg"
            >
              Pišite nam
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Zakaj postati partner?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Partnerstvo s projektom Podjetno prinaša vrsto prednosti za vašo
              blagovno znamko.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Naš doseg
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kot del medijske hiše Moji Mediji imamo dostop do široke publike
              po vsej Sloveniji.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {STATS.monthlyReaders}
              </div>
              <div className="text-sm font-medium text-slate-700">
                Mesečnih bralcev
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {STATS.monthlyViews}
              </div>
              <div className="text-sm font-medium text-slate-700">
                Mesečnih ogledov
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {STATS.fbFollowers}
              </div>
              <div className="text-sm font-medium text-slate-700">
                Facebook sledilcev
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {STATS.mediaOutlets}
              </div>
              <div className="text-sm font-medium text-slate-700">
                Medijskih portalov
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {STATS.postsPerMonth}
              </div>
              <div className="text-sm font-medium text-slate-700">
                Objav mesečno
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-slate-200">
              <div className="text-3xl md:text-4xl font-black text-green-600 mb-2">
                {STATS.newsrooms}
              </div>
              <div className="text-sm font-medium text-slate-700">
                Uredništva
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form / CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Stopite v stik
              </h2>
              <p className="text-slate-600">
                Zainteresirani za partnerstvo? Pišite nam in skupaj bomo našli
                najboljšo obliko sodelovanja.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@mojimediji.si"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      info@mojimediji.si
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Izdajatelj
                    </h3>
                    <p className="text-slate-600">
                      Moji Mediji d.o.o.
                      <br />
                      Wolfova 1
                      <br />
                      1000 Ljubljana
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a
                  href="mailto:info@mojimediji.si?subject=Povpraševanje za partnerstvo - Podjetno"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors gap-2"
                >
                  Pošlji povpraševanje
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-center text-slate-500 text-sm mt-6">
              Odgovorimo v roku 2 delovnih dni.
            </p>
          </div>
        </div>
      </section>

      {/* Back to stories */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/zgodbe"
            className="text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Nazaj na zgodbe
          </Link>
        </div>
      </section>
    </div>
  );
}
