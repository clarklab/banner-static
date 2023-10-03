/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./_imports/*.{html,js,jsx}",
    "./*.{html,js,jsx}"
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
      'purple-700': '#3c0088',
      'purple-900': '#270b4a',
      'gold': "#FFC700"
    },
    extend: {
        borderColor: {
            DEFAULT: '#d9d9d9',
        }
     }
  },
  plugins: [],
}