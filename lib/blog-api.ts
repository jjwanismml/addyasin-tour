export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  metaTitle: string | null;
  metaDescription: string | null;
}

const CMS_URL = process.env.BLOG_API_URL ?? "http://localhost:3000";
const API_KEY = process.env.BLOG_API_KEY ?? "";
const SITE_SLUG = "addatours-yasin";

function mapPost(p: Record<string, unknown>): BlogPost {
  return {
    id: p.id as string,
    slug: p.slug as string,
    title: p.title as string,
    excerpt: (p.excerpt as string) ?? "",
    content: (p.content as string) ?? "",
    image: (p.coverImageUrl as string) ?? "",
    date: p.publishedAt ? (p.publishedAt as string).slice(0, 10) : "",
    readTime: "5 min read",
    category: ((p.tags as string[])?.[0]) ?? "Travel",
    author: (p.author as string) ?? "Yasin Çelik",
    tags: (p.tags as string[]) ?? [],
    metaTitle: (p.metaTitle as string) ?? null,
    metaDescription: (p.metaDescription as string) ?? null,
  };
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${CMS_URL}/api/public/posts?site=${SITE_SLUG}`, {
      headers: { "x-api-key": API_KEY },
      cache: "force-cache",
    });
    if (!res.ok) return [];
    const data = await res.json() as Record<string, unknown>[];
    return data.map(mapPost);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/public/posts/${slug}?site=${SITE_SLUG}`, {
      headers: { "x-api-key": API_KEY },
      cache: "force-cache",
    });
    if (!res.ok) return null;
    const data = await res.json() as Record<string, unknown>;
    return mapPost(data);
  } catch {
    return null;
  }
}
