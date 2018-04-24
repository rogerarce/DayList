import { StackNavigator } from 'react-navigation'
import Dashboard from '../../pages/Dashboard/'

const pages = {
  Dashboard: {
    screen: Dashboard,
  },
}

const options = {
  
}

export default StackNavigator(pages, options)
