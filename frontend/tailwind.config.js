/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37AFE1", // Button Background
        secondary: "#E5D9F2", // Secondary Background
        accent: "#578FCA", // Button Hover
        background: "#F5EFFF", // Main Background
        textColor: "#000000" // Black Text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Roboto", "sans-serif"]
      },
      fontSize: {
        "2xl": "24px",
        "3xl": "36px",
        "4xl": "48px"
      },
      spacing: {
        1: "8px",
        2: "16px",
        4: "32px"
      }
    }
  },
  plugins: []
}
