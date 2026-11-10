import { motion } from "framer-motion";
import { Camera, Heart } from "lucide-react";

function Memories() {

  const memories = [
    {
      id: 1,
      title: "A Beautiful Smile",
      caption: "Keep smiling, it suits you. ❤️",
      image: "/images/memory1.jpg",
      date: "01 / FOUR"
    },
    {
      id: 2,
      title: "Little Moments",
      caption: "Every picture tells a beautiful story.",
      image: "/images/memory2.jpg",
      date: "02 / FOUR"
    },
    {
      id: 3,
      title: "The Birthday Queen",
      caption: "Today, all the spotlight belongs to you. 👑",
      image: "/images/memory3.jpg",
      date: "03 / FOUR"
    },
    {
      id: 4,
      title: "Simply Special",
      caption: "Never stop being the wonderful person you are.",
      image: "/images/memory4.jpg",
      date: "04 / FOUR"
    }
  ];

  return (
    <section className="memories-section">

      <div className="memories-heading">

        <span className="section-label">
          <Camera size={15} /> A LITTLE PHOTO COLLECTION
        </span>

        <h2>
          Just <span>You</span> & Your Moments
        </h2>

        <p>
          A collection of beautiful pictures
          of someone who deserves all the happiness.
        </p>

      </div>

      <div className="memories-grid">

        {memories.map((memory, index) => (

          <motion.div
            className="memory-card"
            key={memory.id}

            initial={{ opacity: 0, y: 35 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{
              duration: 0.6,
              delay: index * 0.12
            }}

            whileHover={{ y: -8 }}
          >

            <div className="memory-image">

              <img
                src={memory.image}
                alt={memory.title}
                className="memory-photo"
                loading="lazy"
              />

              <span className="memory-number">
                {memory.date}
              </span>

            </div>

            <div className="memory-content">

              <h3>{memory.title}</h3>

              <p>{memory.caption}</p>

              <Heart
                size={18}
                className="memory-heart"
              />

            </div>

          </motion.div>

        ))}

      </div>

      <div className="memories-footer">

        <p>A little reminder that you are special.</p>

        <h3>Keep Shining Always! ✨</h3>

      </div>

    </section>
  );
}

export default Memories;