"use client";

import FallingHearts from "./components/FallingHearts";
import LoveLetterContent from "./components/LoveLetterContent";
import SongPlayer from "./components/SongPlayer";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [isReading, setIsReading] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {!isReading ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="relative z-20"
            >
              <Card className="p-4 flex flex-col justify-center items-center backdrop-blur-sm bg-white/90">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center mb-8 space-y-2"
                >
                  <h1 className="text-5xl font-bold text-purple-600">
                    A Love Letter to Gabi
                  </h1>
                  <p className="text-purple-700 italic font-bold text-2xl">
                    Desde lo mas profundo de mi corazon
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsReading(true)}
                  className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition duration-300 text-2xl"
                >
                  Abrir carta 💌
                </motion.button>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-sm text-gray-500 block font-cormorantGaramond mt-4"
                >
                  Sound on 🔊
                </motion.span>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-20"
            >
              <LoveLetterContent />
              <SongPlayer audioUrl="/i-wanna-be-yours.mp3" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isReading && <FallingHearts />}
    </div>
  );
}
