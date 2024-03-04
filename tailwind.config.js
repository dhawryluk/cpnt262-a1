/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      background: "rgba(var(--background))",
      fontColor: "rgba(var(--fontColor))",
      accent1: "rgba(var(--accent1))",
      accent2: "rgba(var(--accent2))",
      ctaButton: "rgba(var(--ctaButton))",
    },
    fontFamily: {
      titleFont: ['"Orbitron"', "sans-serif"],
      bodyFont: ['"Oswald"', "sans-serif"],
      serif: ['"Jacquarda Bastarda 9"', "serif"],
    },
  },
};

export const plugins = [];
export const darkMode = "class";
