import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { title: 'Features', href: '/features' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'API', href: '/api' },
      { title: 'Changelog', href: '/changelog' },
    ],
    company: [
      { title: 'About', href: '/about' },
      { title: 'Blog', href: '/blog' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
    ],
    resources: [
      { title: 'Documentation', href: '/docs' },
      { title: 'Help Center', href: '/help' },
      { title: 'Community', href: '/community' },
      { title: 'Status', href: '/status' },
    ],
    legal: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'GDPR', href: '/gdpr' },
    ],
  };

  const socialLinks = [
    { 
      title: 'Facebook',
      href: 'https://facebook.com/yourpage',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      title: 'Instagram',
      href: 'https://instagram.com/yourpage',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8-.568-1.07-.302-2.384.658-3.245.96-.862 2.37-1.027 3.491-.408 1.121.618 1.8 1.834 1.68 3.01-.12 1.176-1.018 2.264-2.224 2.693-.206.073-.419.11-.633.11-.266-.001-.532-.056-.782-.16zm7.424-3.781c.217-.217.329-.51.314-.812-.015-.302-.148-.585-.373-.792-.225-.208-.522-.322-.831-.32-.309.002-.605.119-.827.328-.222.21-.355.495-.371.798-.016.303.096.598.313.825.218.227.517.359.834.369.317.01.619-.106.841-.322zm-.814-5.542c-1.06.031-2.093.335-2.992.883-.899.547-1.64 1.32-2.147 2.241-.507.92-.759 1.955-.729 3.001.03 1.046.335 2.066.883 2.958.548.892 1.321 1.625 2.241 2.124.92.499 1.955.742 3.001.703 1.046-.038 2.066-.349 2.958-.903.892-.554 1.625-1.333 2.124-2.257.499-.924.742-1.963.703-3.013-.038-1.05-.349-2.073-.903-2.968-.554-.896-1.333-1.633-2.257-2.135-.924-.503-1.963-.749-3.013-.714z"/>
        </svg>
      ),
    },
    {
      title: 'YouTube',
      href: 'https://youtube.com/yourchannel',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className={cn('bg-gray-50 border-t', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your App</h3>
            <p className="text-gray-600 text-sm mb-4">
              High-performance Next.js web application focused on SEO rankings and social media virality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.title}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {currentYear} Your App. All rights reserved.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Get updates on new features and releases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}