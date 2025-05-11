import React from 'react'
import { render } from '@testing-library/react-native'
import { PaperProvider } from 'react-native-paper'
import SearchbarHeader from '../../../../features/crypto/components/Searchbar'

describe('SearchbarHeader', () => {
  it('renders correctly', () => {
    const tree = render(
      <PaperProvider>
        <SearchbarHeader value="BTC" onChange={() => {}} />
      </PaperProvider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
