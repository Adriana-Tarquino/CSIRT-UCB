// postcss.config.mjs
export default {
  plugins: [
    'tailwindcss',  // Esto ya no es necesario
    '@tailwindcss/postcss', // Usa este en lugar de 'tailwindcss'
    'autoprefixer'
  ]
};
