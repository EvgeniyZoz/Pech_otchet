module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkNode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'Raleway': 'Raleway' 
      },
      colors:{
        'primary':'rgba(8, 54, 88, 1)',
        'secondary-gray':'rgba(217, 217, 217, 1)',
        'secondary-yellow':'rgba(238, 201, 36, 1)',
        'secondary-green':'rgba(50, 224, 68, 1)',
        'secondary-red':'rgba(240, 33, 33, 1)',

      },
      fontSize:{
        '4.5xl':['2.5rem', {
            lineHeight:'1.2'
        }],
        '2xl':['1.5rem', {
            lineHeight:'1.2'
        }],
        'xl':['1.25rem', {
            lineHeight:'1.2'
        }],
        'xs':['0.75rem', {
            lineHeight:'1.2'
        }],
        'xxs':['0.625rem', {
          lineHeight:'1.2'
      }],
      }, 
      borderWidth:{
        '5':'5px'
      },
      inset:{
        '9999':'9999px'
      }/*,
      screens: {
        'xxs':'480px',
        'xs': '768px',
        'sm': '992px',
        'md': '1360px',
      }*/
    }
  },
  /*plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
      scrollbar: ['rounded']
  }*/
}