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
  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.008,
  },
  right_Box: {
    marginLeft: width * 0.03,
    // width: width * 0.7,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
    width: width * 0.39,
  },
  subtext: {
    ...FONTS.fiveHundred,
    color: COLORS.lightgray2,
    fontSize: 12,
  },
  profileImg: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'stretch',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gray30,
  },
  marginTop: {
    marginTop: height * 0.03,
  },
  headname: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    width: width * 0.53,
  },
});
