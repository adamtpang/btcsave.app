/* eslint-disable react-refresh/only-export-components -- theme context module intentionally exports the provider, the hook, and the palette together */
import { createContext, useContext, useEffect, useState } from "react";

// Iron design system palette: monochrome, premium, dark by default.
// "amber" is kept as the key name so components need no change; its VALUE
// is now platinum (dark) / ink (light). accentInk = text/icon on the accent.
export const PALETTES = {
  dark: {
    bg: "#0a0b0d", panel: "#121418", panel2: "#181b20", line: "#282d35",
    ink: "#f3f5f7", mut: "#939aa4", amber: "#e7eaed", amber2: "#c8cdd2",
    accentInk: "#0b0c0f", accentSoft: "rgba(231,234,237,.09)", green: "#aeb4b8",
    phone: "linear-gradient(160deg,#171a1f,#0d0f12)",
    glow1: "rgba(231,234,237,.05)", glow2: "rgba(231,234,237,.025)",
  },
  light: {
    bg: "#eef0f2", panel: "#ffffff", panel2: "#f4f6f8", line: "#dfe3e7",
    ink: "#14171b", mut: "#4b535c", amber: "#16181c", amber2: "#2c313a",
    accentInk: "#ffffff", accentSoft: "rgba(20,23,28,.06)", green: "#6a7370",
    phone: "linear-gradient(180deg,#ffffff,#f4f6f8)",
    glow1: "rgba(20,23,28,.03)", glow2: "rgba(20,23,28,.015)",
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("iron-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light"; // light is the default
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") localStorage.setItem("iron-theme", theme);
    document.documentElement.style.colorScheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.background = PALETTES[theme].bg;
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle, C: PALETTES[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
