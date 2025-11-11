'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export const GroundElements = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 잔디 블레이드 위치를 고정된 값으로 생성
  const grassBlades = useMemo(() => {
    const seed = 12345; // 시드 값으로 일관성 유지
    const random = (index: number) => {
      const x = Math.sin(index * seed) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 100 }).map((_, i) => ({
      x1: i * 12 + random(i) * 10,
      y1: 600 - random(i + 100) * 100,
      x2: i * 12 + random(i + 200) * 10,
      strokeWidth: 0.5 + random(i + 300) * 0.5,
    }));
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 잔디밭 배경 */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <svg
          className="w-full h-full"
          viewBox="0 -200 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* 잔디 그라데이션 */}
            <linearGradient id="grassGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="30%" stopColor="#22c55e" />
              <stop offset="60%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>
          </defs>

          {/* 동산 배경 레이어들 */}
          {/* 뒷쪽 동산 */}
          <path
            d="M 0,-100 Q 200,-60 400,-100 T 800,-60 T 1200,-100 L 1200,600 L 0,600 Z"
            fill="url(#grassGradient)"
            opacity="0.9"
          />

          {/* 중간 동산 */}
          <path
            d="M 0,-110 Q 300,-70 600,-90 T 1200,-110 L 1200,600 L 0,600 Z"
            fill="url(#grassGradient)"
            opacity="0.95"
          />

          {/* 앞쪽 동산 (메인) */}
          <path
            d="M 0,-120 Q 150,-100 300,-80 Q 450,-100 600,-120 Q 750,-100 900,-80 Q 1050,-100 1200,-120 L 1200,600 L 0,600 Z"
            fill="url(#grassGradient)"
          />

          {/* 잔디 블레이드 효과 (작은 세로선들) */}
          {isMounted && (
            <g opacity="0.4">
              {grassBlades.map((blade, i) => (
                <line
                  key={i}
                  x1={blade.x1}
                  y1={blade.y1}
                  x2={blade.x2}
                  y2={600}
                  stroke="#15803d"
                  strokeWidth={blade.strokeWidth}
                />
              ))}
            </g>
          )}
        </svg>
      </div>

      {/* 좌측 미끄럼틀 */}
      <div className="absolute bottom-[170px] left-[40px] w-[100px] h-[125px] md:bottom-[280px] md:left-[120px] md:w-[150px] md:h-[187px] lg:bottom-[360px] lg:left-[200px] lg:w-[200px] lg:h-[250px]">
        <Image
          src="/images/slide.png"
          alt="미끄럼틀"
          width={200}
          height={250}
          className="object-contain w-auto h-full"
          priority
          onError={(e) => {
            // 이미지가 없을 경우 대체 표시 숨김
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      {/* 우측 요가하는 사람 */}
      <div className="absolute bottom-[180px] right-[30px] w-[90px] h-[110px] md:bottom-[280px] md:right-[120px] md:w-[135px] md:h-[165px] lg:bottom-[360px] lg:right-[200px] lg:w-[180px] lg:h-[220px]">
        <Image
          src="/images/yoga-person.png"
          alt="요가하는 사람"
          width={180}
          height={220}
          className="object-contain w-auto h-full"
          priority
          onError={(e) => {
            // 이미지가 없을 경우 대체 표시 숨김
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};
