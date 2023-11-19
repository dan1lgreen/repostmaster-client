import styles from "./Announcement.module.css";

export default function Announcement() {
  return (
    <section className={styles.announcement__container}>
      <div className={styles.announcement__content}>
        <div className={styles.announcement__title}>
          <h2>Direct Message Auto Repost AI Bot</h2>
        </div>
        <div className={styles.announcement__text}>
          <p>
            So if you are a theme page owner or content creator, dropshipper or
            someone who needs to{" "}
            <span style={{ color: "#FC969A" }}>
              generate leads quickly and easy
            </span>{" "}
            - do not hesitate,{" "}
            <span style={{ color: "#8757F9" }}>only 10$/month</span> for early
            adopters. Bot will be available for public in{" "}
            <span style={{ color: "#FC969A" }}>Q1 2024.</span> More features,
            like cross-platform reposting, AI-driven reposts and other coming in
            Q2 2024.
          </p>
        </div>
      </div>
    </section>
  );
}
