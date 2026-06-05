/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#C6002B',
          dark: '#9B0020',
          light: '#E8003A',
        },
        gold: '#C9A84C',
        charcoal: '#3A3A3A',
        dark: '#1A1A1A',
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #C6002B 0%, #9B0020 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #2D0A12 100%)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        jaxTicker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
