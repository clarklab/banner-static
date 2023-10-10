/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./_imports/*.{html,js}",
    "./*.{html,js}"
    ],
  theme: {
    colors: {
      'black': '#000000',
      'blue': '#001aff',
      'gray': '#555555',
      'gray-on-yellow': '#d8d9ab',
      'light': '#fafafa',
      'light-gray': '#d9d9d9',
      'light-green': '#ecfec7',
      'neon-yellow': '#faff00',
      'orange': '#ff4019',
      'pink': '#ff2dd1',
      'white': '#ffffff',
      'yellow': '#feffc9',
      'purple': '#7000ff',
      'purple-70': '#F5EDFF',
      'purple-100': '#F1E5FF',
      'purple-700': '#3c0088',
      'purple-900': '#270b4a',
      'gold': "#FFC700"
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    extend: {
        borderColor: {
            DEFAULT: '#d9d9d9',
        },
        height: {
          'screen-bars': 'calc(100vh - 90px)',
          'half-screen': 'calc(50vh - 20px)',
        },
        boxShadow: {
          'inner': 'inset 0 0 8px 0 rgb(0 0 0 / 0.05)',
        }
     }
  },
  plugins: [],
}