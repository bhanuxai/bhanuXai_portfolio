/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "var(--bg-color)",
        primary: "var(--primary-color)",
        accent: "var(--accent-color)",
        textLight: "var(--text-primary)",
        textMuted: "var(--text-muted)",
        glassBg: "var(--glass-bg)",
        glassBorder: "var(--glass-border)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "sans-serif"],
        display: ["Fredoka", "Sora", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glass': 'var(--shadow-glass)',
        'glass-glow': 'var(--shadow-glass)',
        'glow-primary': 'none',
        'glow-accent': 'none',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
