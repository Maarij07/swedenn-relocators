'use client';

import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import { useParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

interface BlogDetail {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  content: string;
  published_at: string;
  created_by: string;
  categories: Array<{ id: number; name: string }>;
}

interface BlogDetailResponse {
  data: BlogDetail;
}

// Cache for blog details by slug
const blogDetailCache = new Map<string, { data: BlogDetail; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!slug) return;

      const now = Date.now();

      // Check cache first
      if (blogDetailCache.has(slug)) {
        const cachedData = blogDetailCache.get(slug)!;
        if (now - cachedData.timestamp < CACHE_DURATION) {
          if (isMountedRef.current) {
            setBlog(cachedData.data);
            setLoading(false);
          }
          return;
        }
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/miscellaneous/blog/details/${slug}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }

        const data: BlogDetailResponse = await response.json();
        
        // Cache the data
        blogDetailCache.set(slug, {
          data: data.data,
          timestamp: now,
        });

        if (isMountedRef.current) {
          setBlog(data.data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching blog details:', err);
        if (isMountedRef.current) {
          setError('Failed to load blog details');
          setBlog(null);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchBlogDetail();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex justify-center items-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-20">
          <div className="text-center">
            <p className="text-gray-600 text-lg">{error || 'Blog not found'}</p>
          </div>
        </div>
      </main>
    );
  }

  // Format date
  const publishDate = new Date(blog.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Section - Split Layout */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden mt-[80px] sm:mt-[100px] lg:mt-[120px] bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full w-full">
          {/* Left Side - Content */}
          <div className="relative bg-gradient-to-br from-black/70 via-black/50 to-gray-900/70 flex flex-col justify-between p-8 sm:p-12 lg:p-16 order-2 lg:order-1 h-full">
            {/* Title at Top */}
            <div>
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-white leading-tight">
                {blog.title}
              </h1>
            </div>
            
            {/* Author & Categories at Bottom */}
            <div className="space-y-6">
              {/* Author Section with Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden border-2 border-white">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.created_by}`}
                    alt={blog.created_by}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{blog.created_by}</p>
                  <p className="text-gray-300 text-xs">{publishDate}</p>
                </div>
              </div>

              {/* Categories */}
              {blog.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {blog.categories.map((cat) => (
                    <span
                      key={cat.id}
                      className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Shadow effect on left */}
            <div className="absolute -right-32 lg:-right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Side - Featured Image */}
          <div className="relative w-full h-full order-1 lg:order-2 overflow-hidden">
            <Image
              src={blog.featured_image}
              alt={blog.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
            
            {/* Share Button - Bottom Right */}
            <div className="absolute bottom-6 right-6 z-10">
              <div className="relative group">
                {/* Hidden Social Links - Appear on Hover */}
                <div className="absolute bottom-16 right-0 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {/* Twitter/X */}
                  <a
                    href="https://x.com/swedenrelocator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-slate-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{
                      transitionDelay: '0ms',
                    }}
                    aria-label="Share on Twitter"
                  >
                    <Image src="/f2.svg" alt="Twitter" width={18} height={18} className="object-contain" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/swedenrelocators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-slate-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{
                      transitionDelay: '50ms',
                    }}
                    aria-label="Share on LinkedIn"
                  >
                    <Image src="/f5.svg" alt="LinkedIn" width={18} height={18} className="object-contain" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sweden_relocators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-slate-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{
                      transitionDelay: '100ms',
                    }}
                    aria-label="Share on Instagram"
                  >
                    <Image src="/f3.svg" alt="Instagram" width={18} height={18} className="object-contain" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/Swedenrelocators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-slate-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{
                      transitionDelay: '150ms',
                    }}
                    aria-label="Share on Facebook"
                  >
                    <Image src="/f1.svg" alt="Facebook" width={18} height={18} className="object-contain" />
                  </a>
                </div>

                {/* Main Share Button */}
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: blog.title,
                        text: blog.excerpt,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="w-14 h-14 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Share"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.06c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Shadow effect overlay */}
            <div className="absolute inset-0 shadow-[inset_-100px_0_80px_rgba(0,0,0,0.3)] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Blog Content - Constrained Width */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10 mt-8 sm:mt-12 lg:mt-16">
          {/* Excerpt */}
          <div className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-200">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-semibold">
              {blog.excerpt}
            </p>
          </div>

          {/* Main Content */}
          <div 
            className="prose prose-sm sm:prose-base prose-p:text-gray-700 prose-p:leading-relaxed prose-h1:text-2xl prose-h1:font-bold prose-h1:text-gray-900 prose-h2:text-xl prose-h2:font-bold prose-h2:text-gray-900 prose-h3:text-lg prose-h3:font-semibold prose-h3:text-gray-900 prose-strong:font-semibold prose-strong:text-gray-900 prose-em:text-gray-700 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-700 prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:text-gray-700 prose-li:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

        </section>
      </div>
    </main>
  );
}
