import { notFound } from 'next/navigation';
import { getPublishedPosts, getPostBySlug } from '@/lib/blog-api';
import { Calendar, Clock, User, ArrowUpRight, Tag } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Blog Post Not Found' };

  return {
    title: `${post.title} | ADDA Luxury Lycia`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

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
