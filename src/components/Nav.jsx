import { Link } from "react-router-dom";
import { useTheme } from "../theme.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Nav({ right }) {
  const { C } = useTheme();
  return (
    <div className="flex items-center justify-between" style={{ maxWidth: 920, margin: "0 auto", padding: "18px 20px" }}>
      <Link to="/" className="flex items-center" style={{ gap: 3 }} aria-label="Iron">
        <svg width="21" height="21" viewBox="0 0 64 64" fill="none" style={{ color: C.ink, flexShrink: 0 }}>
          <path fill="currentColor" d="M11 9h42v10.5H39.5v25H53V55H11V44.5h13.5v-25H11V9Z" />
        </svg>
        <span className="disp" style={{ fontWeight: 600, fontSize: 22, letterSpacing: "0", color: C.ink }}>ron</span>
      </Link>
      <div className="flex items-center" style={{ gap: 12 }}>
        {right}
        <ThemeToggle />
      </div>
    </div>
  );
}
