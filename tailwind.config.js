/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Importa el tema por defecto de Tailwind

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Agrega tu fuente F1
        'f1': ['Formula1', ...defaultTheme.fontFamily.sans], // 'Formula1' es el nombre que definiste en @font-face
        // Puedes extender o sobrescribir las fuentes por defecto de Tailwind aquí
        // Por ejemplo, para que la fuente sans por defecto sea F1:
        // sans: ['Formula1', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
