module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'cursive'],
      serif: ['Butler Black', 'serif'],
      mono: ['Roboto Mono']
    },
    screens: {
      'sm': '640px',
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
      background: '#F7F5EE',
      accent: '#EC6849',
      primary: '#EC4815',
      secondary: '#f1f2e9',
      gray: '#666666',
      black: '#000',
      white: '#fff',
    },
    extend: {
      width: {
        '30vh': '30vh',
        '50vh': '50vh',
        '70vh': '70vh',
        '90vh': '90vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
