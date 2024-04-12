/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': {'max': '700px'},
    },
  },
  plugins: [],
  }
}
