/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'center': ['flex', ' items-center ', 'justify-center']
    },
  },
  plugins: [],
}

