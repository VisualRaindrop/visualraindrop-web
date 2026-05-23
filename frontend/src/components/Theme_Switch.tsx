import { useEffect, useState } from "react";

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) { return savedTheme === "dark"; }
        else { return window.matchMedia("(prefers-color-scheme: dark)").matches;}
    });

    useEffect(() => {
      document.documentElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={'flex h-8 w-16 items-center rounded-full bg-white/20 p-1 shadow transition'}
            aria-label={'Toggle Dark Mode'}
        >
            <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform duration-300 ${
          isDarkMode
            ? "translate-x-7 bg-slate-700"
            : "translate-x-0 bg-yellow-500"
        }`}
                >
                {isDarkMode ? '☾' : '☀'}
            </div>
        </button>
    )
}

export default ThemeToggle;