/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#f3f4f6",
          200: "#bae6fd",
        300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          // Add more shades as needed
        },
        // Gray shades
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#3f3f46",
          800: "#27272a",
          // Add more shades as needed
        },
        // Red shades
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          100: "#fee2e2",
          100: "#fee2e2",
          
          // Add more shades as needed
        },
        // Add customizations for other color categories
        // ...
      },
    },
  },
  plugins: [],
}
