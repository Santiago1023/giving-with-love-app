import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "blue-primary": "#5ac0d1",
        "blue-secondary": "#458892",
        "pink-primary": "#ec6ea5",
        "pink-secondary": "#f1cfba",
        "white-secondary": "#f4f4f4",
        "black-secondary": "#191411",

        "blue-1": "#0AA6A6",
        "blue-2": "#36BFBF",
        "blue-3": "#6CD9D9",
        "blue-4": "#99F2F2",
        "blue-5": "#AEF2F2",
      }
    },
  },
  plugins: [],
}
export default config
