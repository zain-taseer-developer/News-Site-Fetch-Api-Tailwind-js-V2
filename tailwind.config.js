/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // key frame
      keyframes:{
        aniiiimation:{
          '0%':{transform:'rotate(3deg)'},
          '100%':{transform:'rotate(-3deg)'},
        }
      },
      //animation
        animation:{
          aniiiimation:'aniiiimation 3s ease-in-out infinite alternate'
      }, 
   screens:{
    'extraSmall':'360px'
   }    
    },
  },
  plugins: [],
}

