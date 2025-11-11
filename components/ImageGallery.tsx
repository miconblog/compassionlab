'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageModal } from '@/components/ui/image-modal';

const images = [
  { src: '/images/1_class_activity_1.jpeg', alt: '교육 활동 1' },
  { src: '/images/2_class_activity_2.jpeg', alt: '교육 활동 2' },
  { src: '/images/3_class_arts.jpeg', alt: '미술 활동' },
  { src: '/images/4_class_activity_3.JPG', alt: '교육 활동 3' },
  { src: '/images/5_class_activity_4.JPG', alt: '교육 활동 4' },
];

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-5 gap-4 mb-16">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative w-full aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <ImageModal
          images={images}
          currentIndex={selectedIndex}
          isOpen={true}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
};

