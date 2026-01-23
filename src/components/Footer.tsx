import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    explore: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Inspiration', href: '/about/inspiration' },
      { name: 'Our Trust', href: '/about/trust' },
      { name: 'Governance', href: '/about/governance' },
    ],
    initiatives: [
      { name: 'Food', href: '/initiatives/food' },
      { name: 'Education', href: '/initiatives/education' },
      { name: 'Values', href: '/initiatives/values' },
      { name: 'CSR Applicability', href: '/csr' },
      { name: 'CSR Partners', href: '/partners' },
    ],
    connect: [
      { name: 'Become a Volunteer', href: '/volunteer' },
      { name: 'Media Presence', href: '/media' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const associatedTrusts = [
    { name: 'Akshaya Patra', href: '#' },
    { name: 'Hare Krishna Charities', href: '#' },
    { name: 'Hare Krishna Movement', href: '#' },
  ];

  return (
    <footer className="relative bg-[#1a1a1c] text-[#F4F1EC] overflow-hidden border-t border-[#B08968]/30">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="md:col-span-4">
             <div className="mb-8">
                <div className="relative w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-inner overflow-hidden p-2 mb-4">
                   <Image 
                     src="/images/vidyabhyasam-logo.png" 
                     alt="Vidyabhyasam Logo" 
                     fill
                     className="object-contain"
                   />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">VIDYABHYASAM</h3>
                <p className="text-[#B08968] text-xs tracking-[0.2em] uppercase">Enriching Communities</p>
             </div>
             
             <div className="space-y-4 text-gray-400 font-light mb-8">
               <p className="leading-relaxed">
                 NBT Nagar, Road No 12, Banjara Hills,<br/>
                 Near Anti Corruption Bureau office,<br/>
                 Hyderabad - 500034
               </p>
               <p><a href="mailto:connect@vidyabhyasam.org" className="hover:text-white transition-colors">connect@vidyabhyasam.org</a></p>
               <p><a href="tel:+917386898991" className="hover:text-white transition-colors">+91 73868 98991</a></p>
             </div>
             
             <div className="flex gap-4">
                {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map(social => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B08968] transition-colors" aria-label={social}>
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
             </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-[#B08968]/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#B08968] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Initiatives */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-[#B08968]/30 pb-2 inline-block">Initiatives</h4>
            <ul className="space-y-3">
              {footerLinks.initiatives.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#B08968] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Associated Trusts */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm border-b border-[#B08968]/30 pb-2 inline-block">Associated Trusts</h4>
            <ul className="space-y-3">
               {associatedTrusts.map(trust => (
                 <li key={trust.name}>
                   <a href={trust.href} className="text-gray-300 hover:text-[#B08968] transition-colors text-sm">
                     {trust.name}
                   </a>
                 </li>
               ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vidyabhyasam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
