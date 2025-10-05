import React from "react";
import "./TeacherDashboard.scss";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      <div className="dashboard-cards">
        <SummaryCard title="Overall Attendance" value="374" variant="blue" />
        <SummaryCard title="Active Sessions" value="3,745" variant="blue" />
        <SummaryCard title="Flagged Attempts" value="2,640" variant="green" />
        <SummaryCard
          title="Punctuality Streak"
          value="1,408"
          variant="purple"
          description="Consecutive days on time"
        />
      </div>  
    </div>
  );
};

export default TeacherDashboard;
