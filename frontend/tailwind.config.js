/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333", // Dark Gray (Text)
        secondary: "#F5F5F5", // Light Gray (Background)
        accent: "#C19A6B", // Muted Gold (Highlights)
        dark: "#000000", // Black (Strong UI elements)
        light: "#FFFFFF", // White (Text/Background)
        border: "#D1BFA7" // Soft Beige (Border/Details)
      },
      fontFamily: {
        heading: ["DM Serif Display", "sans-serif"], // Headings
        body: ["Montserrat", "sans-serif"] // Body text
      }
    }
  },
  plugins: []
}
