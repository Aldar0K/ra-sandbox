import { createTheme } from '@mui/material/styles'
import { defaultTheme } from 'react-admin'

const baseTypography =
  typeof defaultTheme.typography === 'function' ? {} : defaultTheme.typography

export const theme = createTheme({
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    mode: 'light',
    primary: {
      main: '#0f6cbd',
    },
    secondary: {
      main: '#0f766e',
    },
  },
  shape: {
    ...defaultTheme.shape,
    borderRadius: 12,
  },
  typography: {
    ...baseTypography,
    fontSize: 14,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  components: {
    ...defaultTheme.components,
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: '0 8px 20px rgba(15, 23, 42, 0.06)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
        },
      },
    },
  },
})
