import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem("token");
  const roleFromStorage = localStorage.getItem("role");

  const [token, setToken] = useState(tokenFromStorage || null);
  const [role, setRole] = useState(roleFromStorage || null);
  const isAuthenticated = !!token;

  const setAuth = (t, r) => {
    setToken(t);
    setRole(r);
    localStorage.setItem("token", t);
    localStorage.setItem("role", r);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ token, role, isAuthenticated, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
