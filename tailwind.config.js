/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'indigo': {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        }
      },
      backgroundColor: {
        theme: {
          primary: 'hsl(var(--primary))',
          secondary: 'hsl(var(--secondary))',
          background: 'hsl(var(--background))',
          card: 'hsl(var(--card))'
        }
      },
      textColor: {
        theme: {
          primary: 'hsl(var(--primary-foreground))',
          secondary: 'hsl(var(--secondary-foreground))',
          default: 'hsl(var(--foreground))'
        }
      },
      borderColor: {
        theme: 'hsl(var(--border))'
      },
      ringColor: {
        theme: 'hsl(var(--primary))'
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke'
      },
    },
  },
  plugins: [],
}
