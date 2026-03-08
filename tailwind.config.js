/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        "text-primary": "#4a3f5c",
        "accent-rose": "#e11d48",
        "accent-pink": "#ec4899",
        "accent-purple": "#a855f7",
        "accent-emerald": "#059669",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(168, 85, 247, 0.08), 0 8px 48px -8px rgba(236, 72, 153, 0.12)",
        "card-hover": "0 8px 32px -4px rgba(168, 85, 247, 0.12), 0 16px 64px -8px rgba(236, 72, 153, 0.16)",
        "btn-pink": "0 4px 14px -2px rgba(236, 72, 153, 0.4)",
        "btn-pink-hover": "0 6px 20px -2px rgba(236, 72, 153, 0.5)",
        "btn-emerald": "0 4px 14px -2px rgba(5, 150, 105, 0.4)",
        "btn-emerald-hover": "0 6px 20px -2px rgba(5, 150, 105, 0.5)",
        "btn-purple": "0 4px 14px -2px rgba(168, 85, 247, 0.4)",
        "btn-purple-hover": "0 6px 20px -2px rgba(168, 85, 247, 0.5)",
      },
      borderRadius: {
        card: "1.5rem",
        "card-lg": "2rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      blur: {
        "80": "80px",
      },
      transitionDuration: {
        smooth: "350ms",
      },
    },
  },
  plugins: [],
};
