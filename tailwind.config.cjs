/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#E87722',
          deep: '#C75B1E',
          soft: '#FFE9D1',
        },
        cream: '#FBF6EE',
        ivory: '#F4ECDC',
        charcoal: '#1F1B16',
        charcoalSoft: '#4A4338',
        line: '#E5DDCB',
        grayText: '#7A7264',
      },
      fontFamily: {
        display: ['"Tiro Devanagari Marathi"', 'Noto Serif Devanagari', 'Georgia', 'serif'],
        body: ['Mukta', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 60px -24px rgba(60,30,10,.30)',
        premiumCard: '0 18px 48px -28px rgba(60,30,10,.28)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      letterSpacing: {
        tighter2: '-0.04em',
      },
      backgroundImage: {
        'hero-scrim': 'linear-gradient(180deg, rgba(31,27,22,0) 40%, rgba(31,27,22,0.72) 100%)',
        'soft-scrim': 'linear-gradient(180deg, rgba(251,246,238,0) 0%, rgba(251,246,238,0.96) 30%)',
      },
    },
  },
  plugins: [],
};
