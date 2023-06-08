/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "header-desktop": "url('../assets/images/desktop/image-hero.jpg')",
        "header-mobile": "url('../assets/images/mobile/image-hero.jpg')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      darkGray: "hsl(0, 0%, 55%)",
      veryDarkGray: "hsl(0, 0%, 41%)",
    },
    fontFamily: {
      alata: "'Alata', sans serif",
      josefin: "'Josefin Sans', sans serif",
    },
    fontSize: {
      sm: ["2.4rem", { lineHeight: "2.5rem", fontWeight: "300" }],
      base: ["1.5rem", { lineHeight: "2.5rem", fontWeight: "400" }],
      lg: ["3.2rem", { lineHeight: "3.2rem", fontWeight: "300" }],
      xl: ["4.0rem", { lineHeight: "3.8rem", fontWeight: "300" }],
      "2xl": ["4.8rem", { lineHeight: "4.8rem", fontWeight: "300" }],
      "3xl": ["7.2rem", { lineHeight: "7rem", fontWeight: "300" }],
    },
  },
  plugins: [],
};
//(72,72) , (48 ,48)  ,(40,38),(32 ,32) , (15,25)
