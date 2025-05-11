import React from 'react'
import { Card, Text, Divider, useTheme } from 'react-native-paper'

import { styles } from './styles'
import { CryptoDetailCardProps } from '../../types'

const CryptoDetailCard = ({ coin }: CryptoDetailCardProps) => {
  const theme = useTheme()

  return (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <Text variant="headlineMedium" style={styles.title}>
          {coin.name} ({coin.symbol})
        </Text>

        <Text
          variant="titleLarge"
          style={[styles.price, { color: theme.colors.primary }]}
        >
          USD ${parseFloat(coin.price_usd).toFixed(2)}
        </Text>

        <Divider style={styles.divider} />

        <Text variant="labelLarge">📈 Price & Ranking</Text>
        <Text>Rank: {coin.rank}</Text>
        <Text>Price (BTC): {coin.price_btc}</Text>

        <Divider style={styles.divider} />

        <Text variant="labelLarge">💰 Market & Volume</Text>
        <Text>
          Market Cap: ${parseFloat(coin.market_cap_usd).toLocaleString('es-ES')}
        </Text>
        <Text>
          Volume 24h: ${parseFloat(coin.volume24).toLocaleString('es-ES')}
        </Text>
        <Text>
          Volume 24h (prev): $
          {parseFloat(coin.volume24a.toString()).toLocaleString('es-ES')}
        </Text>

        <Divider style={styles.divider} />

        <Text variant="labelLarge">📊 Performance</Text>
        <Text>Change 1h: {coin.percent_change_1h}%</Text>
        <Text>Change 24h: {coin.percent_change_24h}%</Text>
        <Text>Change 7d: {coin.percent_change_7d}%</Text>

        <Divider style={styles.divider} />

        <Text variant="labelLarge">🔗 Supply</Text>
        <Text>
          Circulating Supply: {parseFloat(coin.csupply).toLocaleString()}
        </Text>
        <Text>Total Supply: {coin.tsupply || 'N/A'}</Text>
        <Text>Max Supply: {coin.msupply || 'N/A'}</Text>

        <Divider style={styles.divider} />

        <Text variant="labelLarge">🆔 Identifiers</Text>
        <Text>ID: {coin.id}</Text>
        <Text>NameID: {coin.nameid}</Text>
      </Card.Content>
    </Card>
  )
}

export default CryptoDetailCard
