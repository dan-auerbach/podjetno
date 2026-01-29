import Link from 'next/link';
import {
  HeroSection,
  AboutSection,
  StoriesGrid,
  SponsorsSection,
  StatsSection,
} from '@/components';
import { getStories, getSponsors, getFilterOptions } from '@/lib/data';

export default function HomePage() {
  const stories = getStories();
  const sponsors = getSponsors();
  const filterOptions = getFilterOptions();

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Stories Section */}
      <section id="zgodbe" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-green-600 uppercase tracking-wide mb-2">
              Zgodbe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Najnovejše podjetniške zgodbe
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Odkrijte navdihujoče zgodbe podjetnikov iz različnih koncev
              Slovenije in različnih panog.
            </p>
          </div>

          <StoriesGrid
            stories={stories}
            filterOptions={filterOptions}
            showFilters={true}
            maxItems={6}
          />

          <div className="text-center mt-12">
            <Link
              href="/zgodbe"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors gap-2"
            >
              Vse zgodbe
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Stats */}
      <StatsSection />

      {/* Sponsors */}
      <SponsorsSection sponsors={sponsors} />
    </>
  );
}
