import styles from "./PricingCard.module.css";

export default function PricingCard({ ...pricingData }) {
  return (
    <div className={styles.pricing__card}>
      <div className={styles.pricing__icon__content}>
        <div className={styles.pricing__icon}>
          {pricingData.SvgComponent && <pricingData.SvgComponent />}
        </div>
      </div>
      <div className={styles.pricing__title}>
        <h3>{pricingData.title}</h3>
      </div>
      <hr className={styles.horizontal__line}></hr>
      <ul className={styles.pricing__card__features}>
        {pricingData.features.map((feature, index) => (
          <div
            key={`${feature}-${index}`}
            className={styles.pricing__card__features__content}
          >
            <li key={index} className={styles.pricing__card__features__icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
              >
                <rect
                  x="7.07104"
                  y="2.12132"
                  width="2"
                  height="7"
                  rx="1"
                  transform="rotate(45 7.07104 2.12132)"
                  fill="white"
                />
                <rect
                  x="4.94971"
                  y="7.07106"
                  width="2"
                  height="5"
                  rx="1"
                  transform="rotate(135 4.94971 7.07106)"
                  fill="white"
                />
              </svg>
            </li>
            <p>{feature}</p>
          </div>
        ))}
      </ul>
      <hr className={styles.horizontal__line}></hr>
      <div className={styles.pricing__card__pricing}>
        <div className={styles.pricing__card__price}>
          <span className={styles.pricing__card__amount}>
            {pricingData.price}
          </span>
          <span className={styles.pricing__card__month}>
            {pricingData.pricePeriod}
          </span>
        </div>
        <div className={styles.pricing__card__button}>
          <a href="#contact__form">
            <button>Sign up</button>
          </a>
        </div>
      </div>
    </div>
  );
}
