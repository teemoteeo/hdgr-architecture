"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  priority?: boolean;
  className?: string;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  priority = false,
  className = "",
}: ParallaxImageProps) {
  const scrollY = useScrollPosition();
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile to disable parallax for performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOffsetY(scrollY * speed);
    }
  }, [scrollY, speed, isMobile]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: isMobile ? "none" : `translateY(${offsetY}px)`,
          transition: "transform 0.1s linear",
        }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
