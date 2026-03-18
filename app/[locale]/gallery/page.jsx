'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Types
/**
 * @typedef {{ id: number, title: string, description: string, event_date: string, event_address: string, images: string[], created_at: string }} Event
 */

// Module-level cache — persists across navigations within the session
const eventsCache = { data: null, timestamp: 0 };
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export default function GalleryPage() {
  const [events, setEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => { isMountedRef.current = false; };
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const now = Date.now();

      // Serve from cache if still fresh
      if (eventsCache.data && now - eventsCache.timestamp < CACHE_DURATION) {
        if (isMountedRef.current) {
          setEvents(eventsCache.data);
          setActiveEvent(eventsCache.data[0] ?? null);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${baseUrl}/miscellaneous/event/list`);
        if (!res.ok) throw new Error('Failed to fetch events');
        const json = await res.json();
        const fetched = json?.data?.events ?? [];

        // Store in cache
        eventsCache.data = fetched;
        eventsCache.timestamp = now;

        if (isMountedRef.current) {
          setEvents(fetched);
          setActiveEvent(fetched[0] ?? null);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMountedRef.current) {
          setError('Failed to load gallery. Please try again later.');
          setLoading(false);
        }
      }
    };

    fetchEvents();
  }, []);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }));
      if (e.key === 'ArrowLeft') setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }));
      if (e.key === 'Escape') setLightbox(l => ({ ...l, open: false }));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox.open]);

  const openLightbox = (images, index) => setLightbox({ open: true, images, index });

  return (
    <div className="min-h-screen bg-[#F8F9FE] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">

        {/* Hero */}
        <section className="mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Gallery
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
            A look into our events, offices, and the journeys we help make possible across Europe.
          </p>
        </section>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                <div className="aspect-[4/3] bg-gray-100" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                  <div className="h-3 bg-gray-100 rounded-full w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="text-xs sm:text-sm lg:text-base text-red-500">{error}</p>
        )}

        {/* Content */}
        {!loading && !error && events.length > 0 && (
          <>
            {/* Event tabs */}
            {events.length > 1 && (
              <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
                {events.map((ev) => (
                  <button
                    key={ev.id}
                    onClick={() => setActiveEvent(ev)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm lg:text-base font-semibold border transition-all duration-200 ${
                      activeEvent?.id === ev.id
                        ? 'bg-black text-white border-black'
                        : 'bg-[#F8F9FE] text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {ev.title}
                  </button>
                ))}
              </div>
            )}

            {/* Active event info */}
            {activeEvent && (
              <>
                <div className="mb-8 sm:mb-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{activeEvent.title}</h2>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-3">{activeEvent.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm lg:text-base text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#247FE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {activeEvent.event_date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#247FE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {activeEvent.event_address}
                    </span>
                    <span className="text-gray-400">{activeEvent.images.length} photos</span>
                  </div>
                </div>

                {/* Image grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {activeEvent.images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => openLightbox(activeEvent.images, idx)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#247FE1]"
                    >
                      <Image
                        src={src}
                        alt={`${activeEvent.title} photo ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && !error && events.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">No gallery events available yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(l => ({ ...l, open: false }))}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(l => ({ ...l, open: false }))}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length })); }}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.images[lightbox.index]}
              alt={`Photo ${lightbox.index + 1}`}
              width={1200}
              height={800}
              className="object-contain w-full max-h-[85vh] rounded-xl"
            />
            <p className="text-center text-white/60 text-xs sm:text-sm lg:text-base mt-3">
              {lightbox.index + 1} / {lightbox.images.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length })); }}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
