import { useState } from "react";
import axios from "axios";
import Styles from "./ContactForm.module.css";
import Conformation from "../../assets/images/Group 269.png";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    return null;
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    return null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email);
    const errors = {
      name: nameError,
      email: emailError,
    };
    setErrors(errors);
    if (nameError || emailError) return;

    try {
      await axios.post(`https://repostmaster-server.cyclic.app/send-email`, {
        name: form.name,
        email: form.email,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setForm({ name: "", email: "" });
  };

  return (
    <section className={Styles.contact__container} id="contact__form">
      <div className={Styles.contact__content}>
        {isSubmitted ? (
          <div className={Styles.confirmation}>
            <img src={Conformation} alt="Conformation" />
            <p>Thank you for joining the waitlist!</p>
          </div>
        ) : (
          <>
            <div className={Styles.contact__title}>
              <h2>Get In Touch</h2>
            </div>
            <form className={Styles.contact__form} onSubmit={handleSubmit}>
              <div className={Styles.contact__form__element}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.name && <p className={Styles.error}>{errors.name}</p>}
              </div>
              <div className={Styles.contact__form__element}>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.email && <p className={Styles.error}>{errors.email}</p>}
              </div>
              <div className={Styles.contact__form__submit}>
                <button>Join the waitlist</button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
