import { scale } from '../../utils/scaling'
import { Dimensions, StyleSheet } from 'react-native'
import { alignment } from '../../utils/alignment'
const { height } = Dimensions.get('window')

const styles = (props = null) =>
  StyleSheet.create({
    flex: {
      flex: 1
    },
    mainContainer: {
      alignItems: 'center',
      backgroundColor: props !== null ? props.buttonText : 'transparent'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f0eb'
    },
    image: {
      height: height * 0.4,
      backgroundColor: props != null ? props.themeBackground : '#FFF',
      shadowColor: '#f3f0eb',
      shadowOffset: { width: 16, height: 8 },
      shadowOpacity: 0.1,
      shadowRadius: 19
    },
    image1: {
      top: scale(-30),
      overflow: 'hidden'
    },
    subContainer: {
      alignSelf: 'center',
      width: '100%',
      height: height * 0.6,
      backgroundColor: props != null ? props.themeBackground : '#FFF'

    },
    signupContainer: {
      paddingVertical: scale(20),
      display: 'flex',
      alignSelf: 'center',
      width: '100%',
      flex: 1,
      justifyContent: 'space-between',
      ...alignment.MBsmall
    },
    whiteColor: {
      backgroundColor: props !== null ? props.buttonText : 'transparent'
    },
    crossIcon: {
      width: scale(14),
      height: scale(14),
      ...alignment.MTlarge,
      ...alignment.MLlarge
    },
    marginTop3: {
      ...alignment.MTxSmall
    },
    marginTop5: {
      ...alignment.MTsmall
    },
    marginTop10: {
      ...alignment.MTmedium
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    buttonBackground: {
      width: '100%',
      backgroundColor: props !== null ? props.newFontcolor : '#000',
      alignItems: 'center'
    },
    appleBtn: {
      width: '90%',
      alignSelf: 'center',
      height: height * 0.08
    },
    orText: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: props !== null ? props.color6 : '#9B9A9A'
    },
    guestButton: {
      width: '90%',
      alignSelf: 'center',
      padding: 15,
      alignItems: 'center',
      borderRadius: scale(40),
      backgroundColor: props !== null ? props.main : '#F7E7E5'
    },
    descText: {
      marginHorizontal: scale(15)
    },
    mainHeadingTextOverlay: {
      position: 'absolute',
      top: scale(30),
      left: 0,
      right: 0
    },
    safeAreaViewStyles: {
      flex: 1,
      backgroundColor: props !== null ? props.themeBackground : 'transparent'
    },
  })
export default styles
