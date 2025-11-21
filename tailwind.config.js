module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "var(--bg-primary-blue)",
      },
      fontFamily: {
        sans: "var(--font-sans, Arial, Helvetica, sans-serif)",
      },
    },
  },
  plugins: [],
};
