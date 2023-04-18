import { globalCss } from '@kierico-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  ':root': {
    '--gray100': '$colors$gray_100',
    '--gray900': '$colors$gray_900',
  },

  body: {
    backgroundColor: 'var(--gray900)',
    color: 'var(--gray100)',
    '-webkit-font-smoothing': 'antialiased',
  },
})
