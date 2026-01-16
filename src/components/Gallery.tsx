import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
  { alt: 'Students in classroom', category: 'Education' },
  { alt: 'Community event', category: 'Community' },
  { alt: 'Teacher training', category: 'Training' },
  { alt: 'Cultural program', category: 'Culture' },
];

const Gallery = () => {
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
          
          <p className="text-[#5F6368] max-w-xl mx-auto text-base leading-relaxed">
            Glimpses from our journey—learning, growing, and building together.
          </p>
        </div>
        
        {/* Compact Uniform Grid - Single row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d8d4cc] via-[#c5c0b8] to-[#b8b2a8]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#5F6368]/40">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full border border-dashed border-current flex items-center justify-center bg-white/10 backdrop-blur-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider">{image.category}</span>
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A8F]/90 via-[#2F3A8F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-[#B08968] text-[10px] font-medium uppercase tracking-widest mb-1">{image.category}</span>
                <p className="text-white text-base font-serif font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Link */}
        <div className="text-center mt-12">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#2F3A8F]/20 text-[#2F3A8F] font-medium text-sm rounded-full hover:bg-[#2F3A8F] hover:text-white transition-all duration-300 group hover:shadow-lg"
          >
            View full gallery
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
