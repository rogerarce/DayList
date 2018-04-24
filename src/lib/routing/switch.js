import { SwitchNavigator } from 'react-navigation'
import Authenticated from './drawer'

export default SwitchNavigator({
  App: Authenticated,
}, {
  initialRouteName: 'App',
})
