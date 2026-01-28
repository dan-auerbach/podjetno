import type { Metadata } from 'next';
import { StoriesGrid } from '@/components';
import { getStories, getFilterOptions } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Vse zgodbe',
  description:
    'Brskajte po vseh podjetniških zgodbah projekta Podjetno. Filtrirajte po regiji, panogi, portalu ali letu.',
  openGraph: {
    title: 'Vse zgodbe | PODJETNO',
    description:
      'Brskajte po vseh podjetniških zgodbah projekta Podjetno. Filtrirajte po regiji, panogi, portalu ali letu.',
  },
  alternates: {
    canonical: 'https://podjetno.mojimediji.si/zgodbe',
  },
};

export default function StoriesPage() {
  const stories = getStories();
  const filterOptions = getFilterOptions();

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-green-600 uppercase tracking-wide mb-2">
            Arhiv
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Vse podjetniške zgodbe
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Raziščite navdihujoče zgodbe podjetnikov iz različnih koncev
            Slovenije. Uporabite filtre za iskanje po regiji, panogi ali portalu.
          </p>
        </div>

        {/* Stories Grid with Filters */}
        <StoriesGrid
          stories={stories}
          filterOptions={filterOptions}
          showFilters={true}
        />
      </div>
    </div>
  );
}
