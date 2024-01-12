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
    backgroundColor: COLORS.white,
  },
  signin: {
    width: width * 0.9,
    height: height * 0.3,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  heading: {
    color: COLORS.black,
    ...FONTS.sixHundred,
    fontSize: 26,
    textAlign: 'center',
    marginBottom: height * 0.025,
  },
  blueTextbox: {
    margin: width * 0.02,
    marginBottom: height * 0.15,
    alignSelf: 'flex-end',
  },
  blueText: {
    color: '#1080E9',
    ...FONTS.fiveHundred,
    fontSize: 12,
  },
});
