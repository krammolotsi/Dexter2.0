module.exports = {
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
    }),
    colors: {
      white: '#ffffff',
      black: {
        light: '#262626',
        faded: '#00000059',
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#6B7280',
        light: '#E5E7EB',
        dark: '#374151',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        500: '#64748b',
        600: '#475569',
        800: '#1e293b',
      },
      red: {
        primary: '#DC2626',
      },
      yellow: {
        primary: '#F59E0B',
      },
      green: {
        primary: '#059669',
      },
      blue: {
        light: '#93C5FD',
        primary: '#2563EB',
        dark: '#1D4ED8',
      },
      purple: {
        primary: '#7C3AED',
      },
      pink: {
        primary: '#DB2777',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        500: '#ec4899',
        600: '#db2777',
        800: '#9d174d',
      },
      indigo: {
        600: '#4F46E5',
      },
      sky: {
        400: '#38BDF8',
        500: '#0EA5E9',
        600: '#0284C7',
        700: '#00c7f7',
      },
      orange: {
        primary: '#F97316',
        dark: '#EA580C',
      },
    },
    extend: {
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
        rotate: 'rotate 12s infinite',
        rotate_neg: 'rotate_neg 12s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(2deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-2deg)',
          },
        },
        rotate: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        rotate_neg: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(-3deg)',
          },
        },
      },
      translate: ['responsive', 'group-hover', 'hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
};
