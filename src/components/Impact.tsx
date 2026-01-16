import Link from 'next/link';

const impactItems = [
  {
    metric: '5,000+',
    label: 'Students Impacted',
    description: 'Young minds touched through our educational programs',
    icon: '🎓',
  },
  {
    metric: '50+',
    label: 'Schools Partnered',
    description: 'Educational institutions collaborating with our vision',
    icon: '🏫',
  },
  {
    metric: '200+',
    label: 'Teachers Trained',
    description: 'Educators empowered with values-based methodologies',
    icon: '✨',
  },
  {
    metric: '15+',
    label: 'Years of Service',
    description: 'Dedicated to transforming education with purpose',
    icon: '🌱',
  },
];

const Impact = () => {
  return (
    <section className="relative py-28 bg-[#ECE8E1] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#B08968]/30 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              Making a Difference
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6">
            Our <span className="italic text-[#2F3A8F]">Impact</span>
          </h2>
          
          <p className="text-[#5F6368] max-w-xl mx-auto text-lg leading-relaxed">
            Every number represents a story of transformation, a life touched, 
            a future shaped with purpose and wisdom.
          </p>
        </div>
        
        {/* Impact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactItems.map((item, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Metric */}
              <div className="font-serif text-4xl md:text-5xl font-semibold text-[#2F3A8F] mb-2 tracking-tight">
                {item.metric}
              </div>
              
              {/* Label */}
              <h3 className="text-[#2E2E33] font-medium text-lg mb-2">
                {item.label}
              </h3>
              
              {/* Description */}
              <p className="text-[#5F6368] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Quote Section */}
        <div className="mt-20 relative">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-8xl text-[#2F3A8F]/10 leading-none">
            "
          </div>
          
          <blockquote className="relative text-center max-w-3xl mx-auto">
            <p className="font-serif italic text-2xl md:text-3xl text-[#2E2E33] leading-relaxed mb-6">
              True education is not measured by grades alone, but by the depth of 
              understanding and the strength of character it builds.
            </p>
            <footer className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-[#B08968]" />
              <cite className="not-italic text-[#5F6368] text-sm tracking-wider uppercase">
                The Vidyabhyasam Philosophy
              </cite>
              <div className="w-8 h-px bg-[#B08968]" />
            </footer>
          </blockquote>
        </div>
        
        {/* Link */}
        <div className="text-center mt-16">
          <Link 
            href="/impact"
            className="inline-flex items-center gap-3 text-[#2F3A8F] font-medium text-sm group"
          >
            <span className="border-b border-[#2F3A8F]/30 group-hover:border-[#2F3A8F] transition-colors pb-0.5">
              Read our full impact report
            </span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Impact;
