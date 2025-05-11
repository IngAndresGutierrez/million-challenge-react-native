import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

import { CryptoCurrency } from '../types'
import CryptoCard from '../components/CryptoCard'
import SearchbarHeader from '../components/Searchbar'
import { useGetCryptosQuery } from '../services/cryptoApi'

const CryptoListScreen = () => {
  const { data, isLoading, error } = useGetCryptosQuery()
  const [search, setSearch] = useState('')

  const filteredData = data?.data?.filter((coin: CryptoCurrency) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  const handlePress = (coin: CryptoCurrency) => {
    router.push(`/details/${coin.id}`)
  }

  if (isLoading)
    return <ActivityIndicator animating size="large" style={styles.centered} />

  if (error)
    return (
      <Text variant="titleMedium" style={styles.centered}>
        Error loading data
      </Text>
    )

  return (
    <FlatList
      ListHeaderComponent={
        <SearchbarHeader value={search} onChange={setSearch} />
      }
      contentContainerStyle={styles.container}
      data={filteredData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CryptoCard coin={item} onPress={() => handlePress(item)} />
      )}
    />
  )
}

export default CryptoListScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
    backgroundColor: '#f7f9fa',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
})
