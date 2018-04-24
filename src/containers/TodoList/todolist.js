import React from 'react'
import { View, FlatList } from 'react-native'
import ListItem from '../../components/ListItem/'
import SearchBar from '../../components/SearchBar/'

const TodoList = ({ todos }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.todo}
        renderItem={({ item }) => <ListItem {...item} />}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#CED0CE' }} />}
        ListHeaderComponent={() => <SearchBar placeholder="search..." onChange={text => console.log(text)} />}
      />
    </View>
  )
}

export default TodoList
