/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: {
          DEFAULT: "#0F1218", // Architect's Charcoal
          light: "#1F2937", 
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#F9FAF1", // Premium Paper White
          light: "#FFFFFF",
          dark: "#E5E7EB",
        },
        accent: {
          DEFAULT: "#D4AF37", // Champagne Gold
          alt: "#B8860B", // Dark Goldenrod
          blue: "#3B82F6", // Structural Blue
        },
        text: {
          primary: "#0F1218",
          secondary: "#4B5563",
          tertiary: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E2E8F0",
          dark: "#CBD5E1",
        },
        // Dark Mode Colors
        dark: {
          bg: "#05070A", // Obsidian Black
          surface: "#0F1218", // Deep Charcoal
          text: "#F9FAF1",
          textSecondary: "#9CA3AF",
          border: "#1F2937",
        }
      },
      fontFamily: {
        heading: ["Space Grotesk", "Inter", "sans-serif"], // Bold architectural headings
        body: ["Inter", "system-ui", "sans-serif"], // Clean body text
        display: ["Space Grotesk", "sans-serif"], // Large display text
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 72px
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 48px
        '4xl': ['2.25rem', { lineHeight: '1.25' }], // 36px
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px
        '2xl': ['1.5rem', { lineHeight: '1.35' }], // 24px
        'xl': ['1.25rem', { lineHeight: '1.4' }], // 20px
        'lg': ['1.125rem', { lineHeight: '1.5' }], // 18px
        'base': ['1rem', { lineHeight: '1.6' }], // 16px
        'sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'xs': ['0.75rem', { lineHeight: '1.4' }], // 12px
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '100': '25rem', // 400px
        '112': '28rem', // 448px
        '128': '32rem', // 512px
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'draw-line': 'drawLine 2s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    }
  },
  plugins: []
}
