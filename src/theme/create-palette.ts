import { PaletteOptions } from '@mui/material/styles/createPalette'
import { alpha } from '@mui/material/styles'
import {
  error,
  primary,
  info,
  neutral,
  success,
  warning,
  secondary,
  accent,
} from '@/theme/color'
import { appColour } from './appColour'

interface CustomPaletteOptions extends PaletteOptions {
  neutral: typeof neutral
  accent: typeof accent
}

export function createPalette(): CustomPaletteOptions {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: appColour.lightGray,
      paper: appColour.veryLightGray,
    },
    divider: alpha(neutral[500], 0.12),
    error,
    info,
    mode: 'light',
    neutral,
    primary,
    secondary,
    accent,
    success,
    warning,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
  }
}
