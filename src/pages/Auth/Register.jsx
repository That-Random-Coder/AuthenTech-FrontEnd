import React, { useState } from "react";
import "../../styles/public.scss";
import "./Register.scss";
import { register as registerApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", role: "STUDENT" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const payload = { email: form.email, password: form.password, authority: form.role, fullName: form.name };
      await registerApi(payload);
      setForm({ name: "", email: "", password: "", confirmPassword: "", role: "STUDENT" });
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="title">Create Account</h1>
        <p className="subtitle">Sign up to get started with AuthenTech</p>

        {error && <div className="form-error">{error}</div>}

        <form className="register-form" onSubmit={onSubmit}>
          <label>
            Full Name
            <input type="text" name="name" required value={form.name} onChange={onChange} />
          </label>

          <label>
            Role
            <select name="role" value={form.role} onChange={onChange}>
              <option value="STUDENT">STUDENT</option>
              <option value="TEACHER">TEACHER</option>
              <option value="HOD">HOD</option>
            </select>
          </label>

          <label>
            Email Address
            <input type="email" name="email" required value={form.email} onChange={onChange} />
          </label>

          <label>
            Password
            <input type="password" name="password" required minLength="6" value={form.password} onChange={onChange} />
          </label>

          <label>
            Confirm Password
            <input type="password" name="confirmPassword" required minLength="6" value={form.confirmPassword} onChange={onChange} />
          </label>

          <button type="submit" className="btn btn-primary full-width" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="form-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}