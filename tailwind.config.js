/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
        'playwrite': ['Playwrite IE', 'cursive'],
        'mono-bold': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
