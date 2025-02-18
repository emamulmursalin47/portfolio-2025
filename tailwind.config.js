/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.800'),
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.5em',
              '&::before': {
                content: '""',
                width: '0.5em',
                height: '0.5em',
                borderRadius: '50%',
                backgroundColor: theme('colors.purple.500'),
                position: 'absolute',
                left: 0,
                top: '0.5em',
              },
            },
            a: {
              color: theme('colors.purple.600'),
              '&:hover': {
                color: theme('colors.purple.700'),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.purple.400'),
            },
            a: {
              color: theme('colors.purple.400'),
              '&:hover': {
                color: theme('colors.purple.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};