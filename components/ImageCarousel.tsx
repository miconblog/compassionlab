'use client';

import Image from 'next/image';

const ImageCarousel = () => {
  const images = [
    {
      src: '/images/소개 이미지 3.jpeg',
      alt: '컴패션랩 교육 활동 1',
      title: 'SEE Learning® 수업 현장',
      description: '에모리 대학교에서 개발한 SEE Learning® 프로그램을 통한 사회정서교육',
    },
    {
      src: '/images/소개 이미지 2.jpeg',
      alt: '컴패션랩 교육 활동 2',
      title: '요가와 명상 교육',
      description: '몸과 마음의 균형을 찾는 요가와 명상 활동',
    },
    {
      src: '/images/소개 이미지 3.jpeg',
      alt: '컴패션랩 교육 활동 3',
      title: 'NVC 소통 훈련',
      description: '비폭력대화를 통한 효과적인 소통과 갈등 해결',
    },
    {
      src: '/images/소개 이미지 2.jpeg',
      alt: '컴패션랩 교육 활동 4',
      title: '그룹 활동과 협력',
      description: '함께하는 그룹 활동을 통한 협력과 공감 능력 개발',
    },
    {
      src: '/images/소개 이미지 3.jpeg',
      alt: '컴패션랩 교육 활동 5',
      title: '자기 돌봄 실습',
      description: '자기 자비를 통한 자기 돌봄과 정서 조절 훈련',
    },
  ];

  const handlePrevClick = () => {
    const carousel = document.getElementById('imageCarousel');
    if (carousel) {
      const currentTransform = carousel.style.transform || 'translateX(0%)';
      const match = currentTransform.match(/-?\d+/);
      const currentTranslate = match ? parseInt(match[0]) : 0;
      const cardWidth = window.innerWidth >= 1024 ? 33.333 : window.innerWidth >= 768 ? 50 : 100;
      const maxTranslate = -(5 - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) * cardWidth;
      const newTranslate = currentTranslate + cardWidth;
      carousel.style.transform = `translateX(${Math.max(maxTranslate, newTranslate)}%)`;
    }
  };

  const handleNextClick = () => {
    const carousel = document.getElementById('imageCarousel');
    if (carousel) {
      const currentTransform = carousel.style.transform || 'translateX(0%)';
      const match = currentTransform.match(/-?\d+/);
      const currentTranslate = match ? parseInt(match[0]) : 0;
      const cardWidth = window.innerWidth >= 1024 ? 33.333 : window.innerWidth >= 768 ? 50 : 100;
      const newTranslate = currentTranslate - cardWidth;
      carousel.style.transform = `translateX(${Math.min(0, newTranslate)}%)`;
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500 ease-in-out" id="imageCarousel">
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{image.title}</h3>
                  <p className="text-sm text-amber-700">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
