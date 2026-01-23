import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
  { alt: 'Students in classroom interaction', category: 'Education', src: '/images/centers/kotivakkam-2.jpg' },
  { alt: 'Community gathering', category: 'Community', src: '/images/centers/kotivakkam-3.jpg' },
  { alt: 'Teacher training session', category: 'Training', src: '/images/centers/neelankarai-1.jpg' },
  { alt: 'Cultural program', category: 'Culture', src: '/images/centers/venkatamangalam-1.jpg' },
  { alt: 'Classroom learning', category: 'Education', src: '/images/centers/kotivakkam-4.jpg' },
  { alt: 'Student activities', category: 'Activities', src: '/images/centers/kotivakkam-5.jpg' },
  { alt: 'Group study', category: 'Education', src: '/images/centers/kotivakkam-6.jpg' },
  { alt: 'Learning together', category: 'Community', src: '/images/centers/neelankarai-2.jpg' },
  { alt: 'Creative session', category: 'Arts', src: '/images/centers/neelankarai-3.jpg' },
  { alt: 'Center overview', category: 'Campus', src: '/images/centers/kotivakkam-1.jpg' },
  { alt: 'Village engagement', category: 'Outreach', src: '/images/centers/murugamangalam-1.jpg' },
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
          
          <p className="text-[#374151] max-w-xl mx-auto text-base leading-relaxed">
            Glimpses from our journey—learning, growing, and building together.
          </p>
        </div>
        
        {/* Compact Uniform Grid - Single row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.slice(0, 4).map((image, index) => (
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
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              
              {/* Gradient Overlay - Always visible at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              
              {/* Content - Always visible */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-0 transition-all duration-500">
                <span className="text-[#fbbf24] text-[10px] font-bold uppercase tracking-widest mb-1 relative z-10 drop-shadow-sm">{image.category}</span>
                <p className="text-white text-base font-serif font-medium relative z-10 drop-shadow-md">{image.alt}</p>
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
