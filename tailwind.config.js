module.exports = {
  theme: {
    fontFamily: {
      // This completely replaces the default fonts rather than extending them
      sans: ['"Manrope"', "sans-serif"],
    },
    extend: {
      // Other extensions
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
};
