module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['frank-new'],
      serif: ['Butler Black', 'serif'],
      mono: ['frank-new']
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2048px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
     },
    colors: {
      transparent: 'transparent',
      background: '#f5f1e5',
      background_dark: '#24251f',
      text_dark: '#d2c69e',
      accent: '#b55324',
      primary: '#EC4815',
      secondary: '#f1f2e9',
      gray: '#666666',
      black: '#00000',
      white: '#ffffff',
    },
    extend: {
      width: {
        '30vh': '30vh',
        '30vw': '30vw',
        '50vh': '50vh',
        '50vw': '50vw',
        '70vh': '70vh',
        '70v2': '70v2',
        '80vh': '80vh',
        '80vw': '80vw',
        '90vh': '90vh',
        '90vw': '90vw',
        '100vh': '100vh',
        '100vw': '100vw',
      },
      height: {
        '30vh': '30vh',
        '30vw': '30vw',
        '50vh': '50vh',
        '50vw': '50vw',
        '70vh': '70vh',
        '70v2': '70v2',
        '80vh': '80vh',
        '80vw': '80vw',
        '90vh': '90vh',
        '90vw': '90vw',
        '100vh': '100vh',
        '100vw': '100vw',
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
      },
      fontSize: {
        '4vw':'4vw',
        '4vh':'4vh',
      },
    },
  },
  variants: {
    extend: {
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        // If you want to combine it with a pseudo class,
        // use `<pseudo-class>_<pseudo-element>`.
        'hover_before',
        'hover_after',
        'focus_before',
      ],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
  ],
}
