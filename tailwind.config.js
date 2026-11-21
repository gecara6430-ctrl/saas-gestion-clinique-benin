/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system Stitch — Clinique Sainte-Marie
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          500: '#0d9488',
          600: '#115e59',
          900: '#0f172a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          500: '#64748b',
          600: '#475569',
          900: '#0f172a',
          950: '#020617',
        },
        primary: '#0d9488',
        'primary-hover': '#115e59',
        surface: '#f8f9ff',
        background: '#f8fafc',
        card: '#ffffff',
        border: '#e2e8f0',
        // Status colors
        success: '#10b981',
        warning: '#f59e0b',
        critical: '#ef4444',
        // Regional insurers
        nsia: '#1e40af',
        sanlam: '#0369a1',
        prive: '#475569',
        mobilemoney: '#d97706',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        full: '9999px',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
}
