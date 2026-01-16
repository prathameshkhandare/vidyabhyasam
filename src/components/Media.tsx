import Link from 'next/link';

const stories = [
  {
    title: 'The Journey of Holistic Learning',
    excerpt: 'How our approach to education transforms not just minds, but hearts and characters—creating individuals who think deeply and live purposefully.',
    date: 'January 2026',
    category: 'Philosophy',
  },
  {
    title: 'Voices from the Classroom',
    excerpt: 'Teachers share their experiences with value-based education methodologies and the profound impact on student development.',
    date: 'December 2025',
    category: 'Stories',
  },
  {
    title: 'Building Tomorrow\'s Leaders',
    excerpt: 'A glimpse into our leadership development program and how it shapes young minds to become compassionate leaders.',
    date: 'November 2025',
    category: 'Programs',
  },
];

const Media = () => {
  return (
    <section className="relative py-28 bg-[#F4F1EC] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(45deg, transparent 45%, #2F3A8F 45%, #2F3A8F 55%, transparent 55%)`,
        backgroundSize: '30px 30px'
      }} />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Stories & Updates
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6">
            Media & <span className="italic text-[#2F3A8F]">Stories</span>
          </h2>
          
          <p className="text-[#5F6368] max-w-xl mx-auto text-lg leading-relaxed">
            Reflections, insights, and stories from our journey in transforming education.
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                {/* Placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d8d4cc] via-[#c9c4bb] to-[#bfb9af]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#5F6368]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#5F6368]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#2F3A8F]/0 group-hover:bg-[#2F3A8F]/10 transition-colors duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#2F3A8F] text-xs font-medium rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-px bg-[#B08968]" />
                  <span className="text-[#B08968] text-xs font-medium tracking-wider uppercase">
                    {story.date}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-[#2E2E33] mb-3 group-hover:text-[#2F3A8F] transition-colors duration-300 leading-snug">
                  {story.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-[#5F6368] text-sm leading-relaxed line-clamp-2">
                  {story.excerpt}
                </p>
                
                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-[#2F3A8F] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Read article</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Link */}
        <div className="text-center mt-16">
          <Link 
            href="/media"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#2E2E33]/20 rounded-full text-[#2E2E33] font-medium text-sm hover:border-[#2F3A8F] hover:text-[#2F3A8F] transition-all duration-300 group"
          >
            View all stories
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Media;
