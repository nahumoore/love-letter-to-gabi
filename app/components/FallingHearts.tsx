import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Heart {
  id: number;
  x: number;
  side: "left" | "right";
}

export default function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [lastSide, setLastSide] = useState<"left" | "right">("left");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSide = lastSide === "left" ? "right" : "left";
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;

      const xRange = screenWidth / 2 - 50; // Half screen width minus heart size
      const baseX = nextSide === "left" ? 0 : screenWidth / 2;

      const newHeart: Heart = {
        id: Date.now(),
        x: baseX + Math.random() * xRange,
        side: nextSide,
      };

      setHearts((prev) => [...prev, newHeart]);
      setLastSide(nextSide);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, 5000);
    }, 800);

    return () => clearInterval(interval);
  }, [lastSide]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: -20, x: heart.x, opacity: 1 }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight : 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute"
          >
            <Heart className="text-purple-400" size={24} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
