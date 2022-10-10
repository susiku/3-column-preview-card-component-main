/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.html"
  ],
  theme: {
    screens:{
      "sm":"375px",
      "xl":"1440px"
    },
    extend: {
      colors:{
        "Bright-Orange":"hsl(31, 77%, 52%)",
        "Dark-Cyan":"hsl(184, 100%, 22%)",
        "Black-Cyan":"hsl(179, 100%, 13%)",
        "Transparent-White":" hsla(0, 0%, 100%, 0.75)",
        "Light-Gray":"hsl(0, 0%, 95%)"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
