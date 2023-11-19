import styles from "./KeyFeatures.module.css";
import KeyFeaturesList from "../card/KeyFeaturesList";

export default function KeyFeatures() {
  return (
    <section className={styles.key__features__container}>
      <div className={styles.key__features__content}>
        <div className={styles.key__features__title}>
          <h2>Key Features</h2>
        </div>
        <div className={styles.key__features__subtitle}>
          <h2>
            <span style={{ color: "#black" }}>
              Our SaaS product is the{" "}
              <span style={{ color: "#8355FC" }}>
                world's first Instagram direct message auto repost bot.
              </span>{" "}
            </span>
            It simplifies reposting from personal messages. Find viral post,
            send to your friends and bot - laugh and grow your account.
          </h2>
        </div>
        <div className={styles.key__features__content__cards}>
          <KeyFeaturesList />
        </div>
      </div>
    </section>
  );
}
