import { StyleSheet } from 'react-native'
import { alignment } from '../../../utils/alignment'
const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    ...alignment.MTsmall
  },
  titleContainer: {
    width: '70%',
    ...alignment.MTsmall,
    ...alignment.MBsmall
  },
  priceContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...alignment.MTsmall,
    ...alignment.MBsmall
  },
  descContainer: {
    width: '100%',
    ...alignment.MBsmall
  }
})
export default styles
