/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Families are defined once, as CSS variables in src/styles/globals.css.
        grotesk: 'var(--font-sans)',
        sans: 'var(--font-sans)',
        'mono-bold': 'var(--font-mono)',
        mono: 'var(--font-mono)',
        caveat: 'var(--font-hand)',
        hand: 'var(--font-hand)',
      },
      colors: {
        ink: 'var(--color-ink-900)',
        grey: { 300: 'var(--color-grey-300)' },
        blue: { 500: 'var(--color-blue-500)' },
        purple: { 700: 'var(--color-purple-700)' },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          brand: 'var(--color-text-brand)',
          inverse: 'var(--color-text-inverse)',
        },
        surface: {
          default: 'var(--color-surface-default)',
          subtle: 'var(--color-surface-subtle)',
          inverse: 'var(--color-surface-inverse)',
          'brand-tint': 'var(--color-surface-brand-tint)',
          placeholder: 'var(--color-surface-placeholder)',
        },
        glass: {
          light: 'var(--glass-light)',
          dark: 'var(--glass-dark)',
          panel: 'var(--glass-panel)',
        },
        dots: { DEFAULT: 'var(--color-dots)', hover: 'var(--color-dots-hover)' },
        track: 'var(--color-track)',
        data: {
          1: 'var(--color-data-1)',
          2: 'var(--color-data-2)',
          3: 'var(--color-data-3)',
          4: 'var(--color-data-4)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
        },
        action: {
          primary: 'var(--color-action-primary)',
          'primary-hover': 'var(--color-action-primary-hover)',
        },
        accent: {
          handwritten: 'var(--color-accent-handwritten)',
        },
        focus: {
          ring: 'var(--color-focus-ring)',
          'ring-inverse': 'var(--color-focus-ring-inverse)',
        },
      },
      borderRadius: {
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
        control: 'var(--radius-control)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        icon: 'var(--shadow-icon)',
      },
      fontSize: {
        'caption-xs': 'var(--font-size-caption-xs)',
        caption: 'var(--font-size-caption)',
        body: 'var(--font-size-body)',
        'body-md': 'var(--font-size-body-md)',
        'body-lg': 'var(--font-size-body-lg)',
        'title-sm': 'var(--font-size-title-sm)',
        'title-md': 'var(--font-size-title-md)',
        lead: 'var(--font-size-lead)',
        subheading: 'var(--font-size-subheading)',
        heading: 'var(--font-size-heading)',
        title: 'var(--font-size-title)',
        stat: 'var(--font-size-stat)',
        'stat-lg': 'var(--font-size-stat-lg)',
      },
      spacing: {
        'gap-sm': 'var(--space-gap-sm)',
        'gap-md': 'var(--space-gap-md)',
        section: 'var(--space-section)',
        card: 'var(--space-card)',
      },
    },
  },
  plugins: [],
}
