import { useEffect } from "react";
import './contact.css'

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <>
      <div className="contact-container">
        <h2 className="title">Contact Us</h2>
        <p className="description">
          Have questions or feedback? Feel free to reach out to us.
        </p>
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
