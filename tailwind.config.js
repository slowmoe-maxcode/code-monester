module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#a0616a",
        bluegray_50: "#ecf2f7",
        bluegray_100: "#cccccc",
        deep_purple_100: "#d0cde1",
        gray_300: "#dedfe1",
        gray_100: "#f2f2f2",
        black_900_1e: "#0000001e",
        bluegray_800: "#3f3d56",
        black_900_66: "#00000066",
        black_900: "#0b0e16",
        black_901: "#000000",
        white_A700: "#ffffff",
        indigo_500: "#2c4cc9",
      },
      borderRadius: { radius12: "12px", radius13: "13px", radius29: "29px" },
      boxShadow: { bs: "0px 3px  12px 0px #0000001e" },
      fontFamily: {
        gilroymedium: "Gilroy-Medium",
        gilroybold: "Gilroy-Bold",
        gilroysemibold: "Gilroy-SemiBold",
        gilroy: "Gilroy",
        netflixsans: "Netflix Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
