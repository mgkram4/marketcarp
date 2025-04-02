/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'marketcarp': {
          'beige': '#F5F5DC',
          'brown': '#8B4513',
          'orange': '#FF6B35',
          'blue': '#4A90E2',
        },
      },
      container: {
        'custom': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      },
    },
  },
  plugins: [],
} 