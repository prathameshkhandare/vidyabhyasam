'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about', hasDropdown: true },
    { name: 'Initiatives', href: '/initiatives', hasDropdown: true },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Media', href: '/media' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#F4F1EC]/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]' 
          : 'bg-[#F4F1EC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Decorative Logo Mark */}
            <div className="w-10 h-10 rounded-full border border-[#2F3A8F]/30 flex items-center justify-center group-hover:border-[#2F3A8F] transition-colors duration-300">
              <span className="font-serif text-lg text-[#2F3A8F] font-semibold">V</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-medium text-[#2E2E33] tracking-tight block leading-tight">
                Vidyabhyasam
              </span>
              <span className="text-[10px] text-[#5F6368] tracking-[0.2em] uppercase">
                Education with purpose
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="relative px-4 py-2 text-[#5F6368] hover:text-[#2E2E33] text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[#2F3A8F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button - Fixed positioning */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/support"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#2F3A8F] rounded-full hover:bg-[#252d6e] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Support the Vision
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-[#ECE8E1] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="pt-2 border-t border-[#ECE8E1]">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="block py-3 text-[#5F6368] hover:text-[#2E2E33] text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/support"
              className="inline-block mt-4 px-6 py-2.5 text-sm font-medium text-white bg-[#2F3A8F] rounded-full hover:bg-[#252d6e] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support the Vision
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
