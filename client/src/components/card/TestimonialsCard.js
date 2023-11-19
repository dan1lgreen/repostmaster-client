import Styles from "./TestimonialsCard.module.css";

export default function TestimonialsCard({ ...testimonials }) {
  return (
    <div className={Styles.testimonials__card}>
      <div className={Styles.testimonials__card__text}>
        <p>{testimonials.text}</p>
      </div>
      <div className={Styles.testimonials__card__profile}>
        <div className={Styles.testimonials__card__profile__image}>
          <img
            src={testimonials.image}
            alt={`Testimonial by ${testimonials.name}`}
          />
        </div>
        <div className={Styles.testimonials__card__profile__name__position}>
          <p className={Styles.testimonials__card__profile__name}>
            {testimonials.name}
          </p>
          <p className={Styles.testimonials__card__profile__position}>
            {testimonials.position}
          </p>
        </div>
        <div className={Styles.testimonials__card_profile__review}>
          {testimonials.SvgComponent && <testimonials.SvgComponent />}
        </div>
      </div>
    </div>
  );
}
