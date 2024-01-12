import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    width: width * 0.92,
    alignSelf: 'center',
  },
  busimg: {
    width: width * 0.9,
    height: height * 0.26,
    alignSelf: 'center',
    resizeMode: 'stretch',
    marginTop: height * 0.03,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
  },
  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.007,
  },

  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
    width: width * 0.39,
  },

  marginTop: {
    marginTop: height * 0.03,
  },
  headname: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    width: width * 0.53,
  },
  orangeText: {
    ...FONTS.fiveHundred,
    color: COLORS.primary,
    fontSize: 14,
    marginTop: height * 0.01,
  },
});
