import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default {
  container: {
    width: width - (width * 0.10),
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    alignSelf: 'center',
    backgroundColor: '#ECEAEA',
    borderRadius: 75,
  }
}
