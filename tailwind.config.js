/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sheetIn: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        sheetOut: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        levelInLeft: {
          '0%': { transform: 'translateX(20%)', opacity: '0.01' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        levelInRight: {
          '0%': { transform: 'translateX(-20%)', opacity: '0.01' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        itemIn: {
          '0%': { transform: 'translateY(6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        sheetIn: 'sheetIn 300ms cubic-bezier(0.22, 1, 0.36, 1)',
        sheetOut: 'sheetOut 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        levelInLeft: 'levelInLeft 250ms ease-out',
        levelInRight: 'levelInRight 250ms ease-out',
        itemIn: 'itemIn 220ms ease-out forwards',
      },
    },
  },
  plugins: [],
}

