import { useLocalSearchParams } from 'expo-router'
import { ScrollView, StyleSheet } from 'react-native'
import { useTheme, ActivityIndicator } from 'react-native-paper'

import { CryptoCurrency } from '@/features/crypto/types'
import { useGetCryptoByIdQuery } from '@/features/crypto/services/cryptoApi'
import CryptoDetailCard from '@/features/crypto/components/CryptoDetailCard'

const CryptoDetailScreen = () => {
  const { id } = useLocalSearchParams()
  const { data, isLoading } = useGetCryptoByIdQuery(id as string)
  const coin = data?.[0] as CryptoCurrency

  if (isLoading || !coin) {
    return (
      <ActivityIndicator
        animating={true}
        size="large"
        style={styles.centered}
      />
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CryptoDetailCard coin={coin} />
    </ScrollView>
  )
}

export default CryptoDetailScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1,
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 8,
  },
  price: {
    marginBottom: 16,
  },
  divider: {
    marginVertical: 12,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
