import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import CryptoDetailCard from '../../../../features/crypto/components/CryptoDetailCard'

const mockCoin = {
  id: '1',
  name: 'Bitcoin',
  symbol: 'BTC',
  price_usd: '45000',
  rank: '1',
  market_cap_usd: '850000000000',
  csupply: '19000000',
  volume24: '35000000000',
  percent_change_24h: '2.5',
  nameid: 'bitcoin',
  percent_change_1h: '0.5',
  percent_change_7d: '5.0',
  volume24a: 30000000000,
  tsupply: '21000000',
  msupply: '21000000',
  price_btc: '1.0',
}

describe('CryptoDetailCard', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <PaperProvider>
        <CryptoDetailCard coin={mockCoin} onPress={() => {}} />
      </PaperProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
