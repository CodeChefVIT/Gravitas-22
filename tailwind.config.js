/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mudclaw: ["Mudclaw"],
      grotesk: ["Cy Grotesk Grand Bold"],
      mabry: ["Mabry Pro"],
      plex: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};
