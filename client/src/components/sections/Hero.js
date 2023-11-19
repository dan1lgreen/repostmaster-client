import styles from "./Hero.module.css";
import Robot from "../../assets/images/CU1TE_BOT_VI_03 1.png";
import Subtract from "../../assets/images/Subtract.png";

export default function Hero() {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero__content__top}>
        <div className={styles.hero__title}>
          <h2>
            <span style={{ color: "#8f5cf3" }}>The World's First</span>
            <span style={{ color: "#FE9799" }}>Direct Message</span>
            <span style={{ color: "#FE9799" }}> Auto Repost AI Bot</span>
          </h2>
        </div>
        <div className={styles.hero__subtitle}>
          <h2>
            <span>Find. Send. Repost.</span>
            <span>Easily grow your social media with viral content.</span>
          </h2>
        </div>
        <div className={styles.hero__signup__button}>
          <a href="#contact__form">
            <button>I am interested</button>
          </a>
        </div>
      </div>
      <div className={styles.hero__content__bottom}>
        <div className={styles.hero__text}>
          <h2>
            <span style={{ color: "#FC969A" }}>
              Monetize
              <span style={{ color: "#FFF" }}> your</span>
            </span>
            <span style={{ color: "#FFF" }}> time spent on</span>
            <span style={{ color: "#8657FA" }}>
              <span style={{ color: "#FFF" }}> funny</span> reels
            </span>
          </h2>
        </div>
        <div className={styles.hero__image}>
          <img src={Robot} alt="ai_robot" />
        </div>
        <img src={Subtract} alt="subtract" className={styles.subtract} />
      </div>
    </section>
  );
}
