import { alpha } from '@mui/material/styles'
import { appColour } from './appColour'

interface Color {
  main: string
}

const withAlphas = (color: Color) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  }
}

// using the tailwind zinc color palette
export const neutral = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
}

interface AppColorShades {
  main: string
  lightest: string
  light: string
  dark: string
  darkest: string
  contrastText: string
}

const generateShades = (mainColor: string): AppColorShades => {
  const lightest = alpha(mainColor, 0.9)
  const light = alpha(mainColor, 0.7)
  const dark = alpha(mainColor, 0.85)
  const darkest = alpha(mainColor, 0.3)
  const contrastText = '#ffffff'

  return {
    main: mainColor,
    lightest,
    light,
    dark,
    darkest,
    contrastText,
  }
}

export const primary = withAlphas(generateShades(appColour.primary))
export const secondary = withAlphas(generateShades(appColour.secondary))
export const success = withAlphas(generateShades(appColour.success))
export const info = withAlphas(generateShades(appColour.info))
export const warning = withAlphas(generateShades(appColour.warning))
export const error = withAlphas(generateShades(appColour.error))
export const accent = withAlphas(generateShades(appColour.accent))
