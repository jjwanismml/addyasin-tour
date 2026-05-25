import { getPublishedPosts } from '@/lib/blog-api';
import BlogPageClient from './BlogPageClient';

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <BlogPageClient posts={posts} />;
}
