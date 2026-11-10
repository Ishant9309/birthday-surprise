import { useState, useRef } from "react";
import { Heart, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import RoastSection from "../components/RoastSection";
import Memories from "../components/Memories";
import BirthdayCake from "../components/BirthdayCake";
import MusicPlayer from "../components/MusicPlayer";
import BirthdayLetter from "../components/BirthdayLetter";
import FinalSurprise from "../components/FinalSurprise";

function Home() {
  const [opened, setOpened] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  const audioRef = useRef(null);

  // Open birthday surprise
  const handleOpenSurprise = () => {
    setOpened(true);
  };

  // Play song and reveal music player after blowing candles
  const handleBlowCandles = async () => {
    const audio = audioRef.current;

    // Reveal music player
    setShowMusic(true);

    if (!audio) return;

    try {
      audio.currentTime = 0;
      await audio.play();
    } catch (error) {
      console.log("Music playback error:", error);
    }
  };

  return (
    <main className="home">

      {/* BIRTHDAY AUDIO */}
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        preload="auto"
      />

      {/* HERO SECTION */}
      <section className="hero-section">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-icon">
            <Heart size={35} fill="currentColor" />
          </div>

          <p className="hero-subtitle">
            A LITTLE SOMETHING FOR SOMEONE SPECIAL
          </p>

          <h1>
            Happy Birthday
            <br />
            <span>Sam!</span>
          </h1>

          <p className="hero-description">
            Today is all about you. So I made something special
            to make your day even more memorable.
          </p>

          {!opened ? (

            <motion.button
              className="hero-button"
              onClick={handleOpenSurprise}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={20} />
              Open Your Surprise
            </motion.button>

          ) : (

            <motion.div
              className="welcome-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Heart size={20} fill="currentColor" />
              Let the celebration begin!
            </motion.div>

          )}

        </motion.div>

        {/* FLOATING HEARTS */}
        <div className="hero-floating-hearts">
          <span>♡</span>
          <span>♡</span>
          <span>♡</span>
          <span>♡</span>
        </div>

      </section>

      {/* BIRTHDAY SURPRISE CONTENT */}
      {opened && (

        <motion.div
          className="surprise-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* ROAST DEPARTMENT */}
          <RoastSection />

          {/* MEMORIES GALLERY */}
          <Memories />

          {/* BIRTHDAY CAKE */}
          <BirthdayCake
            onBlowCandles={handleBlowCandles}
          />

          {/* MUSIC PLAYER - APPEARS AFTER BLOWING CANDLES */}
          <AnimatePresence>
            {showMusic && (

              <motion.div
                key="birthday-music"
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  y: 20
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut"
                }}
              >
                <MusicPlayer
                  audioRef={audioRef}
                />

              </motion.div>

            )}
          </AnimatePresence>

          {/* BIRTHDAY LETTER */}
          <BirthdayLetter />

          {/* FINAL SURPRISE */}
          <FinalSurprise />

        </motion.div>

      )}

      {/* FOOTER */}
      <footer className="home-footer">

        <p>
          Made with{" "}
          <Heart size={15} fill="currentColor" />
          {" "}for a wonderful friend.
        </p>

        <span>
          One day, countless memories. ❤️
        </span>

      </footer>

    </main>
  );
}

export default Home;
