import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TodoList from '../../containers/TodoList/'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TodoList />
      </View>
    )
  }
}
