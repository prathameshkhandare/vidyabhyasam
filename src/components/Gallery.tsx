'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
  { alt: 'Pongal Celebration at Kottivakkam Home Center', category: 'Events', src: '/images/events/pongal/pongal-1.jpg' },
  { alt: 'Children performing during Pongal', category: 'Events', src: '/images/events/pongal/pongal-2.jpg' },
  { alt: 'Traditional Pongal rituals', category: 'Culture', src: '/images/events/pongal/pongal-3.jpg' },
  { alt: 'Joyful moments at Kottivakkam Center', category: 'Events', src: '/images/events/pongal/pongal-4.jpg' },
  { alt: 'Students participating in Pongal festivities', category: 'Culture', src: '/images/events/pongal/pongal-5.jpg' },
  { alt: 'Community gathering for Pongal', category: 'Events', src: '/images/events/pongal/pongal-6.jpg' },
  { alt: 'Festive celebrations at Vidyabhyasam', category: 'Events', src: '/images/events/pongal/pongal-7.jpg' },
  { alt: 'Children celebrating together', category: 'Events', src: '/images/events/pongal/pongal-8.jpg' },
  { alt: 'Highlights from Pongal celebration', category: 'Events', src: '/images/events/pongal/pongal-9.jpg' },
  { alt: 'Students in classroom interaction', category: 'Education', src: '/images/centers/kotivakkam-2.jpg' },
  { alt: 'Community gathering', category: 'Community', src: '/images/centers/kotivakkam-3.jpg' },
  { alt: 'Teacher training session', category: 'Training', src: '/images/centers/neelankarai-1.jpg' },
  { alt: 'Cultural program', category: 'Culture', src: '/images/centers/venkatamangalam-1.jpg' },
];

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState(10);

  const loadMore = () => {
    setVisibleItems(prev => prev + 10);
  };

  return (
    <section className="relative py-20 bg-[#ECE8E1] overflow-hidden">
      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#2F3A8F]/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#2F3A8F]/10" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Moments Captured
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#2E2E33] mb-4">
            Our <span className="italic text-[#2F3A8F]">Gallery</span>
          </h2>
          
          <p className="text-[#374151] max-w-xl mx-auto text-base leading-relaxed">
            Glimpses from our journey—learning, growing, and building together.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.slice(0, visibleItems).map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="absolute inset-0">
                 <Image
                   src={image.src}
                   alt={image.alt}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-0 transition-all duration-500">
                <span className="text-[#fbbf24] text-[10px] font-bold uppercase tracking-widest mb-1 relative z-10 drop-shadow-sm">{image.category}</span>
                <p className="text-white text-sm font-serif font-medium relative z-10 drop-shadow-md leading-tight">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {visibleItems < galleryImages.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#2F3A8F] text-white font-medium text-sm rounded-full hover:bg-[#1e265c] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Load more images
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Full Gallery Link - Keep it as option or remove if Load More is enough */}
        <div className="text-center mt-8">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#2F3A8F] font-medium text-sm group"
          >
            <span>View full gallery page</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

