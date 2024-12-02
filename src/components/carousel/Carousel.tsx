import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Wrapper,
  CarouselImage,
  Image,
  DotWrapper,
  DotStyle,
  SelectedDot,
} from "./Carousel.styles";

interface CarouselProps {
  images?: string[];
  height?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({
  images = [],
  height = 150,
  autoPlay = true,
  autoPlayInterval = 2500,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const slides = [images[images.length - 1], ...images, images[0]];

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [isTransitioning]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index + 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (autoPlay && images.length > 0) {
      const interval = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, handleNext, images.length]);

  useEffect(() => {
    if (isTransitioning) {
      const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
          setCurrentIndex(images.length);
        } else if (currentIndex === slides.length - 1) {
          setCurrentIndex(1);
        }
      };

      const carousel = carouselRef.current;
      if (carousel) {
        carousel.addEventListener("transitionend", handleTransitionEnd);
      }

      return () => {
        if (carousel) {
          carousel.removeEventListener("transitionend", handleTransitionEnd);
        }
      };
    }
  }, [currentIndex, isTransitioning, images.length, slides.length]);

  return (
    <Wrapper>
      {images.length > 0 ? (
        <>
          <CarouselImage
            ref={carouselRef}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // 퍼센트 기반 이동
              transition: isTransitioning
                ? "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)" // 더 부드럽게
                : "none",
            }}
          >
            {slides.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Slide ${index}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </CarouselImage>

          <DotWrapper>
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                style={{ cursor: "pointer" }}
              >
                {index ===
                (currentIndex - 1 + images.length) % images.length ? (
                  <SelectedDot />
                ) : (
                  <DotStyle />
                )}
              </div>
            ))}
          </DotWrapper>
        </>
      ) : (
        <div>No images available</div>
      )}
    </Wrapper>
  );
}
