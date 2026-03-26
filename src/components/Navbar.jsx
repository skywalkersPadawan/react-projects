import { Link } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
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
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{ marginLeft: "auto" }}
      >
        Toggle Theme
      </button>
    </nav>
  );
}
