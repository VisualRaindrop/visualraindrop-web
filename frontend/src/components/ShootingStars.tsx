import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  flipped: boolean;
};

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const flipped = Math.random() > 0.5;

      const newStar: Star = {
        id: Date.now() + Math.random(),
        top: Math.random() * 80,
        left: Math.random() * 80,
        duration: 7 + Math.random() * 6,
        delay: Math.random() * 2,
        flipped,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) =>
          prev.filter((s) => s.id !== newStar.id)
        );
      }, newStar.duration * 1000);
    };

    createStar();

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        createStar();
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`shooting-star ${
            star.flipped
              ? "shooting-star-flipped"
              : "shooting-star-normal"
          }`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </>
  );
}