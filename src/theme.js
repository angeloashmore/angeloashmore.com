import ms from 'modularscale'

const MS_SCALE = 'augmented fourth'

const theme = {
  colors: {
    primary: '#222',
    secondary: '#fff',
    tertiary: '#777',
    yellow: 'gold',
  },
  lineHeights: {
    xWide: 2,
    wide: 1.6,
    medium: 1.4,
    base: 1.3,
    tight: 1.15,
  },
  fontFamilies: {
    serif: "'Libre Baskerville', sans-serif",
    sans: 'Roboto, monospace',
    mono: "'Roboto Mono', monospace",
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
      .map(s => (typeof s === 'number' ? ms(s / 2, MS_SCALE) + 'rem' : s))
      .join(' '),
  spacing: (...steps) =>
    steps
      .map(s => (typeof s === 'number' ? ms(s, MS_SCALE) + 'rem' : s))
      .join(' '),
  transition: '200ms',
}

theme.mediaQueries = Object.keys(theme.mediaSizes).reduce((acc, curr) => {
  acc[curr] = `@media (min-width: ${theme.mediaSizes[curr]})`
  return acc
}, {})

// Shortcuts
theme.c = theme.colors
theme.f = theme.fontSize
theme.ff = theme.fontFamilies
theme.lh = theme.lineHeights
theme.mq = theme.mediaQueries
theme.ms = theme.mediaSizes
theme.r = theme.radius
theme.s = theme.spacing
theme.t = theme.transition

export default theme
