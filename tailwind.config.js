/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      screens: {
        'maxSm': {'max': '639px'},
      },
      fontFamily: {
        body: ['Inter, sans-serif'],
        body2: ['Pacifico, cursive'],
        body0: ['Red Hat Display'],
        rob: ['Roboto']
      },
      colors: {
        primary: '#04d9ff',
        dark: '#06102C',
        accent1: '#0B1D51',
        accent2: '#797596',
        light1: '#BBADA0',
        light2: '#D1C6AD',

        normal: 'hsl(23,13%,33%)',
      },
      boxShadow: {
        'blueGlow' : '0 0 1em .5em #ffffff',
        'brightGlow' : '0 0 1em .5em #38bdf8',
      },
      textShadow: {
        'white' : '0 0 1em #000000',
        'blue' : '0 0 1em #ffffff',
        'brightBlue': '0 0 1em #38bdf8',
        'pink' : '0 0 .5em #FF44CC',
        'brightPink' : '0 0 1em #FF44CC'
      },
      gridTemplateColumns: {
        'custom': '1fr 1fr 1fr 1fr 1fr 1fr',
        'rows': '1fr 2fr 2fr'
      },
      variants: {
        animation: ["motion-safe"]
    },
    },
  },
  plugins: [ ],
}