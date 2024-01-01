/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A282A',
        'primary-dark': '#010001',
        'primary-gray': '#E8F1FF',
        'primary-text': '#111827',
        'gray-medium': '#667085',
        'dark-indigo': '#27104E',
        'check-green': '#04AE01'
      },
      screens: {
        xs: { max: '515px' }
      },
      width: {
        'mb-w': '80vw'
      },
      fontSize: {
        tx: '11px'
      },
      boxShadow: {
        'btn-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        'lg-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        buttonBgImage: "url('/images/bg1.jpg')",
        waveBg: "url('/images/contactbg.png')",
        'home-gradient': 'linear-gradient(225deg, #2C5E9E 0%, #51E98A 150%)',
        'home-gradient-2': 'linear-gradient(144deg, #42b192, #3a9596);'
      }
    }
  },
  plugins: []
};
