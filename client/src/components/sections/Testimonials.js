import Styles from "./Testimonials.module.css";
import TestimonialsList from "../card/TestimonialsList";

export default function Testimonials() {
  return (
    <section className={Styles.testimonials__container}>
      <div className={Styles.testimonials__content}>
        <div className={Styles.testimonials__title}>
          <h2>Testimonials</h2>
        </div>
        <div className={Styles.testimonials__cards}>
          <TestimonialsList />
        </div>
      </div>
    </section>
  );
}
