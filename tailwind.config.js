module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans':['Poppins']
    },
    extend: {
      colors:{
        blueGray:"#EBEBF6",
        niceBlue:"#0C84CA",
        niceRed:"#FF6D6D",
        niceGreen:"#0CCAA7",
        niceBlack:"#505765",

      },
      margin:{
        container:"30pt"
      },
      padding:{
        container:"30pt"
      },
      fontSize:{
        head:"24pt"
      },
      height:{
        bar:"81pt",
        box:"140pt"
      },
      width:{
        box:"140pt"
      },
      boxShadow:{
        bar:"0pt -2pt 8pt 0pt #1A18180D",
        box:"0pt 3pt 6pt 0pt #0000000D"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
