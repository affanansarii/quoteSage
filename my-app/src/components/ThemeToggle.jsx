import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};

export default ThemeToggle;
