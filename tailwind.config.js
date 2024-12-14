/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': {min:'300px' , max: '640px' },
      // => @media (min-width: 640px) { ... }

      'md': {min:'641px' , max:'768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {min:'769px' , max:'1023px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {min:'1024px' , max:'1279px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {min:'1280px' , max:'1536px'},
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [],
}

