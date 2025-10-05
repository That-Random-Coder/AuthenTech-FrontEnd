// src/components/Public/ContactForm.jsx
import React, { useState } from "react";
import "../../styles/public.scss";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // no-backend demo: show basic confirmation
    alert("Thanks! We received your message (demo).");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required value={form.name} onChange={onChange} />
      </label>

      <label>
        Email
        <input name="email" type="email" required value={form.email} onChange={onChange} />
      </label>

      <label>
        Message
        <textarea name="message" rows="5" required value={form.message} onChange={onChange} />
      </label>

      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  );
}
