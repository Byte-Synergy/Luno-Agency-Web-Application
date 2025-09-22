import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
      ];

      const footerLinks = [
        {
          title: 'Services',
          links: [
            { name: 'Social Media Management', href: '/services' },
            { name: 'Content Creation', href: '/services' },
            { name: 'Digital Marketing', href: '/services' },
            { name: 'Brand Strategy', href: '/services' },
          ],
        },
        {
          title: 'Company',
          links: [
            { name: 'About Us', href: '/about' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
          ],
        },
      ];

      return (
        <footer className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-600 to-fuchsia-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <span className="text-xl font-bold">Luno Agency</span>
                </Link>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                  Professional SMM and digital marketing agency helping businesses grow their online presence and reach their target audience effectively.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Mail className="w-4 h-4" />
                    <span>hello@lunoagency.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Phone className="w-4 h-4" />
                    <span>+998 90 123 45 67</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <MapPin className="w-4 h-4" />
                    <span>Tashkent, Uzbekistan</span>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Links & Copyright */}
            <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 sm:mb-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-rose-600 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              
              <div className="text-center sm:text-right">
                <p className="text-zinc-400 text-sm">
                  © {currentYear} Luno Agency. All rights reserved.
                </p>
                <p className="text-zinc-500 text-xs mt-1">
                  Built with ❤️ by{' '}
                  <a
                    rel="nofollow"
                    target="_blank"
                    href="https://meku.dev"
                    className="text-rose-400 hover:text-rose-300 transition-colors"
                  >
                    Meku.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;