import ms from 'modularscale'

const MS_SCALE = 'augmented fourth'

const theme = {
  // Colors
  c: {
    primary: '#000',
    secondary: '#fff',
    tertiary: '#888',
    yellow: 'gold',
  },
  fontFamily: {
    primary: 'Roboto, sans-serif',
    secondary: "'Space Mono', monospace",
  },
  // Line heights
  lh: {
    xWide: 2,
    wide: 1.5,
    base: 1.45,
    tight: 1.3,
  },
  // Font sizes
  f: step => ms(step / 2, MS_SCALE) + 'rem',
  // Media sizes
  ms: {
    xSmall: '400px',
    small: '500px',
    m: '48rem',
    large: '900px',
    xLarge: '1100px',
    xxLarge: '1600px',
  },
  radius: step => ms(step, MS_SCALE) + 'rem',
  // Spacing
  s: (...steps) => steps.map(s => typeof s === 'number' ? ms(s, MS_SCALE) + 'rem' : s).join(' '),
  transition: '200ms',
}

theme.mq = Object.keys(theme.ms).reduce((acc, curr) => {
  acc[curr] = `@media (min-width: ${theme.ms[curr]}px)`
  return acc
}, {})

export default theme
