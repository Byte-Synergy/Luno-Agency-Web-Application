import React, { useState } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Menu, X, Globe } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';

    const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [currentLang, setCurrentLang] = useState('uz');
      const location = useLocation();

      const navigation = [
        { name: 'Home', href: '/', uz: 'Бош саҳифа', ru: 'Главная' },
        { name: 'About', href: '/about', uz: 'Биз ҳақимизда', ru: 'О нас' },
        { name: 'Services', href: '/services', uz: 'Хизматлар', ru: 'Услуги' },
        { name: 'Portfolio', href: '/portfolio', uz: 'Портфолио', ru: 'Портфолио' },
        { name: 'Blog', href: '/blog', uz: 'Блог', ru: 'Блог' },
        { name: 'Contact', href: '/contact', uz: 'Алоқа', ru: 'Контакты' },
      ];

      const languages = [
        { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      ];

      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-zinc-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-600 to-fuchsia-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold text-zinc-800 group-hover:text-rose-600 transition-colors">
                  Luno Agency
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                      location.pathname === item.href
                        ? 'text-rose-600'
                        : 'text-zinc-700'
                    }`}
                  >
                    {item[currentLang] || item.name}
                  </Link>
                ))}
                
                {/* Language Switcher */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-sm font-medium text-zinc-700 hover:text-rose-600 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-zinc-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setCurrentLang(lang.code)}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-zinc-50 first:rounded-t-lg last:rounded-b-lg ${
                          currentLang === lang.code ? 'text-rose-600 bg-rose-50' : 'text-zinc-700'
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-zinc-700 hover:text-rose-600 hover:bg-zinc-100 transition-colors"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden border-t border-zinc-200 bg-white"
                >
                  <div className="py-4 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-rose-600 hover:bg-zinc-50 ${
                          location.pathname === item.href
                            ? 'text-rose-600 bg-rose-50'
                            : 'text-zinc-700'
                        }`}
                      >
                        {item[currentLang] || item.name}
                      </Link>
                    ))}
                    <div className="px-4 py-2 border-t border-zinc-200 mt-2">
                      <div className="flex space-x-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => setCurrentLang(lang.code)}
                            className={`px-3 py-1 text-xs rounded-full transition-colors ${
                              currentLang === lang.code
                                ? 'bg-rose-600 text-white'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                            }`}
                          >
                            {lang.flag} {lang.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      );
    };

    export default Header;