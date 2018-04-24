import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    width: width,
    height: (width * 0.40) / 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  status: {
    height: (width * 0.20) / 2,
    width: (width * 0.40) / 2,
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 75,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#fff',
  },
  completed: {
    backgroundColor: '#B1E698',
  },
  basic: {
    backgroundColor: '#C4C4C4',
  }
})
