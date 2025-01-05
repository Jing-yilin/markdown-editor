/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        editor: {
          bg: '#ffffff',
          text: '#24292f',
          border: '#e0e0e0',
          toolbar: '#f5f5f5',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}