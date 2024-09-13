/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // backgroundImage: {
      //   "black-gradient":
      //     "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
      // },
      backgroundImage: {
        "black-glass":
          "linear-gradient(144.39deg, rgba(0, 0, 0, 0.3) -278.56%, rgba(0, 0, 0, 0.5) -78.47%, rgba(17, 16, 29, 0.7) 91.61%)",
      },
      backdropBlur: {
        glass: "10px",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
};
