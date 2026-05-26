// Blog listesi artık client-side fetch ile güncelleniyor (BlogPageClient)
// Yeni CMS yazıları rebuild gerektirmeden anında görünür
import BlogPageClient from './BlogPageClient';

export const metadata = {
  title: 'Journal | ADDA Luxury Lycia Tours',
  description: 'Stories, adventures and discoveries from the heart of the Turkish Riviera.',
  alternates: { canonical: 'https://addatours.com/blog' },
};

export default function BlogPage() {
  return <BlogPageClient posts={[]} />;
}
