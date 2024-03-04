/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'press-start': ['"Press Start 2P"', 'cursive'],
      'Bebas-neue': ['Bebas Neue', 'sans-serif'],
      'bodoni-moda': ['Bodoni Moda', 'serif'],
      'nanum' : ['Nanum Gothic Coding', 'cursive'],
      'be-vietnam' : ['Be Vietnam Pro', 'sans-serif'],

          },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [

  ],
}
