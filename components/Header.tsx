
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onNavigate: (id: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center py-4">
        <div className="text-2xl font-bold font-mono text-accent cursor-pointer" onClick={() => handleLinkClick('hero')}>
          KR
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }} className="text-gray-700 dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
        <div className="md:hidden flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-gray-900 dark:text-dark-text focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card py-4">
            <nav className="flex flex-col items-center space-y-4">
                {NAV_LINKS.map(link => (
                    <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }} className="text-gray-700 dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300">
                    {link.label}
                    </a>
                ))}
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
