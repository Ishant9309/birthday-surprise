import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Play,
  Pause,
  Volume2,
  Music2,
  SkipBack,
  SkipForward
} from "lucide-react";

function MusicPlayer({ audioRef }) {

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);

    const updateDuration = () => setDuration(audio.duration || 0);

    const handlePlay = () => setPlaying(true);

    const handlePause = () => setPlaying(false);

    const handleEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    setPlaying(!audio.paused);
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration || 0);

    return () => {

      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);

    };

  }, [audioRef]);

  useEffect(() => {

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

  }, [volume, audioRef]);

  const toggleMusic = async () => {

    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {

      try {
        await audio.play();
      } catch (error) {
        console.error("Music playback failed:", error);
      }

    } else {

      audio.pause();

    }

  };

  const seekMusic = (e) => {

    const value = Number(e.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }

  };

  const skipMusic = (seconds) => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = Math.max(
      0,
      Math.min(audio.currentTime + seconds, duration)
    );

  };

  const formatTime = (time) => {

    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;

  };

  return (

    <section className="music-section">

      <div className="music-heading">

        <span>♪ A LITTLE MUSIC MAGIC</span>

        <h2>
          A Song Just <span>For You</span>
        </h2>

        <p>
          Every beautiful moment deserves a beautiful soundtrack.
        </p>

      </div>

      <motion.div
        className="music-player"
        whileHover={{ y: -5 }}
      >

        <div className="music-artwork">

          <Music2 size={45} />

          <div className="music-equalizer">

            {[1, 2, 3, 4, 5].map((item) => (

              <span
                key={item}
                className={playing ? "bar active" : "bar"}
              />

            ))}

          </div>

        </div>

        <div className="music-info">

          <h3>Birthday Special ❤️</h3>

          <p>A little melody for your special day</p>

        </div>

        <div className="music-progress">

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={Math.min(currentTime, duration || 0)}
            onChange={seekMusic}
            className="progress-slider"
          />

          <div className="music-time">

            <span>{formatTime(currentTime)}</span>

            <span>{formatTime(duration)}</span>

          </div>

        </div>

        <div className="music-controls">

          <button onClick={() => skipMusic(-10)}>
            <SkipBack size={20} />
          </button>

          <button
            className="main-play-button"
            onClick={toggleMusic}
          >

            {playing ? (
              <Pause size={23} fill="white" />
            ) : (
              <Play size={23} fill="white" />
            )}

          </button>

          <button onClick={() => skipMusic(10)}>
            <SkipForward size={20} />
          </button>

        </div>

        <div className="volume-control">

          <Volume2 size={18} />

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />

        </div>

      </motion.div>

    </section>

  );

}

export default MusicPlayer;