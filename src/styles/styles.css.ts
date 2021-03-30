import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: '#282c34'
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  }
})

export const bodyStyle = style({
  margin: 0,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  backgroundColor: themeVars.color.brand,
  fontFamily: themeVars.font.body,
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  padding: 10,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
})