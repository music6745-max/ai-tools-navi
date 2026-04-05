"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (t === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function cycle() {
    const next: Theme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      onClick={cycle}
      className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-full transition-colors"
      style={{
        background: theme === "dark" ? "#18181b" : theme === "light" ? "#ffffff" : "linear-gradient(135deg, #ffffff 50%, #18181b 50%)",
        color: theme === "dark" ? "#ededed" : theme === "light" ? "#171717" : "#6b7280",
        border: "1.5px solid",
        borderColor: theme === "dark" ? "#3f3f46" : theme === "light" ? "#d1d5db" : "#9ca3af",
      }}
      title={`\u30AF\u30EA\u30C3\u30AF\u3067\u80CC\u666F\u8272\u3092\u5207\u308A\u66FF\u3048`}
    >
      <span style={{ fontSize: "14px" }}>
        {theme === "dark" ? "\u{1F319}" : theme === "light" ? "\u2600\uFE0F" : "\u{1F504}"}
      </span>
      <span className="hidden sm:inline font-medium">
        {theme === "dark" ? "\u30C0\u30FC\u30AF" : theme === "light" ? "\u30E9\u30A4\u30C8" : "\u81EA\u52D5"}
      </span>
    </button>
  );
}
