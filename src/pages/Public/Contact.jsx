// src/pages/Public/Contact.jsx
import React from "react";
import Header from "../../components/Public/Header";
import Footer from "../../components/Public/Footer";
import ContactForm from "../../components/Public/ContactForm";
import "../../styles/public.scss";

export default function Contact() {
  return (
    <div className="public-page">
      <Header />
      <main className="container contact-main">
        <h1>Contact</h1>

        <div className="contact-grid">
          <div className="contact-left">
            <p>For partner enquiries, deployment help, or to report a bug, email <a href="mailto:hello@authentech.example">hello@authentech.example</a></p>
            <p>Office (demo): 123 Education Lane, Campus City</p>
            <p>We typically reply within 2 business days.</p>
          </div>

          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
