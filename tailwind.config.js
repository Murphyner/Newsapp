/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
        'custom2': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'
      },
      colors: {
        'colorCustom': '#9f53b0',
        'colorCustom2': '#ffa301'
      },
      keyframes: {
        sciFiLoading: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '0.2' },
          '50%': { transform: 'scaleY(1.5)', opacity: '1' },
        },
      },
      animation: {
        sciFiLoading: 'sciFiLoading 1s infinite',
      },
      container: {
        screens: {
          sm: '100%', // Full width on small screens
          md: '900px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1560px'
        },
      },
    },
  },
  plugins: [],
}