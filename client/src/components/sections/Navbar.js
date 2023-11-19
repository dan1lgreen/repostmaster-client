import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <div className={styles.navbar__logo}>
        <h1>
          <span style={{ color: "#8f5cf3" }}>Repost</span>
          <span style={{ color: "#FE9799" }}>Master</span>
        </h1>
      </div>
      <div className={styles.navbar__signup__button}>
        <a href="#contact__form">
          <button>Sign Up</button>
        </a>
      </div>
    </nav>
  );
}
