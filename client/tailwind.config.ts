import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'spin-reverse': 'spin-reverse 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      screens: {
        lg1075: '1075px',
        lgPlus: '1105px',
        lg1145: '1145px',
        xl: '1175px',
        xl1200: '1200px',
        xlPlus: '1220px',
      },
    },
  },
  plugins: [forms, animate],
};

export default config;
