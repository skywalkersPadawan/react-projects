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

      <ul>
        {projects
          .filter((project) =>
            project.name.toLowerCase().includes(query.toLowerCase()),
          )
          .map((project) => (
            <li key={project.path}>
              <Link to={project.path}>{project.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
