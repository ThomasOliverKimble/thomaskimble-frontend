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
      },
      keyframes: {
        swipe: {
          '0%': { left: '-200%' },
          '100%': { left: '100%' },
        },
        caroussel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'swipe': 'swipe 1s forwards',
        'caroussel': 'caroussel 10s infinite linear',
      },
    },
  },
  plugins: [],
}

