/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  margin: {
    "1/4": "15%",
    "1/2": "5%",
    "3/4": "25%",
  },
  extend: {
    colors: {
      background: "#0d1d2d",
      demoSecion:"#f2f5fb",
      textColor:"#929dac",
      demoSectionText:"#626E7E",
      cardNoBackground:"#3E87F6",
      cardBorderColor:"#29394B"
    },
  },
};
export const plugins = [];
