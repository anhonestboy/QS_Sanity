module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['frank-new'],
      serif: ['Butler Black', 'serif'],
      serif_bold: ['Butler Bold', 'serif'],
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
      grayBlack: '#282923',
      background: '#f5f1e5',
      background_lighter: '#FFFCF3',
      background_dark: '#24251f',
      text_dark: '#d2c69e',
      accent: '#1a1a1a',
      accent2: '#b55324',
      primary: '#EC4815',
      secondary: '#f1f2e9',
      gray: '#666666',
      black: '#000000',
      white: '#ffffff',
    },
    extend: {
      width: {
        '30vh': '30vh',
        '30vw': '30vw',
        '40vh': '40vh',
        '40vw': '40vw',
        '50vh': '50vh',
        '50vw': '50vw',
        '60vh': '60vh',
        '60vw': '60vw',
        '70vh': '70vh',
        '70vw': '70vw',
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
        '40vh': '40vh',
        '40vw': '40vw',
        '50vh': '50vh',
        '50vw': '50vw',
        '60vh': '60vh',
        '60vw': '60vw',
        '70vh': '70vh',
        '70vw': '70vw',
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
        '1vw':'1vw',
        '1_2vw':'1.2vw',
        '1_8vw':'1.8vw',
        '1vh':'1vh',
        '2vw':'2vw',
        '2vh':'2vh',
        '3vw':'3vw',
        '3vh':'3vh',
        '4vw':'4vw',
        '4vh':'4vh',
        '5vw':'5vw',
        '5vh':'5vh',
        '6vw':'6vw',
        '6_5vw':'6.5vw',
        '6vh':'6vh',
        '7vw':'7vw',
        '7vh':'7vh',
        '8vw':'8vw',
        '9vh':'8vh',
        '9vw':'9vw',
        '9vh':'9vh',
        '10vw':'10vw',
        '10vh':'10vh',
        '15vw':'15vw',
        '15vh':'15vh',
      },
      scale: {
        '98': '.98',
        '99': '.99',
        '101': '1.1',
        '102': '1.2',
      },
      lineHeight: {
        '1vw':'1vw',
        '1vh':'1vh',
        '2vw':'2vw',
        '2vh':'2vh',
        '3vw':'3vw',
        '3vh':'3vh',
        '4vw':'4vw',
        '4vh':'4vh',
        '5vw':'5vw',
        '5vh':'5vh',
        '6vw':'6vw',
        '6vh':'6vh',
        '7vw':'7vw',
        '7vh':'7vh',
        '8vw':'8vw',
        '9vh':'8vh',
        '9vw':'9vw',
        '9vh':'9vh',
        '10vw':'10vw',
        '10vh':'10vh',
      },
      inset: {
        '1vw':'1vw',
        '1vh':'1vh',
        '2vw':'2vw',
        '2vh':'2vh',
        '3vw':'3vw',
        '3vh':'3vh',
        '4vw':'4vw',
        '4vh':'4vh',
        '5vw':'5vw',
        '5vh':'5vh',
        '6vw':'6vw',
        '6vh':'6vh',
        '7vw':'7vw',
        '7vh':'7vh',
        '8vw':'8vw',
        '9vh':'8vh',
        '9vw':'9vw',
        '9vh':'9vh',
        '10vw':'10vw',
        '10vh':'10vh',
        '12vw':'12vw',
        '12vh':'12vh',
        '14vw':'14vw',
        '14vh':'14vh',
      },
      margin: {
        '10vh': '10vh',
        '10vw': '10vw',
        '20vh': '20vh',
        '20vw': '20vw',
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
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(20px)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.9s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
    }
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
