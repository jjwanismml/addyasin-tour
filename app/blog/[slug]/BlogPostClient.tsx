'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, ArrowUpRight, Tag } from 'lucide-react';

const CMS_URL = process.env.NEXT_PUBLIC_BLOG_API_URL ?? '';
const API_KEY = process.env.NEXT_PUBLIC_BLOG_API_KEY ?? '';
const SITE_SLUG = 'addatours-yasin';

interface BlogPost {
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

function mapPost(p: Record<string, unknown>): BlogPost {
  return {
    id: p.id as string,
    slug: p.slug as string,
    title: p.title as string,
    excerpt: (p.excerpt as string) ?? '',
    content: (p.content as string) ?? '',
    image: (p.coverImageUrl as string) ?? '',
    date: p.publishedAt ? (p.publishedAt as string).slice(0, 10) : '',
    readTime: '5 min read',
    category: ((p.tags as string[])?.[0]) ?? 'Travel',
    author: (p.author as string) ?? 'Yasin Çelik',
    tags: (p.tags as string[]) ?? [],
    metaTitle: (p.metaTitle as string) ?? null,
    metaDescription: (p.metaDescription as string) ?? null,
  };
}

// undefined = yükleniyor, null = bulunamadı, object = yazı
export default function BlogPostClient() {
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);

  useEffect(() => {
    const pathSlug = window.location.pathname
      .split('/blog/')[1]
      ?.replace(/\/$/, '')
      ?.split('?')[0]
      ?.split('#')[0];

    if (!pathSlug || pathSlug === '_post') { setPost(null); return; }
    if (!CMS_URL || !API_KEY) { setPost(null); return; }

    fetch(`${CMS_URL}/api/public/posts?site=${SITE_SLUG}`, {
      headers: { 'x-api-key': API_KEY },
    })
      .then(r => r.ok ? r.json() : [])
      .then((data: Record<string, unknown>[]) => {
        const mapped = Array.isArray(data) ? data.map(mapPost) : [];
        setPost(mapped.find(p => p.slug === pathSlug) ?? null);
      })
      .catch(() => setPost(null));
  }, []);

  // Yükleniyor
  if (post === undefined) {
    return (
      <main className="min-h-screen bg-[#020202] text-[#e5e5e5] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" aria-hidden="true" />
          <p className="text-gray-400 text-sm font-light">Loading article...</p>
        </div>
      </main>
    );
  }

  // Bulunamadı
  if (!post) {
    return (
      <main className="min-h-screen bg-[#020202] text-[#e5e5e5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4 font-light">Article Not Found</h1>
          <a href="/blog" className="inline-flex items-center gap-3 text-[#D4AF37] text-[11px] uppercase tracking-[0.4em]">
            <ArrowUpRight className="w-4 h-4 rotate-[225deg]" strokeWidth={1} />
            Back to Journal
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020202] text-[#e5e5e5] overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-30 filter grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] font-light text-white tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-gray-400 text-xs md:text-sm font-light">
            <div className="flex items-center gap-2">
              <User className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt */}
          <div className="mb-12 md:mb-16 cinematic-reveal">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed gold-text-gradient">
              {post.excerpt}
            </p>
          </div>

          {/* HTML Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-p:text-gray-400 prose-p:font-light prose-p:text-base prose-p:md:text-[17px] prose-p:leading-[2.2] prose-p:md:leading-[2.4] prose-p:mb-8
              prose-headings:text-white prose-headings:font-serif prose-headings:font-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-[#D4AF37]/20">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1.5"
                >
                  <Tag className="w-3 h-3" strokeWidth={1.5} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Back link */}
      <div className="pb-24 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <a
            href="/blog"
            className="inline-flex items-center gap-3 text-[#D4AF37] text-[11px] uppercase tracking-[0.4em] hover:gap-4 transition-all"
          >
            <ArrowUpRight className="w-4 h-4 rotate-[225deg]" strokeWidth={1} />
            Back to Journal
          </a>
        </div>
      </div>
    </main>
  );
}
