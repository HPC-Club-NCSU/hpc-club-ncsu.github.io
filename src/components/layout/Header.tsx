import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { HiMenu, HiX } from 'react-icons/hi';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Events', href: '#' },
    { name: 'Cluster', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="bg-ncsu-black text-ncsu-white p-4 md:p-6 shadow-md border-b border-ncsu-red/20 sticky top-0 z-[60]">
      <div className="container mx-auto flex justify-between items-center relative z-[70]">
        <Logo />
        
        {/* Desktop Nav */}
        <nav className="space-x-8 hidden md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-underline font-tech text-sm uppercase">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button - Always top-most */}
        <button 
          className="md:hidden text-ncsu-red text-3xl focus:outline-none relative z-[80]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`
        fixed inset-0 bg-ncsu-black z-[50] flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-tech text-ncsu-white hover:text-ncsu-red uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};
