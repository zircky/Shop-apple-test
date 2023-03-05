/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'white-red': '#ECECEC',
        'dark-gray': '#101010',
      },
      borderRadius: {
        '2xl1': '20px',
      },
      spacing: {
        'h63': '250px',
        'p30': '30px',
        'p39': '39px',
        'p34': '34px',
        'mb1.75': '7px',
      },
      fontSize: {
        '1sm': '14px',
      },
      lineHeight: {
        'full-m': '120%',
      },
      zIndex: {
        '2': '2',
      },
    },
  },
  plugins: [],
}
