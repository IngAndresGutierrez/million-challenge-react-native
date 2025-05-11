import React from 'react'
import { Searchbar } from 'react-native-paper'

import { styles } from './styles'
import { SearchbarProps } from '../../types'

const SearchbarHeader = ({ value, onChange }: SearchbarProps) => {
  return (
    <Searchbar
      placeholder="Search cryptocurrency"
      value={value}
      onChangeText={onChange}
      style={styles.searchbar}
    />
  )
}

export default SearchbarHeader
