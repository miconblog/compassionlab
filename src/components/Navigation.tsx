'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: '홈', href: '/' },
    { name: '소개', href: '/about' },
    { name: '프로그램', href: '/programs' },
    { name: '교육철학', href: '/philosophy' },
    { name: '해외연수', href: '/global-programs' },
    { name: '문의', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className='bg-white shadow-lg fixed w-full top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>컴</span>
            </div>
            <span className='text-xl font-bold text-amber-900'>컴패션랩</span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-amber-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-amber-700 hover:text-amber-600 focus:outline-none focus:text-amber-600'
              aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMenuOpen}
              aria-controls='mobile-menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className='md:hidden'
            id='mobile-menu'
            role='navigation'
            aria-label='모바일 메뉴'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t'>
              {menuItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-amber-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
