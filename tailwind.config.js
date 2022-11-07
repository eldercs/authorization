/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'blue-green': '#019DA4',
        'blue-green-black': '#02798A', 
        'yellow-green': '#C79D09',
        'auth-color':'#F5F6F8',
        'grey-color': '#8890A6',
        'border-color': '#C2CFE0'
      },
      fontSize:{
        '25': '25px',
        '32': '32px'
      },
      height:{
        '700': '700px'
      },
      minWidth:{
        '375': '375px'
      },
      spacing:{
        '120': '120px'
      },
      screens:{
        xl: '1440px'
      }
    },
    fontFamily:{
      'SF':['SF Pro Display']
    }
  },
  plugins: [],
}
