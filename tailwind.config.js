/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnColor: "#FDBB57",
        bgColor: "#FEECC8",
        priceColor: "#C4C4C4",
        hbColor: "#FAE3B6",
        selColor: "#CFA485",
        starColor: "#FFFFFF",
      },
      fontFamily:{
        Crimson: ['Crimson Text']
      },
      maxWidth:{
        bannerContainer: '1270px'
      },

    },
  },
  plugins: [],
}

