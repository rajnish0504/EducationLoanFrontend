// src/utils/auth.js

const TOKEN_KEY = "token";
const ROLE_KEY = "role";
const LOGIN_KEY = "isLoggedIn";

/* OLD API (kept for compatibility) */
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(LOGIN_KEY, "true");
};

/* Get token */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/* Get role */
export const getRole = () => {
  return localStorage.getItem(ROLE_KEY);
};

/* Full auth state (USED BY NAVBAR) */
export const getAuth = () => {
  const token = getToken();
  const role = getRole();

  return {
    isLoggedIn: !!token,
    token,
    role,
  };
};

/* Logout */
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY);
  localStorage.removeItem(LOGIN_KEY);
};
