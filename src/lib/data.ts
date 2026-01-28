import type { Story, Sponsor, FilterOptions, StoryFilters } from '@/types';
import storiesData from '../../data/stories.json';
import sponsorsData from '../../data/sponsors.json';

export function getStories(): Story[] {
  return storiesData as Story[];
}

export function getSponsors(): Sponsor[] {
  return sponsorsData as Sponsor[];
}

export function getFeaturedStories(): Story[] {
  return getStories().filter((story) => story.featured);
}

export function getStoryById(id: string): Story | undefined {
  return getStories().find((story) => story.id === id);
}

export function getFilterOptions(): FilterOptions {
  const stories = getStories();

  const regions = [...new Set(stories.map((s) => s.region))].sort();
  const industryTags = [...new Set(stories.flatMap((s) => s.industryTags))].sort();
  const portals = [...new Set(stories.map((s) => s.portal))].sort();
  const years = [...new Set(stories.map((s) => new Date(s.date).getFullYear().toString()))].sort().reverse();

  return { regions, industryTags, portals, years };
}

export function filterStories(stories: Story[], filters: StoryFilters): Story[] {
  return stories.filter((story) => {
    // Region filter
    if (filters.region && story.region !== filters.region) {
      return false;
    }

    // Industry tag filter
    if (filters.industryTag && !story.industryTags.includes(filters.industryTag)) {
      return false;
    }

    // Portal filter
    if (filters.portal && story.portal !== filters.portal) {
      return false;
    }

    // Year filter
    if (filters.year) {
      const storyYear = new Date(story.date).getFullYear().toString();
      if (storyYear !== filters.year) {
        return false;
      }
    }

    // Search filter (title and company name)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesTitle = story.title.toLowerCase().includes(searchLower);
      const matchesCompany = story.companyName.toLowerCase().includes(searchLower);
      if (!matchesTitle && !matchesCompany) {
        return false;
      }
    }

    return true;
  });
}

export function sortStoriesByDate(stories: Story[], ascending = false): Story[] {
  return [...stories].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

export function addUtmParams(url: string, source = 'podjetno', medium = 'website', campaign = 'zgodbe'): string {
  const urlObj = new URL(url);
  urlObj.searchParams.set('utm_source', source);
  urlObj.searchParams.set('utm_medium', medium);
  urlObj.searchParams.set('utm_campaign', campaign);
  return urlObj.toString();
}

export function formatDate(dateString: string, locale = 'sl-SI'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
