import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        blue: '#007AFF',
      },
      fontSize: {
        '2xl': '4.5em',
        'xl': '2.625em',
        'lg': '1.5em',
        'base': '1.125em',
      },
      letterSpacing: {
        normal: '-1.28px',
        wide: '-0.64px',
      },
    },
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
