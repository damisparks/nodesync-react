import { createTheme as createMuiTheme } from '@mui/material'
import { createPalette } from '@/theme/create-palette'
import { createShadows } from '@/theme/create-shadows'
import { createComponents } from '@/theme/create-components'
import { createTypography } from '@/theme/create-typography'

export function createTheme() {
  const palette = createPalette()
  const shadows = createShadows()
  const components = createComponents({ palette })
  const typography = createTypography

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
    palette,
    shadows,
    components,
    typography,
    shape: {
      borderRadius: 8,
    },
  })
}
