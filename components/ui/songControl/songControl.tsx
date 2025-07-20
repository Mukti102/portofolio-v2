"use client";
import "./control.css";
import SkipNext from "@/components/shared/SkipNext";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { ChangeEvent, useState } from "react";
import useActiveSong from "@/hooks/useActiveSong";
import useZustand from "@/hooks/useZustand";
import { convertToSecond, curentPosition } from "@/utils/Methods";

function SongControl() {
  const { playing, duration, togglePlayPause, currentTime, isLoading, seek } =
    useActiveSong();
  const { setActiveSongIndex, activeSongIndex, songs } = useZustand();

  /* ✅ state lokal utk slider */
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  /* ketika audio update dan kita tidak sedang geser, sinkronkan */
  if (!isSeeking && sliderValue !== currentTime) {
    setSliderValue(currentTime);
  }

  const song = songs.find((item,index) => index == activeSongIndex);

  /* warna progress bar */
  const style = {
    background: `linear-gradient(to right,
      green ${curentPosition(sliderValue, duration)}%,
      gray  ${curentPosition(sliderValue, duration)}%)`,
  };

  /* ketika user seret */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  /* saat lepas mouse / touch ‑ commit seek */
  const commitSeek = () => {
    setIsSeeking(false);
    seek(sliderValue);
  };

  /* tombol next/prev */
  const nextSong = () => {
    if (activeSongIndex !== null && activeSongIndex + 1 < songs.length) {
      setActiveSongIndex(activeSongIndex + 1);
    }
  };
  const prevSong = () => {
    if (activeSongIndex !== null && activeSongIndex > 0) {
      setActiveSongIndex(activeSongIndex - 1);
    }
  };

  return (
    <div className="flex-1 z-[10000000000000000000] sm:flex flex-col gap-1 items-center justify-center h-full">
      <div className="w-full h-full items-center sm:h-max flex gap-10 sm:justify-center justify-end">
        <button onClick={prevSong} className="sm:inline hidden">
          <SkipNext className="w-[14px] h-[14px] fill-current flip" />
        </button>

        <button
          onClick={togglePlayPause}
          disabled={isLoading}
          className={`w-7 h-7 text-sm bg-white flex justify-center items-center rounded-full text-black ${
            isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isLoading ? <FiLoader /> : playing ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={nextSong} className="sm:inline hidden">
          <SkipNext className="w-[14px] h-[14px] fill-current" />
        </button>
      </div>

      {/* progress bar */}
      <div className="sm:flex w-[70%] gap-2 items-center hidden text-[.6rem]">
        <span>{convertToSecond(sliderValue)}</span>

        <input
          type="range"
          min={0}
          id="song-bar"
          max={duration}
          value={sliderValue}
          onChange={handleChange}
          onMouseDown={() => setIsSeeking(true)}
          onTouchStart={() => setIsSeeking(true)}
          onMouseUp={commitSeek}
          onTouchEnd={commitSeek}
          style={style}
          className="w-full"
        />

        <span>{song?.duration}</span>
      </div>
    </div>
  );
}

export default SongControl;
