import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  initialVolume?: number;
}

export default function AudioPlayer({
  audioUrl,
  initialVolume = 1,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        console.warn("Autoplay prevented by browser");
      });
      setIsPlaying(true);
      setDuration(audioRef.current.duration);
    }
  }, [initialVolume]);

  const togglePlay = (): void => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (): void => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = (): void => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const percent = (current / duration) * 100;
    setProgress(percent);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!progressRef.current || !audioRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 sticky bottom-0 mx-auto z-[9999] md:max-w-3xl sm:max-w-full">
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() =>
          audioRef.current && setDuration(audioRef.current.duration)
        }
      />

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white fill-white" />
          ) : (
            <Play className="w-6 h-6 text-white fill-white" />
          )}
        </button>

        <div className="flex-1">
          <div
            ref={progressRef}
            className="h-2 bg-gray-200 rounded cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-purple-600 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="p-2 text-purple-600 hover:text-purple-700"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
