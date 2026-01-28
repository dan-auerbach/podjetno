'use client';

import { useState, useMemo } from 'react';
import { Story, StoryFilters, FilterOptions } from '@/types';
import { filterStories, sortStoriesByDate } from '@/lib/data';
import StoryCard from './StoryCard';
import StoryFiltersComponent from './StoryFilters';

interface StoriesGridProps {
  stories: Story[];
  filterOptions: FilterOptions;
  showFilters?: boolean;
  initialFilters?: Partial<StoryFilters>;
  maxItems?: number;
}

const defaultFilters: StoryFilters = {
  region: '',
  industryTag: '',
  portal: '',
  year: '',
  search: '',
};

export default function StoriesGrid({
  stories,
  filterOptions,
  showFilters = true,
  initialFilters = {},
  maxItems,
}: StoriesGridProps) {
  const [filters, setFilters] = useState<StoryFilters>({
    ...defaultFilters,
    ...initialFilters,
  });

  const filteredStories = useMemo(() => {
    const filtered = filterStories(stories, filters);
    const sorted = sortStoriesByDate(filtered);
    return maxItems ? sorted.slice(0, maxItems) : sorted;
  }, [stories, filters, maxItems]);

  return (
    <div>
      {showFilters && (
        <StoryFiltersComponent
          filters={filters}
          filterOptions={filterOptions}
          onFilterChange={setFilters}
          totalResults={filteredStories.length}
        />
      )}

      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-slate-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Ni zadetkov
          </h3>
          <p className="text-slate-500">
            Poskusite z drugačnimi filtri ali iskalnim nizom.
          </p>
        </div>
      )}
    </div>
  );
}
