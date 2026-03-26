import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { name: "Accordion", path: "/accordion" },
  { name: "Modal", path: "/modal" },
  { name: "Tabs", path: "/tabs" },
  { name: "Feature Flags", path: "/feature-flags" },
  { name: "GitHub Finder", path: "/github" },
  { name: "Image Slider", path: "/slider" },
  { name: "Light/Dark Mode", path: "/theme" },
  { name: "Load More Data", path: "/load-more" },
  { name: "QR Code Generator", path: "/qr" },
  { name: "Random Color", path: "/color" },
  { name: "Scroll Indicator", path: "/scroll-indicator" },
  { name: "Scroll To Top/Bottom", path: "/scroll" },
  { name: "Search Autocomplete", path: "/search" },
  { name: "Star Rating", path: "/rating" },
  { name: "Tic Tac Toe", path: "/tic-tac-toe" },
  { name: "Tree View", path: "/tree" },
  { name: "useFetch Hook", path: "/use-fetch" },
  { name: "useClickOutside Hook", path: "/use-click" },
  { name: "useWindowResize Hook", path: "/use-resize" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Mini Projects</h1>

      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {filteredProjects.map((project) => (
          <Link
            key={project.path}
            to={project.path}
            style={{
              padding: "15px",
              background: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#333",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.2s",
            }}
          >
            {project.name}
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p style={{ marginTop: "10px" }}>No results found</p>
      )}
    </div>
  );
}
