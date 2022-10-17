


module.exports = {
  content: ['./*.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1540px',
    },
    extend: {
      colors: {
        themeColor: 'hsl(213, 84%, 49%)',
        brightRed: 'hsl(213, 84%, 49%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
