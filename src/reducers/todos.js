/*
 * Todo Reducer
 */

const todos = (state = [], action) => {
  let { type } = action
  switch (type) {
    case 'ADD_TODO':
      return [ ...state, actions.payload ]
    case 'REMOVE_TODO':
      return state.filter(item => item.id == payload.id)
    default:
      return state
  }
}

export default todos
