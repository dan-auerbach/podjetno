'use client';

import { FilterOptions, StoryFilters } from '@/types';

interface StoryFiltersProps {
  filters: StoryFilters;
  filterOptions: FilterOptions;
  onFilterChange: (filters: StoryFilters) => void;
  totalResults: number;
}

export default function StoryFiltersComponent({
  filters,
  filterOptions,
  onFilterChange,
  totalResults,
}: StoryFiltersProps) {
  const handleChange = (key: keyof StoryFilters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFilterChange({
      region: '',
      industryTag: '',
      portal: '',
      year: '',
      search: '',
    });
  };

  const hasActiveFilters = filters.region || filters.search;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 mb-8">
      {/* Search and Region in one row */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Išči po naslovu ali podjetju..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Region */}
        <select
          value={filters.region}
          onChange={(e) => handleChange('region', e.target.value)}
          className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm appearance-none cursor-pointer md:w-48"
          aria-label="Filter po regiji"
        >
          <option value="">Vse regije</option>
          {filterOptions.regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Results and clear */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{totalResults}</span>{' '}
          {totalResults === 1 ? 'zgodba' : totalResults < 5 ? 'zgodbe' : 'zgodb'}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-slate-500 hover:text-slate-700 transition-colors inline-flex items-center gap-1"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Počisti filtre
          </button>
        )}
      </div>
    </div>
  );
}
