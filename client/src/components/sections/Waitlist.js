import Styles from "./Waitlist.module.css";
import World from "../../assets/images/world.png";

export default function Waitlist() {
  return (
    <section className={Styles.waitlist__container}>
      <div className={Styles.waitlist__content}>
        <div className={Styles.waitlist__title}>
          <h2>Love our Our Tool?</h2>
        </div>
        <div className={Styles.waitlist__text}>
          <p>Join the waitlist now. Get notified about start.</p>
        </div>

        <div className={Styles.waitlist__image}>
          <img src={World} alt="World" />
        </div>
      </div>
    </section>
  );
}
