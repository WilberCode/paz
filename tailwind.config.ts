import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
          sm: "100%",
          md: "100%",
          lg: "1220px",
          xl: "1220px"
      }
    },
    extend: {
      colors: {
  /*       link: {
            'default': '#152268',
            'hover': '#152268',
        },  */
        primary: {  
            base: '#8A8C3E',  
            light: '#F2C288',  
            main: '#D9895B',
            dark: '#8C472E',
            black: '#0D0D0D',
        } 
      }, 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
