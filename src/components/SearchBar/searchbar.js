import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        underlineColorAndroid="transparent"
        placeholder={placeholder} 
        onChangeText={onChange} />
    </View>
  )
}

export default SearchBar
