'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  const menuItems = [
    { name: '홈', href: '#home' },
    { name: '소개', href: '#about' },
    { name: '교육철학', href: '#philosophy' },
    { name: '프로그램', href: '#programs' },
    { name: '문의', href: '#contact' },
  ];

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'philosophy', 'programs', 'contact'];
      const scrollPosition = window.scrollY + 100; // 네비게이션 높이만큼 오프셋

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스크롤 이동 함수
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 네비게이션 높이만큼 조정
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    const targetId = href.replace('#', '');
    return activeSection === targetId;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">컴</span>
            </div>
            <span className="text-xl font-bold text-gray-900">컴패션랩</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black"
              aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu" role="navigation" aria-label="모바일 메뉴">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href) ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
