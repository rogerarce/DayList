import PropTypes from 'prop-types'
import ListItem from './listitem'

ListItem.propTypes = {
  todo: PropTypes.string,
  completed: PropTypes.bool,
  onPress: PropTypes.func,
}

export default ListItem
