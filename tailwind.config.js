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
    'black-500': '#555555',
    'black-100': '#fafafa',
    'black-200': '#d9d9d9',
    'black-300': '#cccccc',
    'blue': '#0017e8',
    'blue-100': '#c9fff5',
    'blue-200': '#abced9',
    'blue-300': '#00f0ff',
    'blue-400': '#00e8be',
    'blue-500': '#267dff',
    'blue-700': '#002b53',
    'green': '#48e200',
    'green-100': '#feffc9',
    'green-200': '#bfeab8',
    'green-300': '#8fff00',
    'green-400': '#c7e800',
    'green-500': '#00bf36',
    'green-700': '#004b2b',
    'orange': '#ff4019',
    'orange-100': '#fff3e0',
    'orange-200': '#f4e19e',
    'orange-300': '#faff00',
    'orange-400': '#ffc700',
    'orange-500': '#ff9519',
    'orange-700': '#e20e00',
    'orange-800': '#4b0000',
    'purple': '#7000ff',
    'purple-100': '#f4ebff',
    'purple-200': '#cdbdef',
    'purple-300': '#ff00f5',
    'purple-400': '#d867ff',
    'purple-500': '#bd00ff',
    'purple-70': '#f5edff',
    'purple-700': '#3c0088',
    'purple-800': '#270b4a',
    'red': '#ff0000',
    'tinted-gray-100': '#eaedf5',
    'tinted-gray-300': '#ccc2b3',
    'white': '#ffffff'
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
        },
        aspectRatio: {
          'video-vertical': '9 / 14',
        },
     }
  },
  plugins: [],
}