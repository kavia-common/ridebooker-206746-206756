module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827",
      },
    },
    fontFamily: { sans: ['system-ui', '-apple-system', 'sans-serif'] },
    borderRadius: {
      'xl': '1.1rem',
      'lg': '0.65rem',
      'md': '0.45rem',
      'sm': '0.23rem',
    },
  },
  plugins: [],
};
