import type { MetadataRoute } from 'next';
import { TOURS } from '@/lib/data';
import { EXCURSIONS } from '@/lib/excursions-data';
import { BLOG_POSTS } from '@/lib/blog-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://addatours.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/tours/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/excursions/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/vip-transfer/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const tourUrls: MetadataRoute.Sitemap = TOURS.map((t) => ({
    url: `${SITE_URL}/tours/${t.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const excursionUrls: MetadataRoute.Sitemap = EXCURSIONS.map((e) => ({
    url: `${SITE_URL}/excursions/${e.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...tourUrls, ...excursionUrls, ...blogUrls];
}
