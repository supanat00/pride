/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
      ringheader: "2rem",
    },
    fontWeight: {
      // ค่าเริ่มต้น
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      // ค่าที่กำหนดเอง
      hairline: 100,
      book: 350,
      demi: 600,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#ffffff",
      "white-100": "#F7F5F2",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      pink: "#ec4899",
      "pink-100": "#EDE3D6",
      "pink-200": "#F9F6F2",
    },
    fontFamily: {
      NotoSansThai: ["NotoSansThai"],
      Playfair: ["Playfair"],
      Prompt: ["Prompt"],
    },
    lineHeight: {
      mono: 1,
      normal: 1.2, // มาตรฐานทั่วไป
      relaxed: 1.5, // สำหรับการอ่านเนื้อหา
      loose: 2, // เพิ่มระยะห่างระหว่างบรรทัดมากขึ้น
    },
    extend: {},
  },
  tailwindcss: {},
  autoprefixer: {},
  plugins: [],
};
