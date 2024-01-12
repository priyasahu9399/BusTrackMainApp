import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    width: width * 0.92,
    alignSelf: 'center',
  },
  bgimage: {
    width: width,
  },
  heading: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 26,
    textAlign: 'center',
    marginTop: height * 0.02,
  },

  signimg: {
    width: width * 0.6,
    height: height * 0.3,
    marginVertical: height * 0.02,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.03,
  },
  agree: {
    fontSize: 12,
    ...FONTS.fiveHundred,
    color: COLORS.lightblack,
    marginHorizontal: width * 0.01,
  },
  blueText: {
    fontSize: 12,
    ...FONTS.fiveHundred,
    color: '#1080E9',
  },
});
