"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const basePhotos = [
  "/photo/image/students-1.jpeg",
  "/photo/image/students-2.jpeg",
  "/photo/image/students-3.jpg",
  "/photo/image/students-4.jpg",
] as const;

export default function PhotoCarousel() {
  // Detect basePath from window location (for GitHub Pages)
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/mumadrasaorphanagebd')) {
        setBasePath('/mumadrasaorphanagebd');
      }
    }
  }, []);

  // Get photos with correct basePath (memoized to avoid recreation)
  const photos = useMemo(() => 
    basePhotos.map(photo => `${basePath}${photo}`) as readonly string[],
    [basePath]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setImageError(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setImageError(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setImageError(false);
    setCurrentIndex(index);
  };

  // Reset error when index changes
  useEffect(() => {
    setImageError(false);
  }, [currentIndex]);

  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden shadow-2xl">
      {/* Main Image */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200">
        {!imageError ? (
          <Image
            src={photos[currentIndex]}
            alt={`Students photo ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            unoptimized={true}
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>Image loading...</p>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-islamic-green p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-islamic-green p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}
