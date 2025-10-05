import React, { useState, useContext } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { login as loginApi } from "../../api/auth";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "", sessionType: "HOD" });
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const parseRoleFromToken = (token) => {
    try {
      const payload = token.split(".")[1];
      const decoded = JSON.parse(atob(payload));
      if (decoded.role) return decoded.role;
      if (decoded.roles && Array.isArray(decoded.roles) && decoded.roles.length) return decoded.roles[0];
      if (decoded.authorities && Array.isArray(decoded.authorities) && decoded.authorities.length) {
        const a = decoded.authorities[0];
        if (typeof a === "string") return a.replace(/^ROLE_/, "");
        return (a.authority || a).replace(/^ROLE_/, "");
      }
      return null;
    } catch {
      return null;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await loginApi(form.email, form.password, form.sessionType);
      const token = resp?.token || resp?.accessToken || resp?.jwt;
      if (!token) throw new Error("Login failed");
      const roleFromToken = parseRoleFromToken(token) || resp?.sessionType || resp?.role || (resp?.user && resp.user.role) || form.sessionType || "HOD";
      setAuth(token, typeof roleFromToken === "string" ? roleFromToken.replace(/^ROLE_/, "") : roleFromToken);
      navigate("/");
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || "Login failed";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ display: "grid", placeItems: "center", height: "70vh" }}>
      <form className="card" style={{ padding: 28, width: 380 }} onSubmit={submit}>
        <h3 style={{ marginTop: 0 }}>Sign in</h3>

        <label style={{ display: "block", marginBottom: 8 }}>Role</label>
        <select name="sessionType" value={form.sessionType} onChange={onChange} style={{ width: "100%", padding: 10, marginBottom: 14 }}>
          <option value="STUDENT">STUDENT</option>
          <option value="TEACHER">TEACHER</option>
          <option value="HOD">HOD</option>
          <option value="PRINCIPAL">PRINCIPAL</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <label style={{ display: "block", marginBottom: 8 }}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14 }}
        />
        <label style={{ display: "block", marginBottom: 8 }}>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14 }}
        />
        <button className="btn-cta" type="submit" style={{ width: "100%" }} disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Login;