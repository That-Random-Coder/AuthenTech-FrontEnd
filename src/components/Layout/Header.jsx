import React from "react";
import "./Header.scss";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { logout, role } = useAuth();

  return (
    <header className="header">
      <div style={{ marginRight: "auto" }} />
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{role || "GUEST"}</div>
      <div className="avatar" title="Profile">
        <img src="https://i.pravatar.cc/80" alt="me" />
      </div>
      <button className="btn-cta" style={{ padding: "8px 12px", marginLeft: 8 }} onClick={() => logout()}>
        Logout
      </button>
    </header>
  );
};

export default Header;
