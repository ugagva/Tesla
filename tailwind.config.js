/** @type {Partial<CustomThemeConfig & {extend: Partial<CustomThemeConfig>}> & DefaultTheme} */


const theme = require("tailwindcss/defaultTheme");



module.exports = {
  content: [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
      './index.html'
],
  theme: {
    screens:{
     'tablet':'600px',
        'desktop':'1200px',
      'portrait':{'raw':'(orientation:portrait)'},

    },
    extend: {
      boxShadow:{
        border:'0 2px 0 0 #181b21'  //shadow-border
      },
      backgroundImage: theme => ({
        'model-3':"url('/img/m3.jpeg')",
        'mobile-model-3':"url('/img/mobile-model-3.jpeg')",
          'mobile-model-s':"url('/img/mobile-model-s.jpeg')",
          'mobile-model-x':"url('/img/mobile-model-x.jpeg')",
          'mobile-model-y':"url('/img/mobile-model-y.jpeg')",
          'mobile-model-panels':"url('/img/mobile-solar-panels.jpeg')",
          'mobile-solar-roof':"url('/img/mobile-solar-roof.jpeg')",
          'mobile-y':"url('/img/model-y.jpeg')",
          'mobile-x':"url('/img/model-x.jpeg')",
          'mobile-s':"url('/img/model-s.jpeg')",
          'solar-panels':"url('/img/solar-panels.jpeg')",
          'solar-roof':"url('/img/solar-roof.jpeg')",
          'accessories':"url('/img/accessories.jpeg')",
        'mobile-accessories':"url('/img/mobile-accessories.jpeg')",

      })
    },
  },
  plugins: [],
}

