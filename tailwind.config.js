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
        '25': '25px',
        '26': '1.625rem',
        '32': '32px',
        '40': '40px'
      },
      height:{
        '50': '3.125rem',
        '700': '700px',
        '900': '900px'
      },
      width:{
        '59':'59.7%',
        '392': '24.5rem',
        '860': '860px'
      },
      maxWidth:{
        '394': '24.625rem',
      },
      minWidth:{
        '375': '375px'
      },
      spacing:{
        '18': '1.125rem',
        '26': '1.625rem',
        '71': '71px',
        '120': '120px',
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
        md: '768px',
        xl: '1440px'
      }, 
    },
    fontFamily:{
      'SF':['SF Pro Display']
    }
  },
  plugins: [],
}
