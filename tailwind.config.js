/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  mode: 'jiit',
  theme: {
    extend: {
      // Original
      colors: {
        blue: '#5E548E',
        red: '#231942',
        yellow: '#FDCC49',
        grey: '#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },

      // my colors
      // colors: {
      //   blue: '#9F86C0',
      //   red: '#5E548E',
      //   yellow: '#BE95C4',
      //   grey: '#ededed',
      //   'deep-blue': '#231942',
      //   'dark-grey': '#757575',
      //   'opaque-black': 'rgba(0,0,0,0.35)',
      // },

      // variant 1
      // colors: {
      //   blue: '#028090',
      //   red: '#02C39A',
      //   yellow: '#F0F3BD',
      //   grey: '#ededed',
      //   'deep-blue': '#010026',
      //   'dark-grey': '#757575',
      //   'opaque-black': 'rgba(0,0,0,0.35)',
      // },

      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%,#FF45A4 45.05%, #FFBA00 78.07%)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%,#FC59FF 69.36%, #FFBD0C 117.73%)',
      }),

      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },

      content: {
        brush: "url('./assets/brush.png')",
        person1: "(url('./assets/person-1.png'))",
        person2: "(url('./assets/person-2.png'))",
        person3: "(url('./assets/person-3.png'))",
      },
    },

    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1700px',
      xl: '2400px',
    },
  },
  plugins: [],
};
