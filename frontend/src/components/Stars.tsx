import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const star: Star = {
        id: Date.now() + Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2,
        duration: 15000 + Math.random() * 15000,
        delay: Math.random() * 2000,
      };

      setStars((prev) => [...prev, star]);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== star.id));
      }, star.duration + star.delay);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.2) {
        createStar();
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}ms`,
            animationDelay: `${star.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}