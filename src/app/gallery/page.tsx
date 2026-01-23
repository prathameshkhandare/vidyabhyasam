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

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6">
            Our <span className="italic text-[#2F3A8F]">Gallery</span>
          </h1>
          <p className="text-[#374151] max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive look at our journey, events, and the smiles we've nurtured across all our centers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
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
      </div>
    </div>
  );
}
