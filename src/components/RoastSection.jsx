import { motion } from "framer-motion";
import { Award, Brain, Drama, Crown } from "lucide-react";

function RoastSection() {

  const roastCards = [
    {
      icon: <Drama size={30} />,
      title: "Drama Queen Award",
      description: "Can create a whole movie out of a small problem.",
      tag: "100% DRAMA"
    },
    {
      icon: <Brain size={30} />,
      title: "Brain Loading...",
      description: "Brain.exe has stopped responding. Please try again.",
      tag: "ERROR 404"
    },
    {
      icon: <Crown size={30} />,
      title: "Attitude Queen",
      description: "Attitude level: Unlimited. Logic level: Not Found.",
      tag: "QUEEN MODE"
    },
    {
      icon: <Award size={30} />,
      title: "World's Best Irritation",
      description: "Officially certified to irritate people professionally.",
      tag: "CERTIFIED"
    }
  ];

  return (
    <section className="roast-section">

      <div className="roast-heading">
        <span>⚠️ OFFICIAL REPORT ⚠️</span>

        <h2>
          The <span>Roast</span> Department 😂
        </h2>

        <p>
          Sorry, but your birthday doesn't mean
          your roasting privileges are suspended.
        </p>
      </div>

      <div className="roast-grid">

        {roastCards.map((card, index) => (

          <motion.div
            className="roast-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >

            <div className="roast-icon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>{card.description}</p>

            <div className="roast-tag">
              {card.tag}
            </div>

          </motion.div>

        ))}

      </div>

      <div className="roast-footer">
        <h3>😂 Don't take it seriously!</h3>
        <p>It's your birthday. You deserve this special treatment.</p>
      </div>

    </section>
  );
}

export default RoastSection;