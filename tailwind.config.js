/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'lu-primary': {
          DEFAULT: '#F603C0',
          1: '#F603C0',
          2: '#fd55d8',
        },
        'lu-secondary': {
          DEFAULT: '#6245B5',
          1: '#6245B5',
          2: '#FFBD26'
        },
        'lu-dark': {
          DEFAULT: '#5d7287',
          1: '#5d7287',
          2: '#00234b',
          3: '#000d59',
          4: 'rgb(143 166 170)',
          5: 'rgb(93 114 135)'
        },
        'lu-white': {
          DEFAULT: '#ffffff',
          1: '#ffffff',
          2: '#eef0f5',
          3: '#f8f9fb'
        },
        'base-blue': 'rgb(0 35 75)',
        'purple': '#6245b5'

      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        'dropdown': '0 0 15px 0 rgba(0, 0, 0, 0.3)',
        'card': '0px 20px 50px rgba(107, 113, 125, 0.25)',
        'btn': '0px 5px 10px 0px rgba(127, 129, 134, 0.3)'
      },
      flexGrow: {
        DEFAULT: 1,
        '0': 0,
        '1': 1,
        '2': 2
      }
    }
  },
  plugins: [],

}

