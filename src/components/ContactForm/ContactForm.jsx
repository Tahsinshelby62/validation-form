import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("radhe");
  const [email, setEmail] = useState("abc@gg.com");
  const [text, setText] = useState("hello there");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button text="VIA CALL" icon={<MdCall />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={6} />
          </div>
          <div className={styles.submitBtn}>
            <Button text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contactImage}>
        <img src="/images/main.jpg" alt="contact form image" />
      </div>
    </section>
  );
};

export default ContactForm;
