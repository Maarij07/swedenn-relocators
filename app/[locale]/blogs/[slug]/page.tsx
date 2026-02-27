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

      {/* Hero Section with Featured Image - Full Width */}
      <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden mt-[80px] sm:mt-[100px] lg:mt-[120px]">
        <Image
          src={blog.featured_image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pb-8 sm:pb-12 lg:pb-16">
            <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-white leading-tight mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white text-sm sm:text-base">
              <span>{publishDate}</span>
              <span>•</span>
              <span>By {blog.created_by}</span>
              {blog.categories.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex gap-2">
                    {blog.categories.map((cat) => (
                      <span key={cat.id} className="bg-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
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
          <div className="space-y-6 sm:space-y-8">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
