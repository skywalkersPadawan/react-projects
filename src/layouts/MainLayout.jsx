import Navbar from "../components/Navbar";
import useLocalStorage from "../components/light-dark-mode/useLocalStroage";

export default function MainLayout({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div
      style={{
        background: theme === "dark" ? "#121212" : "#f5f5f5",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {children}
      </main>
    </div>
  );
}
