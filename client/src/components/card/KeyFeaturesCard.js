import styles from "../card/KeyFeaturesCard.module.css";

export default function KeyFeaturesCard({ title, subtitle, SvgComponent }) {
  return (
    <div className={styles.key__features__card}>
      <div className={styles.key__features__card__image}>
        {SvgComponent && <SvgComponent />}
      </div>
      <div className={styles.key__features__card__title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.key__features__card__subtitle}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
