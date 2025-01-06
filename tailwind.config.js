/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        "light-mode-bg": "url('./assets/images/bg-mobile-light.jpg')",
        "light-mode-bg-desktop": "url('./assets/images/bg-desktop-light.jpg')",
        "dark-mode-bg": "url('./assets/images/bg-mobile-dark.jpg')",
        "dark-mode-bg-desktop": "url('./assets/images/bg-desktop-dark.jpg')",
      },
      colors: {
        primary: {
          brightBlue: "hsl(220, 98%, 61%)",
          checkBackground:
            "linear-gradient(to left,hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        },
        neutral: {
          // Light theme colors
          light: {
            veryLightGray: "hsl(0, 0%, 98%)",
            veryLightGrayishBlue: "hsl(236, 33%, 92%)",
            lightGrayishBlue: "hsl(233, 11%, 84%)",
            darkGrayishBlue: "hsl(236, 9%, 61%)",
            veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
          },
          //dark theme color
          dark: {
            veryDarkBlue: "hsl(235, 21%, 11%)",
            veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
            lightGrayishBlue: "hsl(234, 39%, 85%)",
            lightGrayishBlueHover: "hsl(236, 33%, 92%)",
            darkGrayishBlue: "hsl(234, 11%, 52%)",
            veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
            veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
          },
        },
      },
    },
  },
  plugins: [],
};
