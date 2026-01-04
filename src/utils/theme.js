export const applyTheme = (isDark) => {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

export const getInitialTheme = () => {
  return localStorage.getItem("theme") === "dark";
};
