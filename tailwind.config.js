module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#4338ca',
            50: '#eef2ff',
            100: '#e0e7ff',
            900: '#312e81'
          },
          secondary: {
            DEFAULT: '#14b8a6',
            50: '#f0fdfa',
            100: '#ccfbf1',
            900: '#064e3b'
          },
          dark: {
            DEFAULT: '#0f172a',
            50: '#f8fafc',
            100: '#f1f5f9',
            900: '#020617'
          }
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
        },
        boxShadow: {
          'elegant': '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
          'hover': '0 15px 40px -12px rgba(0, 0, 0, 0.3)'
        },
        transitionProperty: {
          'subtle': 'color, background-color, transform, box-shadow'
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }