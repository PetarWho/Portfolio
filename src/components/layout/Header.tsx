import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/helpers';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { name: 'Home', path: '/', ariaLabel: 'Navigate to home page' },
  { name: 'Projects', path: '/projects', ariaLabel: 'View my projects' },
  { name: 'Certificates', path: '/certificates', ariaLabel: 'View my certificates' },
  { name: 'About', path: '/about', ariaLabel: 'Learn more about me' },
  { name: 'Contact', path: '/contact', ariaLabel: 'Get in touch with me' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-white hover:text-[var(--color-primary-accent)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] rounded-md px-2 py-1"
            aria-label="Go to homepage"
          >
            P. Penev
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'px-4 py-2 rounded-lg text-lg lg:text-lg font-medium transition-all duration-200',
                    'hover:bg-gray-800 hover:text-[var(--color-primary-accent)]',
                    'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
                    isActive(item.path)
                      ? 'text-[var(--color-primary-accent)] bg-gray-800'
                      : 'text-gray-300'
                  )}
                  aria-label={item.ariaLabel}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4 border-t border-gray-800 mt-2 pt-4"
          >
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                      'hover:bg-gray-800 hover:text-[var(--color-primary-accent)]',
                      'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
                      isActive(item.path)
                        ? 'text-[var(--color-primary-accent)] bg-gray-800'
                        : 'text-gray-300'
                    )}
                    aria-label={item.ariaLabel}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
