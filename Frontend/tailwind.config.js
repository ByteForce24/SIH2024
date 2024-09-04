/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms' : '320px',
        'mb' : '425px',
        'ml':'1250px',
        'xs': '480px', // Custom breakpoint for extra small screens
        'sm': '640px', // Small screens (default)
        'md': '768px', // Medium screens (default)
        'lg': '1024px', // Large screens (default)
        'xl': '1280px', // Extra large screens (default)
        '2xl': '1536px', // 2X Extra large screens (default)
        '3xl': '1600px', // Custom breakpoint for extra large screens
      },
    },
  },
  plugins: [],
}

