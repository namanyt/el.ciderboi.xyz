import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  daisyui: {
    themes: ['forest'],
  },
  plugins: [require('daisyui')],
}
