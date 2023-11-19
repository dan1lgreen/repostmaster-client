import styles from "./Pricing.module.css";
import PricingList from "../card/PricingList";

export default function Pricing() {
  return (
    <section className={styles.pricing__container}>
      <div className={styles.pricing__title}>
        <h2>Pricing</h2>
      </div>
      <div className={styles.pricing__cards}>
        <PricingList />
      </div>
    </section>
  );
}
