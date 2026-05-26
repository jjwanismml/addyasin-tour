/**
 * Blog yazısı sayfası — client-side rendering
 *
 * generateStaticParams sadece `_post` shell'ini üretir.
 * web.config BlogPostFallback kuralı: bilinmeyen /blog/* yolları bu shell'e yönlendirilir.
 * BlogPostClient: window.location.pathname ile slug okuyup CMS'den çeker.
 */
import BlogPostClient from './BlogPostClient';

// Yalnızca fallback shell üret — yeni yazılar web.config üzerinden bu sayfaya gelir
export function generateStaticParams() {
  return [{ slug: '_post' }];
}

export const metadata = {
  title: 'Journal | ADDA Luxury Lycia Tours',
  description: 'Stories, adventures and discoveries from the heart of the Turkish Riviera.',
};

export default function Page() {
  return <BlogPostClient />;
}
