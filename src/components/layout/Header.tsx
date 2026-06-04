import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Sub-Teams', href: '/sub-teams' },
    { name: 'Pilot Project', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-ncsu-black text-ncsu-white p-4 md:p-6 shadow-md border-b border-ncsu-red/20 sticky top-0 z-[60]">
      <div className="container mx-auto flex justify-between items-center relative z-[70]">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="space-x-8 hidden md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="nav-link-underline font-tech text-sm uppercase"
            >
              {link.name}
            </Link>
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
          <Link 
            key={link.name} 
            to={link.href} 
            className="text-2xl font-tech text-ncsu-white hover:text-ncsu-red uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
