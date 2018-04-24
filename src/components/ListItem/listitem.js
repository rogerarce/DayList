import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

const ListItem = ({ todo, completed = false, onPress}) => {
  let status = completed ? styles.completed : styles.basic
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.container, status]}>
        <View style={styles.content}>
          <Text style={styles.text}>{todo}</Text>
        </View>
        <View style={styles.status} />
      </View>
    </TouchableHighlight>
  )
}

export default ListItem
