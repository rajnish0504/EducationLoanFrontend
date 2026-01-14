import { useEffect, useState } from "react";
import api from "../utils/api";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    api.get("/api/auth/me")
      .then(res => setStudent(res.data))
      .catch(() => setStudent(null));
  }, []);

  return (
    <AuthContext.Provider value={{ student, setStudent }}>
      {children}
    </AuthContext.Provider>
  );
};
