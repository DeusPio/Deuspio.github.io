"use client";

import { useEffect, useRef } from "react";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const STAR_COUNT = 70;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
  const left = pseudoRandom(i * 1.13) * 100;
  const top = pseudoRandom(i * 2.71) * 100;
  const size = 1 + pseudoRandom(i * 3.31) * 1.6;
  const delay = pseudoRandom(i * 4.42) * 6;
  const duration = 3 + pseudoRandom(i * 5.53) * 4;
  return { left, top, size, delay, duration, key: i };
});

export function Starfield() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !isFinePointer) return;

    let frame: number;
    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translate(${x * -10}px, ${
            y * -8
          }px)`;
        }
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      <div className="starfield-parallax" ref={parallaxRef}>
        <div className="nebula nebula-a" />
        <div className="nebula nebula-b" />
        {stars.map((star) => (
          <span
            key={star.key}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="orbit-system">
        <div className="orbit-sun" />
        <div className="orbit-ring">
          <div className="orbit-moon" />
        </div>
      </div>
      <div className="hearth-glow" />
    </div>
  );
}
