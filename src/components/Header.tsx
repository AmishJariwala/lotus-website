import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md py-3' : 'py-5'
      } ${!scrolled ? 'bg-dark/80 backdrop-blur-md' : ''}`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Lotus Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#hero" className="text-white hover:text-primary-light transition-colors">
            Home
          </a>
          <a href="#feature-1" className="text-white hover:text-primary-light transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-primary-light transition-colors">
            How It Works
          </a>
          <Link to="/try-it-now" className="text-white hover:text-primary-light transition-colors">
            Try it Now
          </Link>
          <a href="#download" className="btn btn-outline text-sm px-4 py-2">
            Download
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-dark-darker absolute w-full top-full border-t border-gray-800 shadow-lg`}>
        <div className="px-4 pt-3 pb-4 space-y-2">
          <a
            href="#hero-mobile"
            className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#feature-mobile-1"
            className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works-mobile"
            className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <Link
            to="/try-it-now"
            className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try it Now
          </Link>
          <a
            href="#download-mobile"
            className="block px-4 py-3 rounded-lg text-base font-medium text-primary-light hover:bg-dark-lighter transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
