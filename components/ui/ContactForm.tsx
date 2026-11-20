"use client";

import { useState } from "react";
import { contact } from "@/config/contact";
import "./ContactForm.component.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    const subject = encodeURIComponent(`Message from portfolio: ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-form">
      <label className="contact-form__label">
        name
        <input
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-form__field"
        />
      </label>
      <label className="contact-form__label">
        email
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-form__field"
        />
      </label>
      <label className="contact-form__label">
        message
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-form__field contact-form__textarea"
        />
      </label>
      <button type="button" onClick={send} className="contact-form__submit">
        Send message
      </button>
    </div>
  );
}