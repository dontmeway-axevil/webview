/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'scenario-positive-light':
          'linear-gradient(180deg, rgba(245, 253, 90, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'scenario-positive-dark':
          'linear-gradient(180deg, rgba(245, 253, 90, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%)',
        'scenario-conservative-dark':
          'linear-gradient(180deg, rgba(89, 225, 255, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%)',
        'scenario-conservative-light':
          'linear-gradient(180deg, rgba(56, 127, 142, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)',
        'card-light':
          'linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%)',
        'card-dark':
          'linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%)',
        'dropdown-light':
          'linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%), linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(248.8deg, rgba(150, 150, 150, 0.171) -1.82%, rgba(151, 151, 151, 0.039) 45.78%, rgba(152, 152, 152, 0.06) 102.84%)',
        'dropdown-dark':
          'linear-gradient(84.62deg, rgba(69, 69, 69, 0.1) 11.6%, rgba(24, 24, 24, 0.1) 34.49%), linear-gradient(262.41deg, rgba(255, 255, 255, 0) -10.14%, rgba(255, 255, 255, 0.0521848) 20.89%, rgba(255, 255, 255, 0) 96.29%), linear-gradient(248.8deg, rgba(150, 150, 150, 0.171) -1.82%, rgba(151, 151, 151, 0.039) 45.78%, rgba(152, 152, 152, 0.06) 102.84%)',
        'scenario-button':
          'linear-gradient(220deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.05) 29.16%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(22deg, rgba(69, 69, 69, 0.10) 0%, rgba(24, 24, 24, 0.10) 100%)',
      },
      borderColor: {
        'body-text-light': 'rgba(152, 152, 152, 0.06)',
        'body-text-dark': 'rgba(152, 152, 152, 0.06)',
      },
      colors: {
        brand: {
          yellow: '#F4FF58',
          'yellow-medium': '#8F9900',
          'yellow-dark': 'rgba(244, 255, 88, 0.1)',
          'yellow-light': 'rgba(88, 224, 255, 0.1)',
        },
        neutral: {
          15: '#CFD2D9',
          75: '#3D3E40',
          85: '#242526',
          100: '#151517',
        },
        secondary: {
          default: '#50CBE5',
          medium: '#007D99',
          light: '#50CBE6',
        },
      },
    },
  },
  plugins: [],
}
