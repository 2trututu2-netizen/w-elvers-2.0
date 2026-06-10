/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050509",
        foreground: "#f9fafb",
        primary: "#6366f1",
        "primary-foreground": "#ffffff",
        secondary: "#111827",
        border: "#1f2933",
        muted: "#6b7280"
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
        sans: ["system-ui", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
