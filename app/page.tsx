"use client";

import FallingHearts from "./components/FallingHearts";
import LoveLetterContent from "./components/LoveLetterContent";
import SongPlayer from "./components/SongPlayer";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [isReading, setIsReading] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-6">
        {isReading ? (
          <LoveLetterContent />
        ) : (
          <Card className="p-4 z-50 flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsReading(true)}
              className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-600 transition duration-300 text-2xl"
            >
              I Wanna Be Yours 💖
            </motion.button>

            <span className="text-sm text-gray-500 block font-cormorantGaramond mt-4">
              Sound on 🔊
            </span>
          </Card>
        )}
      </div>
      {!isReading ? (
        <FallingHearts />
      ) : (
        <SongPlayer audioUrl="/i-wanna-be-yours.mp3" />
      )}
    </>
  );
}
