import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen'
import { PaperProvider } from 'react-native-paper'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { store } from '@/store'
import { customTheme } from '@/shared/theme/theme'
import { useColorScheme } from '@/shared/hooks/useColorScheme'
import { ThemeProp } from 'react-native-paper/lib/typescript/types'
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <Provider store={store}>
      <PaperProvider theme={customTheme as ThemeProp}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen
              name="details/[id]"
              options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#000' },
                title: 'Crypto Details',
                headerTintColor: '#fff',
              }}
            />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </Provider>
  )
}
