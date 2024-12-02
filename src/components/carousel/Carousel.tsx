import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Wrapper,
  CarouselImage,
  Image,
  DotWrapper,
  DotStyle,
  SelectedDot,
  ArrowButton,
} from "./Carousel.styles";

interface CarouselProps {
  images?: string[];
  width?: number;
  height?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  rounded?: boolean;
  dotSize?: number; // Dot의 가로 크기
  dotHeight?: number; // Dot의 높이
}

export default function Carousel({
  images = [],
  width = 480,
  height = 150,
  autoPlay = true,
  autoPlayInterval = 2500,
  rounded = false,
  dotSize = 8,
  dotHeight = 8,
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
          {/* 좌우 화살표 버튼 */}
          <ArrowButton position="left" onClick={handlePrev}>
            {"<"}
          </ArrowButton>
          <ArrowButton position="right" onClick={handleNext}>
            {">"}
          </ArrowButton>

          <CarouselImage
            ref={carouselRef}
            style={{
              width: `${slides.length * width}px`,
              transform: `translateX(-${currentIndex * width}px)`,
              transition: isTransitioning
                ? "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)"
                : "none",
            }}
          >
            {slides.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Slide ${index}`}
                rounded={rounded}
                style={{ width: `${width}px`, height: `${height}px` }}
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
                  <SelectedDot size={dotSize} height={dotHeight} />
                ) : (
                  <DotStyle size={dotSize} height={dotHeight} />
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
