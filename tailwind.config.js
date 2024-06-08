import prelinePlugin from 'preline/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    extend: {}
  },
  plugins: [prelinePlugin]
}
