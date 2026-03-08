import { useMemo } from "react";

const elements = ["💗", "🍬", "🧸", "💖", "✨"];

const FloatingElements = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 10,
        size: Math.random() * 20 + 16,
        duration: Math.random() * 10 + 15,
        emoji: elements[Math.floor(Math.random() * elements.length)],
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <span
          key={i}
          className="floating-element absolute bottom-[-40px]"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingElements;
