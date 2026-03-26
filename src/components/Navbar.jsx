import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #4f46e5, #9333ea)",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        color: "#f9fafb",
        textDecoration: "none",
        fontWeight: "500",
      }}
    >
      <span style={{ fontWeight: "bold" }}>React Hub</span>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          to="/"
          // style={{ marginRight: "10px" }}
        >
          Home
        </Link>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Google
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        <Link
          to="/github"
          // style={{ marginRight: "10px" }}
        >
          GitHub
        </Link>
      </div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          marginLeft: "auto",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          background: "#fff",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
}
