import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './lib/routing/switch'

let todos = [
  { todo: 'Buy groceries after work', completed: true },
  { todo: 'Buy electrical wire, tape, bulb...', completed: false },
  { todo: 'Reply on work related emails', completed: false },
]
let store = createStore(reducers, { todos })

const DayList = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default DayList
