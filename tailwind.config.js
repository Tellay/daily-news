/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-playfair-display)',
      },

      maxWidth: {
        app: '1120px',
      },
    },

    colors: {
      transparent: {
        DEFAULT: 'transparent',
      },

      white: {
        50: '#FFFFFF',
        100: '#F6F4F0',
      },

      blue: {
        700: '#2B2D42',
      },

      gray: {
        100: '#D0D1DB',
        200: '#8E8F9F',
      },

      pink: {
        100: '#FFA1C9',
      },

      green: {
        50: '#F4FFF7',
        100: '#1B592C',
      },

      brown: {
        100: '#DF8E70',
      },
    },
  },
  plugins: [],
}
