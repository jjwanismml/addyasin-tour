'use client';

import { BLOG_POSTS } from '@/lib/blog-data';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

export default function BlogPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.cinematic-reveal').forEach((el) => observer.observe(el));
    setTimeout(() => document.body.classList.add('intro-loaded'), 100);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#020202] text-[#e5e5e5] overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
            alt="Journal"
            className="w-full h-full object-cover opacity-30 filter grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              The Journal
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] font-light text-white tracking-tight">
            <span className="text-mask">
              <span>Stories</span>
            </span>
            <span className="text-mask">
              <span className="flex items-center gap-4 md:gap-6">
                <span className="w-12 md:w-24 h-[1px] md:h-[2px] gold-bg-gradient block mt-2 md:mt-4"></span>
                <i className="font-light gold-text-gradient">From Lycia</i>
              </span>
            </span>
          </h1>
          <p className="mt-6 md:mt-8 text-gray-400 text-xs md:text-[13px] font-light leading-relaxed tracking-wide max-w-lg">
            Insights, adventures, and discoveries from the heart of the Turkish Riviera.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {BLOG_POSTS.map((post, idx) => (
              <article
                key={post.id}
                className="group cinematic-reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <a href={`/blog/${post.slug}`} className="block h-full">
                  <div className="gold-border-gradient p-1 h-full">
                    <div className="bg-[#050505] h-full flex flex-col hover:bg-[#0a0a0a] transition-colors duration-700">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-60"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="mb-4">
                          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]">
                            {post.category}
                          </span>
                        </div>

                        <h2 className="font-serif text-xl md:text-2xl text-white font-light leading-tight mb-4 group-hover:text-[#D4AF37] transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-6 text-xs md:text-sm text-gray-500 font-light">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" strokeWidth={1.5} />
                            <span>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" strokeWidth={1.5} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-[#D4AF37]/20 flex items-center gap-3 text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                          <span>Read More</span>
                          <ArrowUpRight className="w-4 h-4" strokeWidth={1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
