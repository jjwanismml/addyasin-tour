/**
 * Blog yazısı sayfası — build sırasında CMS'den tüm sluglar çekilir,
 * her yazı için ayrı index.html üretilir. Yeni yazılar için web.config
 * BlogPostFallback kuralı _post shell'ine yönlendirir.
 */
import BlogPostClient from './BlogPostClient';

const CMS_URL = process.env.NEXT_PUBLIC_BLOG_API_URL ?? 'http://localhost:3000';
const API_KEY = process.env.NEXT_PUBLIC_BLOG_API_KEY ?? '';
const SITE_SLUG = 'addatours-yasin';

export async function generateStaticParams() {
  try {
    const res = await fetch(`${CMS_URL}/api/public/posts?site=${SITE_SLUG}`, {
      headers: { 'x-api-key': API_KEY },
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json() as Array<{ slug: string }>;
      if (Array.isArray(data) && data.length > 0) {
        const slugs = data.map(p => ({ slug: p.slug })).filter(s => s.slug);
        return [...slugs, { slug: '_post' }];
      }
    }
  } catch { }
  return [{ slug: '_post' }];
}

export const metadata = {
  title: 'Journal | ADDA Luxury Lycia Tours',
  description: 'Stories, adventures and discoveries from the heart of the Turkish Riviera.',
};

export default function Page() {
  return <BlogPostClient />;
}
