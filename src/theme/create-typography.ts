import { TypographyOptions } from '@mui/material/styles/createTypography'

const zinc600 = '#52525b'
export const createTypography: TypographyOptions = {
  fontFamily: '"Lora, serif"',
  body1: {
    color: zinc600,
    fontSize: '1em',
    fontWeight: 400,
    fontFamily: '"Lora, serif"',
    // lineHeight: 1.5,
  },
  body2: {
    fontFamily: '"Lora, serif"',
    fontSize: '0.875rem',
    fontWeight: 100,
    lineHeight: 1.57,
    color: zinc600,
  },
  button: {
    fontWeight: 600,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.66,
  },
  subtitle1: {
    fontSize: '1em',
    fontWeight: 500,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
  },
  overline: {
    fontFamily: '"Lora, serif"',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    lineHeight: 2.5,
    textTransform: 'uppercase',
  },
  h1: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 100,
    fontSize: '2em' /* This is approximate to Tailwind's 'text-4xl' */,
    lineHeight: 1.25 /* This is approximate to Tailwind's 'leading-tight' */,
    color: '#27272a',
  },
  h2: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: '1.5em',
    lineHeight: 1.2,
    fontStyle: 'normal',
  },
  h3: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: '2em',
    lineHeight: 1.2,
  },
  h5: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: '1.5em',
    lineHeight: 1.2,
  },
  h6: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: '1.125em',
    lineHeight: 1.2,
  },
}
