// src/pages/Public/PublicAuthLayout.jsx
import React from "react";
import Header from "../../components/Public/Header";
import Footer from "../../components/Public/Footer";
import "../../styles/public.scss";

export default function PublicAuthLayout({ children }) {
  return (
    <div className="public-page">
      <Header />
      <main className="container auth-wrap">{children}</main>
      <Footer />
    </div>
  );
}
