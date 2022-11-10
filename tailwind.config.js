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
        'border-color': '#C2CFE0',
        'border-colorxl':'#EBEFF2',
        'desktop-text': '#192A3E',
        'desktop-text2': '#333333'
      },
      fontSize:{
        '25': '1.5625rem',
        '26': '1.625rem',
        '32': '2rem',
        '40': '2.5rem'
      },
      height:{
        '50': '3.125rem',
        '700': '43.75rem',
        '800': '50rem',
        '900': '56.25rem'
      },
      width:{
        '392': '24.5rem',
        '394': '24.625rem',
        '860': '53.75rem'
      },
      maxWidth:{
        '394': '24.625rem',
      },
      minWidth:{
        '375': '23.4375rem'
      },
      spacing:{
        '18': '1.125rem',
        '26': '1.625rem',
        '71': '71px',
        '120': '7.5rem',
        '181': '181px'
      },
      margin:{
        '21': '1.3125rem',
        '91': '91px',
        '113': '7rem',
        '123': '7.6875rem',
        '243': '15.18rem'
      },
      screens:{
        xl: '1440px',
        thi: {'raw': '(min-height:32rem)'},
        th800: {'raw': '(min-height:50rem)'},
        thr: {'raw': '(min-height:48rem)'}
      }, 
    },
    fontFamily:{
      'SF':['SF Pro Display']
    }
  },
  plugins: [],
}
