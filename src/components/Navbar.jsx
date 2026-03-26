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
        color: "#fff",
      }}
    >
      <span style={{ fontWeight: "bold" }}>React Hub</span>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          to="/"
          style={{ marginRight: "10px" }}
        >
          Home
        </Link>
        <Link
          to="/accordion"
          style={{ marginRight: "10px" }}
        >
          Accordion
        </Link>
        <Link
          to="/modal"
          style={{ marginRight: "10px" }}
        >
          Modal
        </Link>
        <Link
          to="/tabs"
          style={{ marginRight: "10px" }}
        >
          Tabs
        </Link>
        <Link
          to="/github"
          style={{ marginRight: "10px" }}
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
