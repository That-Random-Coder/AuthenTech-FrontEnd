import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="/logo.svg" alt="AuthenTech" style={{ width: 40 }} />
        <div className="brand-title">AuthenTech</div>
      </div>

      <nav className="nav">
        <NavLink to="/" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/sessions" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          <span>Sessions</span>
        </NavLink>

        <NavLink to="/reports" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          <span>Reports</span>
        </NavLink>

        <NavLink to="/users" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          <span>Users</span>
        </NavLink>

        <NavLink to="/courses" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
          <span>Courses</span>
        </NavLink>
      </nav>

      <div className="footer"> © {new Date().getFullYear()} AuthenTech</div>
    </aside>
  );
};

export default Sidebar;
