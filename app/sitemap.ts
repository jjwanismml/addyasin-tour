import type { MetadataRoute } from 'next';
import { EXCURSIONS } from '@/lib/excursions-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://addatours.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const excursionUrls: MetadataRoute.Sitemap = EXCURSIONS.map((e) => ({
    url: `${SITE_URL}/excursions/${e.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/excursions/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...excursionUrls,
  ];
}
