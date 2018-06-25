import ms from 'modularscale'

const MS_SCALE = 'augmented fourth'

const theme = {
  colors: {
    primary: '#000',
    secondary: '#fff',
    tertiary: '#888',
    yellow: 'gold',
  },
  lineHeights: {
    xWide: 2,
    wide: 1.5,
    base: 1.45,
    tight: 1.3,
  },
  fontFamilies: {
    primary: 'Roboto, sans-serif',
    secondary: "'Space Mono', monospace",
  },
  fontSize: step => ms(step / 2, MS_SCALE) + 'rem',
  mediaSizes: {
    xSmall: '400px',
    small: '500px',
    m: '48rem',
    large: '900px',
    xLarge: '1100px',
    xxLarge: '1600px',
  },
  radius: (...steps) =>
    steps
      .map(s => (typeof s === 'number' ? ms(s, MS_SCALE) + 'rem' : s))
      .join(' '),
  spacing: (...steps) =>
    steps
      .map(s => (typeof s === 'number' ? ms(s, MS_SCALE) + 'rem' : s))
      .join(' '),
  transition: '200ms',
}

theme.mediaQueries = Object.keys(theme.ms).reduce((acc, curr) => {
  acc[curr] = `@media (min-width: ${theme.ms[curr]}px)`
  return acc
}, {})

// Shortcuts
theme.c = theme.colors
theme.f = theme.fontSize
theme.lh = theme.lineHeights
theme.mq = theme.mediaQueries
theme.ms = theme.mediaSizes
theme.r = theme.radius
theme.s = theme.spacing
theme.t = theme.transition

export default theme
