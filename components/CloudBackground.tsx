'use client';

import { useEffect, useRef } from 'react';

export const CloudBackground = () => {
  const cloudContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cloudContainerRef.current) return;

      const scrollY = window.scrollY;
      const clouds = cloudContainerRef.current.children;

      Array.from(clouds).forEach((cloud, index) => {
        const speed = 0.3 + index * 0.1; // 각 구름마다 다른 속도
        const translateX = scrollY * speed;
        (cloud as HTMLElement).style.transform = `translateX(${translateX}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={cloudContainerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 구름 1 */}
      <svg
        className="absolute opacity-30"
        style={{ top: '10%', left: '-10%', width: '300px', height: '150px' }}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="25" fill="#87CEEB" />
        <circle cx="70" cy="50" r="30" fill="#87CEEB" />
        <circle cx="90" cy="50" r="25" fill="#87CEEB" />
        <circle cx="60" cy="40" r="22" fill="#87CEEB" />
        <circle cx="80" cy="40" r="22" fill="#87CEEB" />
        <ellipse cx="70" cy="50" rx="50" ry="30" fill="#87CEEB" />
      </svg>

      {/* 구름 2 */}
      <svg
        className="absolute opacity-25"
        style={{ top: '30%', left: '20%', width: '400px', height: '200px' }}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="50" r="28" fill="#87CEEB" />
        <circle cx="60" cy="50" r="32" fill="#87CEEB" />
        <circle cx="80" cy="50" r="28" fill="#87CEEB" />
        <circle cx="50" cy="40" r="24" fill="#87CEEB" />
        <circle cx="70" cy="40" r="24" fill="#87CEEB" />
        <ellipse cx="60" cy="50" rx="55" ry="35" fill="#87CEEB" />
      </svg>

      {/* 구름 3 */}
      <svg
        className="absolute opacity-20"
        style={{ top: '50%', left: '-5%', width: '350px', height: '175px' }}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="50" r="26" fill="#87CEEB" />
        <circle cx="65" cy="50" r="30" fill="#87CEEB" />
        <circle cx="85" cy="50" r="26" fill="#87CEEB" />
        <circle cx="55" cy="40" r="23" fill="#87CEEB" />
        <circle cx="75" cy="40" r="23" fill="#87CEEB" />
        <ellipse cx="65" cy="50" rx="52" ry="32" fill="#87CEEB" />
      </svg>

      {/* 구름 4 */}
      <svg
        className="absolute opacity-30"
        style={{ top: '70%', left: '15%', width: '320px', height: '160px' }}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="50" r="27" fill="#87CEEB" />
        <circle cx="65" cy="50" r="31" fill="#87CEEB" />
        <circle cx="85" cy="50" r="27" fill="#87CEEB" />
        <circle cx="55" cy="40" r="24" fill="#87CEEB" />
        <circle cx="75" cy="40" r="24" fill="#87CEEB" />
        <ellipse cx="65" cy="50" rx="53" ry="33" fill="#87CEEB" />
      </svg>

      {/* 구름 5 */}
      <svg
        className="absolute opacity-25"
        style={{ top: '20%', left: '60%', width: '380px', height: '190px' }}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="50" r="29" fill="#87CEEB" />
        <circle cx="55" cy="50" r="33" fill="#87CEEB" />
        <circle cx="75" cy="50" r="29" fill="#87CEEB" />
        <circle cx="45" cy="40" r="25" fill="#87CEEB" />
        <circle cx="65" cy="40" r="25" fill="#87CEEB" />
        <ellipse cx="55" cy="50" rx="56" ry="34" fill="#87CEEB" />
      </svg>

      {/* 구름 6 */}
      <svg
        className="absolute opacity-20"
        style={{ top: '60%', left: '70%', width: '360px', height: '180px' }}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="28" fill="#87CEEB" />
        <circle cx="70" cy="50" r="32" fill="#87CEEB" />
        <circle cx="90" cy="50" r="28" fill="#87CEEB" />
        <circle cx="60" cy="40" r="24" fill="#87CEEB" />
        <circle cx="80" cy="40" r="24" fill="#87CEEB" />
        <ellipse cx="70" cy="50" rx="54" ry="33" fill="#87CEEB" />
      </svg>
    </div>
  );
};
