import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    width: width * 0.92,
    alignSelf: 'center',
  },
  // -------------------------------------------
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
  marginTop: {
    marginTop: height * 0.03,
  },
  headname: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    width: width * 0.55,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
    width: width * 0.39,
  },
  

  // ========== owner styles ===================

  rowfield: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userlistBox: {
    backgroundColor: COLORS.white,
    elevation: 3,
    width:width*.28,
    height: height*.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical:height*.02,

  },
  userList: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 14,
    marginBottom:-3
  },
});
