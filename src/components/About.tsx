import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="relative py-28 bg-[#ECE8E1] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2F3A8F]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#3A7F7A]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B08968]" />
              <span className="text-[#B08968] text-xs font-medium tracking-[0.25em] uppercase">
                About Vidyabhyasam
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#2E2E33] mb-8 leading-[1.15]">
              Education Rooted in
              <br />
              <span className="italic text-[#2F3A8F]">Wisdom</span> and <span className="italic text-[#3A7F7A]">Purpose</span>
            </h2>
            
            <div className="space-y-5 text-[#5F6368] leading-relaxed">
              <p>
                Vidyabhyasam is more than an educational initiative—it is a 
                <span className="text-[#2E2E33] font-medium"> vision to nurture young minds </span>
                with knowledge that matters and values that last.
              </p>
              
              <p>
                We believe true education goes beyond textbooks, shaping individuals who 
                think deeply, live meaningfully, and contribute positively to society.
              </p>
              
              <p className="text-[#2E2E33]">
                Our approach integrates academic learning with character development, 
                creating an environment where curiosity flourishes and ethical foundations 
                are strengthened.
              </p>
            </div>
            
            {/* Decorative Quote */}
            <div className="mt-8 pl-6 border-l-2 border-[#B08968]/40">
              <p className="font-serif italic text-lg text-[#5F6368]">
                "Where knowledge meets wisdom, and learning becomes living."
              </p>
            </div>
            
            <Link 
              href="/about"
              className="inline-flex items-center gap-3 mt-10 text-[#2F3A8F] font-medium text-sm group"
            >
              <span className="border-b border-[#2F3A8F]/30 group-hover:border-[#2F3A8F] transition-colors pb-0.5">
                Learn more about our journey
              </span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Image Area */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-[#2F3A8F]/10 rounded-xl" />
              <div className="absolute -inset-8 border border-[#2F3A8F]/5 rounded-xl" />
              
              {/* Image Placeholder */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-[#d8d4cc] via-[#c9c4bb] to-[#bfb9af] shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#5F6368]/50">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-dashed border-[#5F6368]/30 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Featured Image</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#2F3A8F]/10 flex items-center justify-center">
                    <span className="text-[#2F3A8F] text-lg">✦</span>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-semibold text-[#2E2E33]">15+</div>
                  </div>
                </div>
                <p className="text-xs text-[#5F6368]">Years of dedicated service in value-based education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
