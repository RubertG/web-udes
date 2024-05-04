import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-principal': 'linear-gradient(270deg, #004673 0%, #0080d0 100%)'
      },
      boxShadow: {
        principal: '0px 0px 10px 1px rgba(153,153,153,0.25)'
      },
      colors: {
        'primary-100': '#0077c2ff',
        'primary-200': '#59a5f5ff',
        'primary-300': '#c8ffffff',
        'accent-100': '#00bfffff',
        'accent-200': '#00619aff',
        'text-100': '#333333ff',
        'text-200': '#464646ff',
        'bg-100': '#ffffff',
        'bg-200': '#f5f5f5ff',
        'bg-300': '#ccccccff',
        'text-50': '#121212ff'
      }
    }

  },
  plugins: []
}

export default config
