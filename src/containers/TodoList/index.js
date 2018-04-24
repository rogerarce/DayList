import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoList from './todolist'

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  }
}

export default connect(mapStateToProps)(TodoList)
