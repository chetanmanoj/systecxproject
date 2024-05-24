/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/loginbg.png')",
        divisions: 'linear-gradient(358.83deg, #572AD8 15.85%, #00A8E1 92.68%)',
        mainboard: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 54.28%, rgba(1, 247, 202, 0.44) 106.74%)',
        tradesboard: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 54.28%, rgba(1, 247, 202, 0.44) 175.74%)',
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
    
  },
  plugins: [],
}

