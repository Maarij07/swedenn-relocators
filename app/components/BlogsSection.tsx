'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, memo } from 'react';

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
}

interface BlogsResponse {
  data: {
    blogs: Blog[];
  };
}

// Cache object to store blogs data
const blogsCache = new Map<string, { data: Blog[]; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

function BlogsSectionContent() {
  const { i18n } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || i18n.language || 'en';
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredBlog, setHoveredBlog] = useState<number | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const cacheKey = 'featured-blogs';
      const now = Date.now();

      // Check if data is in cache and not expired
      if (blogsCache.has(cacheKey)) {
        const cachedData = blogsCache.get(cacheKey)!;
        if (now - cachedData.timestamp < CACHE_DURATION) {
          if (isMountedRef.current) {
            setBlogs(cachedData.data);
            setLoading(false);
          }
          return;
        }
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/miscellaneous/blog/featured/lists`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data: BlogsResponse = await response.json();
        const blogsData = data.data.blogs || [];

        // Store in cache
        blogsCache.set(cacheKey, {
          data: blogsData,
          timestamp: now,
        });

        if (isMountedRef.current) {
          setBlogs(blogsData);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        if (isMountedRef.current) {
          setBlogs([]);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();
  }, []);

  // Translations for UI elements
  const texts = {
    heading: i18n.language === 'sv' ? 'Våra bloggar' : 'Our Blogs',
    readMore: i18n.language === 'sv' ? 'Läs mer' : 'Read More',
    showMore: i18n.language === 'sv' ? 'Visa fler' : 'Show More',
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        {/* Centered Heading */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div className="bg-blue-50 rounded-lg border-l-4 border-blue-500 px-4 sm:px-5 py-3 sm:py-4">
            <div className="w-full text-center px-4 sm:px-6 lg:px-8 xl:px-12">
              <h2 className="text-[#0f172a] font-extrabold text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.2] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
                {texts.heading}
              </h2>
              <p className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] mx-auto">
                Relocation and career tips for the Nordics
              </p>
            </div>
          </div>
        </div>

        {/* Blog Layout: Featured on Left, Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 sm:mb-14 lg:mb-16">
          {/* Featured Blog Card - Left (50%) */}
          {blogs.length > 0 && (
            <div
              key={blogs[0].id}
              className="lg:col-span-1 group rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-slate-100 border-b-4 border-b-blue-500"
              onMouseEnter={() => setHoveredBlog(blogs[0].id)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden bg-[#EBF4FF]">
                <Image
                  src={blogs[0].featured_image}
                  alt={blogs[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover object-center transition-transform duration-500 ease-out ${
                    hoveredBlog === blogs[0].id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-7 lg:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">
                  {i18n.language === 'sv' ? 'ARTIKEL' : 'ARTICLE'}
                </p>
                <h3 className="text-lg sm:text-xl lg:text-lg font-bold text-slate-900 mb-2 leading-tight line-clamp-2">
                  {blogs[0].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {blogs[0].excerpt}
                </p>
                <a
                  href={`/${locale}/blogs/${blogs[0].slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm group/btn"
                >
                  {texts.readMore}
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </div>
          )}

          {/* Blog Cards Grid - Right (50%) */}
          <div className="lg:col-span-1 space-y-6">
            {blogs.slice(1).map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col sm:flex-row gap-5 rounded-3xl bg-white border border-slate-100 border-b-4 border-b-blue-500 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2"
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
              >
                {/* Image Section */}
                <div className="relative w-full sm:w-[200px] lg:w-[180px] 4k:w-[240px] h-[220px] sm:h-[180px] lg:h-[160px] 4k:h-[200px] flex-shrink-0 overflow-hidden bg-[#EBF4FF]">
                  <Image
                    src={blog.featured_image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className={`object-cover object-center transition-transform duration-500 ease-out ${
                      hoveredBlog === blog.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 sm:p-6 lg:p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">
                      {i18n.language === 'sv' ? 'ARTIKEL' : 'ARTICLE'}
                    </p>
                    <h3 className="text-base sm:text-lg lg:text-[0.95rem] 4k:text-lg font-bold text-slate-900 mb-2 leading-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-start mt-3">
                    <a
                      href={`/${locale}/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm group/btn"
                    >
                      {texts.readMore}
                      <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Show more button */}
        <div className="flex justify-center">
          <Link href={`/${locale}/blogs`}>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 sm:px-10 py-3 text-sm sm:text-base font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5">
              {texts.showMore}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(BlogsSectionContent);