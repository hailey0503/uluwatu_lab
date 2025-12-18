import Link from "next/link";
import styles from "../styles/heroSection.module.css";
import { useState } from "react";
import Header from "./Header.js"

const data = [
  "Enhancing Blockchain",
  "Performance on",
  "the Solana Network"
];

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.section}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/bg_move1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.header}>
      <Header />
      </div>
     
      <div
        className={`${styles.title} ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <p className={styles.description}>
      Enhance the Solana Ecosystem with Continuous Stress Testing
      </p>
      <button className={styles.button}>
        <Link href="/product">See Products</Link>
      </button>
    </div>
  );
};

export default HeroSection;
