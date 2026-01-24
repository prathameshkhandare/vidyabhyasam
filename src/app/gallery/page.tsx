import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components';

const galleryImages = [
  { alt: 'Activities at Kotivakkam Center', category: 'Education', src: '/images/gallery/new_batch/kotivakkam-1.jpg' },
  { alt: 'Community Engagement', category: 'Community', src: '/images/gallery/new_batch/kotivakkam-2.jpg' },
  { alt: 'Learning Session', category: 'Education', src: '/images/gallery/new_batch/kotivakkam-3.jpg' },
  { alt: 'Group Activities', category: 'Activities', src: '/images/gallery/new_batch/kotivakkam-4.jpg' },
  { alt: 'Neelankarai Center', category: 'Training', src: '/images/gallery/new_batch/kotivakkam-5.jpg' },
  { alt: 'Student Interaction', category: 'Community', src: '/images/gallery/new_batch/neelankarai-3.jpg' },
  { alt: 'Murugamangalam Outreach', category: 'Outreach', src: '/images/gallery/new_batch/murugamangalam-1.jpg' },
  { alt: 'Venkatamangalam Session', category: 'Culture', src: '/images/gallery/new_batch/venkatamangalam-1.jpg' },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
