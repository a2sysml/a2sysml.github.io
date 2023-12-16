module.exports = {
  purge: ["./templates/**/*.html", "./theme/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'small-bg': "url('/a2huronportrait.webp')",
        'large-bg': "url('/a2huron.jpg')"
      }
    }
  },
  variants: {},
  plugins: [
      require('@tailwindcss/typography')
  ],
};