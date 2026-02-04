"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageViewerProps {
  images: string[];
  projectTitle: string;
}

export default function ImageViewer({ images, projectTitle }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  const currentImage = images[currentIndex];
  const imageNumber = String(currentIndex + 1).padStart(2, "0");
  const totalImages = String(images.length).padStart(2, "0");

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative aspect-[16/9] bg-anthracite/5 border border-anthracite/10 overflow-hidden group">
      {/* Image with AnimatePresence for smooth transitions */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentImage}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 900, damping: 50 },
            opacity: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage}
            alt={`${projectTitle} - Image ${imageNumber}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-warmWhite/90 border border-anthracite/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-warmWhite z-10"
            aria-label="Previous image"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 12L6 8L10 4" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-warmWhite/90 border border-anthracite/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-warmWhite z-10"
            aria-label="Next image"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 4L10 8L6 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-warmWhite/90 border border-anthracite/20 px-3 py-2 font-mono text-[11px] tracking-wider z-10">
            {imageNumber} / {totalImages}
          </div>

          {/* Keyboard hint - fade in on hover */}
          <div className="absolute bottom-4 left-4 bg-warmWhite/90 border border-anthracite/20 px-3 py-2 font-mono text-[9px] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity z-10">
            ← → NAVIGATE
          </div>
        </>
      )}
    </div>
  );
}
