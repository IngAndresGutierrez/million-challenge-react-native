import { MD3LightTheme as DefaultTheme } from 'react-native-paper'

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00b386',
    secondary: '#ffaa00',
    background: '#f7f9fa',
    surface: '#ffffff',
    error: '#e74c3c',
    text: '#1e1e1e',
    outline: '#e0e0e0',
  },
  roundness: 8,
  fonts: {
    ...DefaultTheme.fonts,
    bodyLarge: {
      ...DefaultTheme.fonts.bodyLarge,
      fontWeight: '500',
    },
  },
}
