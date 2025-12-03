import { Link } from 'react-router-dom';
import { Github, Linkedin, Facebook, Instagram, ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/utils/helpers';
import { useState } from 'react';

const iconMap = {
  Github,
  Linkedin,
  Facebook,
  Instagram,
};

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Copy email to clipboard
    if (portfolioData.personalInfo.email) {
      try {
        await navigator.clipboard.writeText(portfolioData.personalInfo.email);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
      
      // Try to open mailto
      window.location.href = `mailto:${portfolioData.personalInfo.email}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {portfolioData.socialLinks.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-3 rounded-full bg-gray-800 text-gray-300',
                  'hover:bg-[var(--color-primary-600)] hover:text-white hover:scale-110',
                  'transition-all duration-300',
                  'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
                )}
                aria-label={social.ariaLabel}
              >
                {Icon && <Icon size={20} />}
              </a>
            );
          })}
          <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              onClick={handleEmailClick}
              className={cn(
                'p-3 rounded-full bg-gray-800 text-gray-300 relative',
                'hover:bg-[var(--color-primary-600)] hover:text-white hover:scale-110',
                'transition-all duration-300',
                'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
              )}
              aria-label="Send email"
            >
              <Mail size={20} />
              <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap z-10 transition-all duration-300 ease-in-out ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                Email copied!
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </a>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'text-gray-400 text-lg hover:text-[var(--color-primary-accent)] transition-colors duration-200',
                    'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] rounded-md px-2 py-1'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-md mb-6">
          <p>
            &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className={cn(
              'p-2 rounded-full bg-gray-800 text-gray-300',
              'hover:bg-[var(--color-primary-600)] hover:text-white hover:scale-110',
              'transition-all duration-300',
              'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
            )}
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
