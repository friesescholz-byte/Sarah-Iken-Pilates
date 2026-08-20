/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pilates: {
          dark: "#142017",
          darker: "#0d1710",
          card: "#1b2c21",
          sand: "#FAF7F2",
          sandLight: "#FDFBF7",
          sandDark: "#EFE8DC",
          gold: "#C98E56",
          goldLight: "#DDB082",
          goldDark: "#A66D37",
          sage: "#4A6B53",
          sageLight: "#E8EFEA",
          muted: "#66776C",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 32, 23, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(20, 32, 23, 0.16)',
        'gold-glow': '0 10px 30px -5px rgba(201, 142, 86, 0.3)',
      }
    },
  },
  plugins: [],
};
