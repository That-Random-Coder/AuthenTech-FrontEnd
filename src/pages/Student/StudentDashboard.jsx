import React, { useEffect, useState } from "react";
import "./StudentDashboard.scss";
import { getStudentAttendance } from "../../api/student";

const StudentDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const getStoredStudentId = () => {
      const maybe = localStorage.getItem('id');
      if (maybe) {
        try {
          const parsed = JSON.parse(maybe);
          if (parsed?.id) return parsed.id;
          if (parsed?.studentId) return parsed.studentId;
          if (parsed?.userId) return parsed.userId;
        } catch {}
        return maybe;
      }
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          return payload?.studentId || payload?.sub || payload?.id || payload?.userId || null;
        } catch {}
      }
      return null;
    };

    const studentId = getStoredStudentId();
    if (!studentId) {
      setError("No student ID found. Please log in.");
      setLoading(false);
      return () => (mounted = false);
    }

    const fetch = async () => {
      try {
        const data = await getStudentAttendance(studentId);
        if (!mounted) return;
        const formatted = (data || []).map((item, idx) => {
          const courseName = item.course_name || item.courseName || item.course || "Unknown";
          const status = item.status || item.attendance_status || "UNKNOWN";
          const rawDate = item.date || item.localDate || item.time || item.timestamp || item.createdAt || item.date_time || null;
          let date = rawDate;
          if (rawDate) {
            const d = new Date(rawDate);
            if (!isNaN(d.getTime())) date = d.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
          }
          const id = item.id || item.sessionID || item.sessionId || `${studentId}-${idx}`;
          return { id, courseName, status, date };
        });
        setSessions(formatted);
      } catch (err) {
        setError((err && err.response && err.response.data && err.response.data.message) || err.message || "Failed to load attendance");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetch();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="student-dashboard">
        <h2>My Attendance</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="student-dashboard">
        <h2>My Attendance</h2>
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="student-dashboard">
      <h2>My Attendance</h2>
      <ul>
        {sessions.length === 0 ? (
          <li>No attendance records found.</li>
        ) : (
          sessions.map((s) => (
            <li key={s.id}>
              <div>{s.courseName}</div>
              <div style={{ color: "rgba(0,0,0,0.55)" }}>
                {s.status} • {s.date || "—"}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default StudentDashboard;
