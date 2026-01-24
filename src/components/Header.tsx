'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about', 
      dropdown: [
        { name: 'Our Inspiration', href: '/about/inspiration' },
        { name: 'Our Trust', href: '/about/trust' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Governance', href: '/about/governance' }
      ]
    },
    { 
      name: 'Initiatives', 
      href: '/initiatives',
      dropdown: [
        { name: 'Food', href: '/initiatives/food' },
        { name: 'Education', href: '/initiatives/education' },
        { name: 'Values', href: '/initiatives/values' }
      ]
    },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Media', href: '/media' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-[#2E2E33] text-[#F4F1EC] py-2 text-xs hidden lg:block transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:connect@vidyabhyasam.org" className="flex items-center gap-2 hover:text-[#B08968] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              connect@vidyabhyasam.org
            </a>
            <a href="tel:+917386898991" className="flex items-center gap-2 hover:text-[#B08968] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 73868 98991
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholder */}
            {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map(social => (
              <a key={social} href="#" className="hover:text-[#B08968] transition-colors" aria-label={social}>
                 <span className="text-xs font-serif">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`w-full transition-all duration-500 border-b border-[#2E2E33]/5 ${
         isScrolled 
           ? 'bg-[#F4F1EC] backdrop-blur-md shadow-md py-2' 
           : 'bg-[#F4F1EC] py-4'
       }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-105">
                 <Image 
                   src="/images/vidyabhyasam-logo.png" 
                   alt="Vidyabhyasam Logo" 
                   fill
                   className="object-contain drop-shadow-sm"
                   priority
                 />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-[#2E2E33] leading-none tracking-tight group-hover:text-[#2F3A8F] transition-colors">
                  Vidyabhyasam
                </span>
                <span className="font-sans text-[10px] text-[#374151] tracking-widest uppercase mt-1 font-semibold">
                  Enriching communities
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={item.href}
                    className="py-2 text-[#374151] hover:text-[#2F3A8F] text-sm font-bold font-sans uppercase tracking-wide transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-md overflow-hidden transition-all duration-300 transform origin-top ${
                      activeDropdown === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}>
                      <div className="py-2 border-t-2 border-[#2F3A8F]">
                        {item.dropdown.map(subItem => (
                          <Link 
                            key={subItem.name} 
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#5F6368] hover:bg-[#F4F1EC] hover:text-[#2F3A8F] transition-colors font-serif"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href="https://aikyavidya.org/donations/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Donate Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#2E2E33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white/95 backdrop-blur-md absolute top-[100px] left-0 w-full shadow-xl transition-all duration-300 origin-top overflow-y-auto ${
        isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link 
                href={item.href} 
                className="text-lg font-serif font-medium text-[#2E2E33] block mb-2"
                onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 border-l-2 border-[#2F3A8F]/20 space-y-2 mb-4">
                  {item.dropdown.map(subItem => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-sm text-[#5F6368]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="https://aikyavidya.org/donations/"
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
