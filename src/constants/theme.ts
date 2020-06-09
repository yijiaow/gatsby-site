const colors = {
  primary: '#F04E30',
  primaryDimmed: '#BF3E27',
  darkest: '#161517',
  darkest30: 'rgba(22, 21, 23, 0.3)',
  dark: '#232224',
  darkMedium: '#2D2C2E',
  lightMedium: '#716D75',
  light: '#ECECF2',
  lightest: '#FAFAFA',
  white: '#FFFFFF',
  whiteSmoke: '#F5F5F5',
  gold: '#FCB315',
  error: '#F04E30',
  codeBackground: '#EEEEEE',
}

const animations = {
  bezier: 'cubic-bezier(0.15, 0.15, 0, 1)',
  bezierLazy: 'cubic-bezier(0.34, 0.14, 0, 1)',
  power4EaseIn: 'cubic-bezier(.75,0,.75,.2)',
  power4EaseOut: 'cubic-bezier(.2,.75,.25,1)',
  power2EaseIn: 'cubic-bezier(.75,0,.9,.65)',
  power2EaseOut: 'cubic-bezier(.1,.35,.25,1)',
}

const layout = {
  columns: (val: number) => `${(val / 12) * 100}vw`,
}

const theme = {
  light: {
    primaryText: colors.darkest,
    backgroundColor: colors.white,
    accentColor: colors.primary,
  },
  dark: {
    primaryText: colors.white,
    backgroundColor: colors.darkest,
    accentColor: colors.primary,
  },
  colors,
  animations,
  layout,
}

export default theme
