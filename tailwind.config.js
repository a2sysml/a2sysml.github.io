module.exports = {
  purge: ["./templates/**/*.html", "./theme/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'small-bg': "url('/a2huronportrait.webp')",
        'large-bg': "url('/a2huron.jpg')"
      },
      colors: {
        'primary': '#0b9a6d',
        'secondary': '#18453b',
        'tertiary': '#ceebe2',
        'grey1': '#222',
        'grey2': '#333',
        'button-primary': '#0787ad',
        'button-secondary': '#0b9a6d'
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography')
  ],
};