/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    fontFamily:{
      monstserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      primary: ['Open Sans', 'sans-serif'] 
    },
    extend: {
      colors:{
        'primary': '#0872BF',
        'background': '#141A1A'
      },
      keyframes:{
        loading:{
          '0%':{transform: 'scaleX(0)', transformOrigin:'left'},
          '100%':{transform: 'scaleX(1)', transformOrigin: 'left'},
        },
        circle_loading92:{
          '0%':{ 'stroke-dashoffset': '313.6517333984375' },
          '100%':{ 'stroke-dashoffset': '25.092138671875' }, 
        },
        circle_loading85:{
          '0%':{ 'stroke-dashoffset': '313.6517333984375' },
          '100%':{ 'stroke-dashoffset': '47.04776000976563' }, 
        },
        circle_loading73:{
          '0%':{ 'stroke-dashoffset': '313.6517333984375' },
          '100%':{ 'stroke-dashoffset': '84.68596801757813' }, 
        },
        circle_loading71:{
          '0%':{ 'stroke-dashoffset': '313.6517333984375' },
          '100%':{ 'stroke-dashoffset': '90.95900268554688' }, 
        },
        circle_loading64:{
          '0%':{ 'stroke-dashoffset': '313.6517333984375' },
          '100%':{ 'stroke-dashoffset': '112.914624023437' }, 
        },
        circle_loading86:{
          '0%':{ 'stroke-dashoffset': '313.6517333984375' },
          '100%':{ 'stroke-dashoffset': '75.276416015625' }, 
        },
      },
      animation:{
        loading: 'loading 1.5s ease-in-out',
        circle_loading92: 'circle_loading92 1.5s ease',
        circle_loading85: 'circle_loading85 1.5s ease',
        circle_loading73: 'circle_loading73 1.5s ease',
        circle_loading71: 'circle_loading71 1.5s ease',
        circle_loading64: 'circle_loading64 1.5s ease',
        circle_loading86: 'circle_loading86 1.5s ease',
      },
      width:{
        '49/50': '98%',
        '19/20':'95%',
        '47/50': '94%',
        '69/100': '69%',
        '39/50': '78%',
        '71/100': '71%',
        '11/20': '55%',
      },
      borderRadius:{
        'ray': '19% 81% 1% 99% / 30% 4% 96% 70%', 
      }
    },
  },
  plugins: [],
}

