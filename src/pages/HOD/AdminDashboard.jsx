// import React from "react";
// import "./AdminDashboard.scss";
// import SummaryCard from "../../components/SummaryCard/SummaryCard";

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <h2>HOD Dashboard</h2>
//       <div className="dashboard-cards">
//         <SummaryCard title="Total Users" value="120" variant="blue" />
//         <SummaryCard title="Courses" value="24" variant="teal" />
//         <SummaryCard title="Departments" value="5" variant="green" />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React from "react";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-hero">
        <div className="hero-inner">
          <h1 className="hero-title">DASHBOARD</h1>
        </div>
        <div className="hero-wave" />
      </div>

      <div className="icon-row">
        <div className="icon-tile tile-green">
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <path fill="#fff" d="M12 3.3L3.5 9v11a1 1 0 001 1h5v-7h4v7h5a1 1 0 001-1V9L12 3.3z" />
          </svg>
        </div>

        <div className="icon-tile tile-blue">
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <path fill="#fff" d="M6.6 10.2a15.1 15.1 0 006.6 6.6l1.7-1.7a1 1 0 01.9-.2 11.3 11.3 0 003.4.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.7a1 1 0 011 1 11.3 11.3 0 00.9 3.4 1 1 0 01-.2.9L6.6 10.2z" />
          </svg>
        </div>

        <div className="icon-tile tile-teal">
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <path fill="#fff" d="M12 8.5A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 8.5zm7.4 2.7l1.6-1a1 1 0 00.2-1.4l-1.5-2.6a1 1 0 00-1.3-.4l-1.9.8a7.1 7.1 0 00-1.7-.9l-.3-2a1 1 0 00-1-.9h-3a1 1 0 00-1 .9l-.3 2a7.1 7.1 0 00-1.7.9l-1.9-.8a1 1 0 00-1.3.4L2.8 9.8a1 1 0 00.2 1.4l1.6 1a7 7 0 000 2.2l-1.6 1a1 1 0 00-.2 1.4l1.5 2.6a1 1 0 001.3.4l1.9-.8a7.1 7.1 0 001.7.9l.3 2a1 1 0 001 .9h3a1 1 0 001-.9l.3-2a7.1 7.1 0 001.7-.9l1.9.8a1 1 0 001.3-.4l1.5-2.6a1 1 0 00-.2-1.4l-1.6-1a7 7 0 000-2.2z" />
          </svg>
        </div>

        <div className="icon-tile tile-orange">
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <path fill="#fff" d="M11 7h2v6h-2zM11 15h2v2h-2z" />
          </svg>
        </div>
      </div>

      <div className="cards-grid">
        <div className="info-card card-orange">
          <div className="card-content">
            <div className="label">Name:</div>
            <div className="value medium">Harsh Narodey</div>
          </div>
        </div>

        <div className="info-card card-teal">
          <div className="card-content">
            <div className="label">Lectures Attended:</div>
            <div className="value medium">28</div>
          </div>
        </div>

        <div className="info-card card-blue">
          <div className="card-content">
            <div className="label">Total Classes:</div>
            <div className="value medium">12</div>
          </div>
        </div>

        <div className="info-card card-green">
          <div className="card-content">
            <div className="label">Total Attendance</div>
            <div className="value medium">70%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;