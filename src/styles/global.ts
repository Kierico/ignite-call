import { globalCss } from '@kierico-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  ':root': {
    /** FontSizes */
    '--lg': '$fontSizes$lg',
    '--xl': '$fontSizes$xl',
    '--4xl': '$fontSizes$4xl',

    /** Colors */
    '--gray100': '$colors$gray_100',
    '--gray200': '$colors$gray_200',
    '--gray400': '$colors$gray_400',
    '--gray900': '$colors$gray_900',
  },

  body: {
    backgroundColor: 'var(--gray900)',
    color: 'var(--gray100)',
    '-webkit-font-smoothing': 'antialiased',
  },
})
