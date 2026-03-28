/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"San Francisco"', '"SF Pro Display"', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        darkBg: 'var(--bg-color)',
        surface: 'var(--surface-color)',
        textMain: 'var(--text-main)',
        textMuted: 'var(--text-muted)',
        accent: 'var(--accent-color)',
        borderLight: 'var(--border-light)',
        borderMedium: 'var(--border-medium)',
        overlay: 'var(--overlay)',
        overlayHover: 'var(--overlay-hover)'
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
      }
    },
  },
  plugins: [],
}
