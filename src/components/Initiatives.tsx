import Link from 'next/link';

const initiatives = [
  {
    title: 'Holistic Education',
    description: 'Integrating academic excellence with character development and practical life skills for complete growth.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: '#2F3A8F',
  },
  {
    title: 'Value-Based Learning',
    description: 'Nurturing ethical foundations and timeless wisdom that guide students toward meaningful, purposeful lives.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: '#3A7F7A',
  },
  {
    title: 'Community Outreach',
    description: 'Extending quality educational opportunities to underserved communities, bridging gaps with compassion.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: '#B08968',
  },
  {
    title: 'Teacher Empowerment',
    description: 'Empowering educators with progressive methodologies and resources to inspire the next generation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: '#2F3A8F',
  },
];

const Initiatives = () => {
  return (
    <section className="relative py-28 bg-[#F4F1EC] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #2E2E33 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#B08968]" />
            <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
              What We Do
            </span>
            <div className="w-8 h-px bg-[#B08968]" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-6">
            Our <span className="italic text-[#2F3A8F]">Initiatives</span>
          </h2>
          
          <p className="text-[#5F6368] max-w-xl mx-auto text-lg leading-relaxed">
            Meaningful programs designed to transform education and nurture 
            well-rounded individuals for a better tomorrow.
          </p>
        </div>
        
        {/* Initiative Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 lg:p-10 rounded-xl border border-[#ECE8E1] hover:border-transparent hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-white to-[#F4F1EC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${initiative.color}10`,
                    color: initiative.color 
                  }}
                >
                  {initiative.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-2xl font-medium text-[#2E2E33] mb-4 group-hover:text-[#2F3A8F] transition-colors">
                  {initiative.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#5F6368] leading-relaxed">
                  {initiative.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: initiative.color }}>
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${initiative.color}08 50%)`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Link to full page */}
        <div className="text-center mt-16">
          <Link 
            href="/initiatives"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#2E2E33]/20 rounded-full text-[#2E2E33] font-medium text-sm hover:border-[#2F3A8F] hover:text-[#2F3A8F] transition-all duration-300 group"
          >
            Explore all initiatives
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
