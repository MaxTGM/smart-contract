module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': '2fr 1fr',
  },
  colors: {
    primary:'#56CCF2',
    secondary: '#5a4fcf',
    third:'#F1E4FF',
    fourth: '#18191F'
  },
  fontFamily: {
    'body': [ 'Manrope', 'sans-serif'],
   },
   width: {
    'body':'60%',
    'svg':'64px'
   },
   'top-19': {
    top: '-4rem',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
}