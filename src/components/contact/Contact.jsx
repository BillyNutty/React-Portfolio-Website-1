import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l9bm0m1",
      "template_148sqqw",
      form.current,
      "_SNHK5DeoNORf188h"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>
              <small>william.f.notturno@gmail.com</small>
            </h5>
            <a href="mailto:william.f.notturno@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Billy Notturno</h5>
            <a href="https://m.me/billy.notturno" target="_blank">
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <PiLinkedinLogo className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>William Notturno</h5>
            <a
              href="https://www.linkedin.com/in/williamnotturno/"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/*End of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your E-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
