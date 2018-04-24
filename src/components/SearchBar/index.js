import PropTypes from 'prop-types'
import SearchBar from './searchbar'

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchBar
