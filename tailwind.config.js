/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        slightDarkCyan: 'hsl(168, 34%, 41%)',
        darkestBlue: 'hsl(212, 27%, 19%)',
        darkestGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        Fr: 'Fraunces',
        Ba: 'Barlow'
      }
    },
  },
  plugins: [],
}

