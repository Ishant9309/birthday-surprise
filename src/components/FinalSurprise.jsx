import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

function FinalSurprise() {

  const [revealed, setRevealed] = useState(false);

  return (
    <section className="final-section">

      <div className="final-heading">

        <span>
          <Sparkles size={15} /> THE GRAND FINALE
        </span>

        <h2>
          Wait... <span>One Last Thing!</span>
        </h2>

        <p>
          Before you leave, there's one more little surprise waiting for you.
        </p>

      </div>

      {!revealed ? (

        <motion.div
          className="final-gift"
          onClick={() => setRevealed(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >

          <div className="gift-glow"></div>

          <Gift size={95} strokeWidth={1.2} />

          <h3>One Last Surprise!</h3>

          <p>Something special is waiting inside.</p>

          <button className="final-button">
            Open Your Final Gift ✨
          </button>

        </motion.div>

      ) : (

        <AnimatePresence>

          <motion.div
            className="final-message"

            initial={{
              opacity: 0,
              scale: 0.7,
              y: 40
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}
          >

            <motion.div
              className="final-heart"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <Heart
                size={55}
                fill="currentColor"
              />
            </motion.div>

            <p className="final-small">
              A LITTLE MESSAGE FROM YOUR BEST FRIEND
            </p>

            <h2>
              Happy Birthday! ❤️
            </h2>

            <div className="final-divider"></div>

            <p className="final-text">
              I know this is just a little website,
              but I hope it brought a genuine smile
              to your face.
            </p>

            <p className="final-text">
              Thank you for all the conversations,
              laughs, support and beautiful moments.
              I'm genuinely grateful to have you
              as my best friend.
            </p>

            <p className="final-text">
              Keep smiling, keep growing and keep
              being the wonderful person you are.
            </p>

            <h3>
              You Deserve The Best! ✨
            </h3>

            <div className="final-signature">
              Made specially for you, with friendship ❤️
            </div>

          </motion.div>

        </AnimatePresence>

      )}

      {/* FLOATING HEARTS */}

      {revealed && (
        <div className="final-floating-hearts">

          {Array.from({ length: 20 }).map((_, i) => (

            <span
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              {i % 2 === 0 ? "💗" : "✨"}
            </span>

          ))}

        </div>
      )}

      <div className="final-footer">
        Made with ❤️ just for your special day.
      </div>

    </section>
  );
}

export default FinalSurprise;