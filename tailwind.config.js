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
        yellow: {
          400: "#F0DB9F", // Sfumatura dorata media
          500: "#DDBA77", // Sfumatura più vicina al logo
        },
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
      xxs: "380px",
      xs: "420px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
};
