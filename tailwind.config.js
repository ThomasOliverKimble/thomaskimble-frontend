module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'open sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        primary_highlight: 'var(--primary_highlight)',
        fond: 'var(--fond)',
        fond_transparent: 'var(--fond_transparent)'
      }
    },
  },
  plugins: [],
}

