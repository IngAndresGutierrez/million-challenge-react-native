import React from 'react'
import { Card, Text, useTheme } from 'react-native-paper'

import { styles } from './styles'
import { CryptoCardProps } from '../../types'

const CryptoCard = ({ coin, onPress }: CryptoCardProps) => {
  const theme = useTheme()

  return (
    <Card style={styles.card} mode="elevated" onPress={onPress} elevation={1}>
      <Card.Content>
        <Text variant="headlineSmall">
          {coin.name} ({coin.symbol})
        </Text>

        <Text
          variant="titleMedium"
          style={[styles.price, { color: theme.colors.primary }]}
        >
          USD ${parseFloat(coin.price_usd).toFixed(2)}
        </Text>

        <Text>Rank: {coin.rank}</Text>
        <Text>
          Market Cap: ${parseFloat(coin.market_cap_usd).toLocaleString('es-ES')}
        </Text>
        <Text>Supply: {parseFloat(coin.csupply).toLocaleString('es-ES')}</Text>
        <Text>Change 24h: {coin.percent_change_24h}%</Text>
      </Card.Content>
    </Card>
  )
}

export default CryptoCard
