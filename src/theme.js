import { transparentize } from 'polished'

// Modular scale
const ms = (v = 0, r = Math.sqrt(2)) => Math.pow(r, v)

// Space separated values
const ssv = f => (...v) => v.map(f).join(' ')

const theme = {
  colors: {
    primary: transparentize(0.2, '#000'),
    secondary: transparentize(0.5, '#222'),
    tertiary: '#eae8e2',
    bg: '#fff'
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    code: 1.35,
    copy: 1.7,
  },
  fontFamilies: {
    mono: "'Space Mono', monospace",
    sans: "'Libre Franklin', sans-serif",
    serif: "'Libre Baskerville', serif",
  },
  fontSize: s => ms(s / 2) + 'rem',
  mediaSizes: {
    s: '30rem',
    m: '48rem',
    l: '60rem',
  },
  radius: ssv(s => (typeof s === 'number' ? ms(s / 2) + 'rem' : s)),
  spacing: ssv(s => (typeof s === 'number' ? ms(s) + 'rem' : s)),
  transition: '150ms',
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
