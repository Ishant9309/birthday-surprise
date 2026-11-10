import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cake, Heart } from "lucide-react";

function BirthdayCake({ onBlowCandles }) {

  const [blown, setBlown] = useState(false);

  const handleBlow = () => {

    setBlown(true);

    // Automatically start birthday music
    onBlowCandles?.();

  };

  return (

    <section className="cake-section">

      <div className="cake-heading">

        <span>✨ THE SPECIAL MOMENT ✨</span>

        <h2>
          Make a <span>Birthday Wish</span>
        </h2>

        <p>
          Close your eyes, make a wish and let the magic begin.
        </p>

      </div>

      <motion.div
        className="cake-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="cake-glow"></div>

        {/* Candles */}

        <div className="candles">

          {[1, 2, 3].map((candle) => (

            <div className="candle" key={candle}>

              {!blown && (
                <div className="flame"></div>
              )}

            </div>

          ))}

        </div>

        {/* Cake */}

        <div className="cake">

          <div className="cake-top"></div>

          <div className="cake-middle">
            <span>♥</span>
            <span>♥</span>
            <span>♥</span>
          </div>

          <div className="cake-bottom"></div>

        </div>

        <div className="cake-plate"></div>

        {/* Button */}

        {!blown ? (

          <button
            className="blow-button"
            onClick={handleBlow}
          >
            <Cake size={19} />
            Blow The Candles
          </button>

        ) : (

          <AnimatePresence>

            <motion.div
              className="wish-message"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h2>Make A Wish! ✨</h2>

              <p>
                May your life always be filled with
                happiness, laughter and beautiful moments.
              </p>

              <h3>Happy Birthday! ❤️</h3>

              <Heart size={25} fill="currentColor" />

            </motion.div>

          </AnimatePresence>

        )}

        {/* Confetti */}

        {blown && (
          <div className="confetti-container">

            {Array.from({ length: 35 }).map((_, i) => (

              <span
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />

            ))}

          </div>
        )}

      </motion.div>

    </section>

  );

}

export default BirthdayCake;