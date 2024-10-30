/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: {
        '1.8': '1.8px', // Extend borderWidth to include a custom value '1.8'
      },
      colors: {
        'fb': '#1877F2', // Define a custom color 'fb' with its hex value
        'Link': '#0A66C2', // Define a custom color 'Link' with its hex value
        '1p': '#0d0d10',
        '2p': '#101013',
        '3p': '#1a1a20',
        '4p': '#e1e1eb',
        '4.5p': '#5a5a5e',
        '4.6p': '#9e9ea5',
        '5p': '#ededf0',
        'primary':'#45FFCA'
      },
      fontSize: {
        '1.5': '0.50rem',
        'm': '13px'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
      },
      fontFamily: {
        'SpaceGrotesk': ["Space Grotesk", "sans-serif"],
        'Poppins': ["Poppins", "sans-serif"],
        'Raleway': ["Raleway", "sans-serif"],
        'Spline': ["Spline Sans Mono", "sans-serif"],
        'Zilla': ["Zilla Slab", "sans-serif"],
        'Oxanium': ["Oxanium", "sans-serif"],
        'Chakra': ["Chakra Petch", "sans-serif"],

      }
    },
  },
  plugins: [],
}
