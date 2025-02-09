import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { FaTimes } from 'react-icons/fa';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    onClick: () => setIsMenuOpen(false)
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-md fixed w-full z-50 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400">
            Insurance Agent
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink to="inicio" className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" {...scrollProps}>
              {t('nav.home')}
            </ScrollLink>
            <ScrollLink to="servicios" className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" {...scrollProps}>
              {t('nav.services')}
            </ScrollLink>
            <ScrollLink to="aseguradoras" className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" {...scrollProps}>
              {t('nav.insurers')}
            </ScrollLink>
            <ScrollLink to="importancia" className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" {...scrollProps}>
              {t('nav.why')}
            </ScrollLink>
            <ScrollLink to="contacto" className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" {...scrollProps}>
              {t('nav.contact')}
            </ScrollLink>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Mobile Menu Widget */}
          <div 
            className={`mobile-menu fixed right-4 top-20 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="relative p-6 space-y-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="space-y-6 pt-4">
                <ScrollLink 
                  to="inicio" 
                  className="block text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  {...scrollProps}
                >
                  {t('nav.home')}
                </ScrollLink>
                <ScrollLink 
                  to="servicios" 
                  className="block text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  {...scrollProps}
                >
                  {t('nav.services')}
                </ScrollLink>
                <ScrollLink 
                  to="aseguradoras" 
                  className="block text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  {...scrollProps}
                >
                  {t('nav.insurers')}
                </ScrollLink>
                <ScrollLink 
                  to="importancia" 
                  className="block text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  {...scrollProps}
                >
                  {t('nav.why')}
                </ScrollLink>
                <ScrollLink 
                  to="contacto" 
                  className="block text-lg font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  {...scrollProps}
                >
                  {t('nav.contact')}
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}