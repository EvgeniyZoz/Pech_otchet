module.exports = {
  content: [
    './_includes/*.*',
    './css/styles.css',
    './*.*',
  ],
  darkNode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'oswald': 'Oswald' 
      },
      maxWidth:{
        '1100':'1100px',
        'xxs':'260px',
        '420':'420px'
      },
      fontSize:{
        '4.5xl':'42px'
      }, 
      lineHeight:{
        '12':'48px'
      },
      boxShadow:{
        'light-xs':'0px 1px 2px 0px rgba(13, 16, 23, 0.06)',
        'hover':'-8px 8px 20px 0px rgba(0, 0, 0, 0.50)',
        'active': '-8px 10px 20px 0px rgba(0, 0, 0, 0.50) inset',
      },
      width:{
        '122':'490px',
        '130':'520px'
      },
      colors:{
        'primary-blue-lighten':'#DFF1FD',
        'primary-blue-light':'#069CDF',
        'primary-blue':'#3563E9',
        'primary-blue-dark':'#20458D',
        'primary-blue-hover':'#1850BD',
        'primary-blue-active':'#163777',
        'primary-pink':'#EC4899',
        'primary-pink-light':'#FFE5E3',
        'primary-red-dark':'#971A1B',
        'primary-red':'#C92C2C',
        'primary-red-hover':'#FB3434',
        'primary-red-active':'#971A1A',
        'primary-yellow':'#FFD83F',
        'primary-orange':'#FF8A00',
        'primary-violet':'#9747FF',
        'primary-green-light':'#18CDA2',
        'primary-green':'#25AC5B',
        'primary-grey-lighten':'#F3F3F3', 
        'primary-grey-light':'#CDD1D6',
        'primary-grey':'#D9D9D9',
        'primary-grey-dark':'#636C79'
      },
      inset:{
        '9999':'9999px'
      },
      screens: {
        'xxs':'480px',
        'xs': '768px',
        'sm': '992px',
        'md': '1360px',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
      scrollbar: ['rounded']
  }
}