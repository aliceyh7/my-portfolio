/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f4ee",
        paper: "#fffdf9",
        sand: "#e6dfd2",
        ink: "#1f1f1c",
        muted: "#6d6a62",
        forest: {
          DEFAULT: "#1f4a3a",
          dark: "#163a2d",
          light: "#e7efe9",
        },
        wood: "#8c5b33",
      },
      fontFamily: {
        serif: ["Iowan Old Style", "Palatino Linotype", "Palatino", "Georgia", "ui-serif", "serif"],
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
