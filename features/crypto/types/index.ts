export interface CryptoCurrency {
  id: string
  name: string
  symbol: string
  price_usd: string
  rank: string
  market_cap_usd: string
  csupply: string
  volume24: string
  percent_change_24h: string
  nameid: string
  percent_change_1h: string
  percent_change_7d: string
  volume24a: number
  tsupply: string
  msupply: string
  price_btc: string
}

export interface SearchbarProps {
  value: string
  onChange: (text: string) => void
}

export interface CryptoCardProps {
  coin: CryptoCurrency
  onPress: () => void
}

export interface CryptoDetailCardProps {
  coin: CryptoCurrency
}
