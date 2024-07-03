/** @type {import('tailwindcss').Config} */
 
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
 daisyui:{
    themes:[
      {
        defaultTheme:{
          'primary':'#EF6807',
          'secondary':'#2557AF',
          'accent':'#78A9FF',
          'neutral':'#FBEEAC',
          'info':'#0079FF',
          'success':'#5D9C59',
          'error':'#DF2E38',
          'snow': '#DDF7E3'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

