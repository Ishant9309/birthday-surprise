import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart } from "lucide-react";

function BirthdayLetter() {

  const [opened, setOpened] = useState(false);

  return (
    <section className="letter-section">

      <div className="letter-heading">

        <span>💌 SOMETHING FROM THE HEART</span>

        <h2>
          A Little <span>Letter For You</span>
        </h2>

        <p>
          Some feelings deserve more than just a birthday wish.
        </p>

      </div>

      {!opened ? (

        <motion.div
          className="envelope"
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpened(true)}
        >

          <div className="envelope-icon">
            <Mail size={65} />
          </div>

          <h3>You Have A Letter!</h3>

          <p>Something special is waiting for you ❤️</p>

          <button className="letter-button">
            Open Your Letter
          </button>

        </motion.div>

      ) : (

        <AnimatePresence>

          <motion.div
            className="letter-paper"

            initial={{
              opacity: 0,
              scale: 0.8,
              y: 30
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

            <div className="letter-decoration">
              <Heart size={25} fill="currentColor" />
            </div>

            <p className="letter-date">
              A SPECIAL DAY FOR A SPECIAL PERSON
            </p>

            <h2>Hey, My Best Friend! ❤️</h2>

            <div className="letter-body">

              <p>
                First of all, Happiest Birthday to you! 🎂❤️
                I hope this day brings you as much happiness
                as you bring into the lives of people around you.
              </p>

              <p>
                I honestly don't know where to start, but one
                thing I really want to say is THANK YOU!
              </p>

              <p>
                Thank you for being my best friend.
                Thank you for listening to me every single time,
                even when I keep talking about the same things.
                Thank you for talking to me, spending your time
                with me and making even ordinary conversations
                feel special.
              </p>

              <p>
                Thank you for helping me solve my problems,
                understanding my situations and being there
                whenever I need someone to talk to.
                You have no idea how much that means to me.
              </p>

              <p>
                Sometimes I might not express it properly,
                but I genuinely appreciate every little thing
                you do. Every conversation, every laugh,
                every piece of advice and every moment
                we've shared means a lot to me.
              </p>

              <p>
                Life isn't always perfect, and everyone has
                their own problems. But having a friend like
                you makes some difficult days feel a little
                easier.
              </p>

              <p>
                I hope we continue making countless memories,
                having endless conversations, sharing random
                thoughts and laughing at the most unexpected
                things.
              </p>

              <p>
                No matter how busy life gets or how many
                things change, I hope our friendship always
                remains this beautiful.
              </p>

              <p>
                On your birthday, I wish you endless happiness,
                good health, success and everything you've
                ever dreamed of.
              </p>

              <p>
                Never stop smiling, never stop believing
                in yourself and never forget how special
                you are.
              </p>

              <p>
                And lastly, thank you for being YOU.
                I'm genuinely lucky to have a best friend
                like you. ❤️
              </p>

            </div>

            <div className="letter-signature">

              <p>With lots of love and gratitude,</p>

              <h3>Your Best Friend ❤️</h3>

            </div>

            <div className="letter-footer">
              Forever grateful for this friendship. ✨
            </div>

          </motion.div>

        </AnimatePresence>

      )}

    </section>
  );
}

export default BirthdayLetter;