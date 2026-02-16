export interface CompanyFacts {
  oneLiner: string;
  employees?: string;
  founded?: string;
  revenue?: string;
  website?: string;
}

export interface Story {
  id: string;
  title: string;
  dek: string;
  url: string;
  portal: string;
  date: string;
  companyName: string;
  region: string;
  industryTags: string[];
  contentType: 'article' | 'video' | 'podcast';
  hasVideo: boolean;
  featured: boolean;
  companyFacts: CompanyFacts;
  image?: string;
  entrepreneurPhoto?: string; // Fotografija podjetnika - priporočena dimenzija: 120x120px (1:1)
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  tier: 'gold' | 'silver' | 'bronze';
  width?: number;
}

export interface FilterOptions {
  regions: string[];
  industryTags: string[];
  portals: string[];
  years: string[];
}

export interface StoryFilters {
  region: string;
  industryTag: string;
  portal: string;
  year: string;
  search: string;
}

export const PORTAL_NAMES: Record<string, string> = {
  mariborinfo: 'Mariborinfo',
  ljubljanainfo: 'Ljubljanainfo',
  sobotainfo: 'Sobotainfo',
  ptujinfo: 'Ptujinfo',
  dolenjskainfo: 'Dolenjskainfo',
  gorenjskainfo: 'Gorenjskainfo',
  tvidea: 'TV IDEA',
};

export const MEDIA_LIST = [
  'Mariborinfo',
  'Ljubljanainfo',
  'Sobotainfo',
  'Ptujinfo',
  'Dolenjskainfo',
  'Gorenjskainfo',
  'TV IDEA',
];

export const STATS = {
  monthlyReaders: '572.946',
  monthlyViews: '12M',
  fbFollowers: '180k',
  postsPerMonth: '4.000',
  mediaOutlets: 7,
  newsrooms: 4,
} as const;
