import Image from 'next/image';
import { Sponsor } from '@/types';

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  const goldSponsors = sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = sponsors.filter((s) => s.tier === 'silver');
  const bronzeSponsors = sponsors.filter((s) => s.tier === 'bronze');

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Podjetno omogočajo
          </p>
        </div>

        {/* Gold tier */}
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {goldSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-16 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  style={{ width: sponsor.width ? `${sponsor.width}px` : '160px' }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Silver tier */}
        {silverSponsors.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {silverSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-12 w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bronze tier */}
        {bronzeSponsors.length > 0 && (
          <div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {bronzeSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-10 w-24 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-center text-xs text-slate-400 mt-12 max-w-2xl mx-auto">
          Partnerji nimajo vpliva na uredniško politiko ali izbor zgodb. Vsa
          vsebina je uredniško neodvisna.
        </p>
      </div>
    </section>
  );
}
