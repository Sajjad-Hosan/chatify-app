/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "serif"],
        kaushan: ["Kaushan Script", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
