import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'About Us', href: '/about' },
      { name: 'Initiatives', href: '/initiatives' },
      { name: 'Our Impact', href: '/impact' },
      { name: 'Media', href: '/media' },
    ],
    connect: [
      { name: 'Become a Volunteer', href: '/volunteer' },
      { name: 'Support the Vision', href: '/support' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="relative bg-[#1a1a1d] text-white overflow-hidden border-t border-[#B08968]/20">
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2F3A8F] via-[#3A7F7A] to-[#B08968]" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Decorative Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-[#B08968]/10 rounded-full blur-[80px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                <span className="font-serif text-2xl text-[#B08968] font-bold">V</span>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-medium text-white tracking-wide">
                  Vidyabhyasam
                </h3>
                <span className="text-xs text-[#B08968] tracking-[0.25em] uppercase font-medium">
                  Education with Purpose
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm mb-8 font-light text-lg">
              An initiative dedicated to nurturing minds with knowledge that matters 
              and values that last. Education rooted in wisdom and purpose for a 
              meaningful life.
            </p>
            
            {/* Quote */}
            <div className="border-l-2 border-[#B08968]/60 pl-6 py-1">
              <p className="font-serif italic text-white/90 text-lg">
                "Where learning transforms into living"
              </p>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[#B08968] text-sm font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B08968]"></span>
              Explore
            </h4>
            <ul className="space-y-5">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-base flex items-center gap-3 group hover:translate-x-1"
                  >
                    <span className="w-1.5 h-px bg-[#B08968] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[#B08968] text-sm font-bold tracking-[0.2em] uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B08968]"></span>
              Connect
            </h4>
            <ul className="space-y-5">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-base flex items-center gap-3 group hover:translate-x-1"
                  >
                    <span className="w-1.5 h-px bg-[#B08968] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter / CTA Section */}
        <div className="py-12 border-y border-white/5 mb-10 bg-white/[0.02] rounded-2xl px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-serif text-2xl text-white mb-2">Stay Connected</h4>
              <p className="text-gray-400">Receive updates on our initiatives and stories of impact.</p>
            </div>
            <Link 
              href="/contact"
              className="px-10 py-4 bg-[#B08968] text-white font-medium rounded-full hover:bg-[#9a7657] transition-all duration-300 shadow-lg shadow-[#B08968]/20 hover:shadow-[#B08968]/40 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Vidyabhyasam. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="italic text-gray-400">
                Education rooted in wisdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
