"use client";
import { Star } from "@/components/star-icon";
import confetti from "canvas-confetti";
import { useWebHaptics } from "web-haptics/react";

export const ConfettiStar = () => {
  const { trigger } = useWebHaptics();
  const handleClick = () => {
    trigger([{ duration: 2400 }], { intensity: 0.9 });
    const end = Date.now() + 3 * 1000;
    const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#ff9ff3"];
    const frame = () => {
      if (Date.now() > end) return;
      void confetti({
        particleCount: 5,
        angle: 65,
        spread: 62,
        startVelocity: 76,
        origin: { x: 0, y: 0.9 },
        colors: colors,
      });
      void confetti({
        particleCount: 5,
        angle: 120,
        spread: 58,
        startVelocity: 75,
        origin: { x: 1, y: 0.9 },
        colors: colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <Star
      className="h-[200px] w-[200px] select-none  lg:h-[300px] lg:w-[300px]"
      onClick={handleClick}
    />
  );
};
