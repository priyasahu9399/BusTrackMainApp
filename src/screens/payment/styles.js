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
  pymtBox: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical: height * 0.02,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: 5,
    textAlign: 'center',
  },
  date: {
    width: width * 0.05,
    height: height * 0.03,
    resizeMode: 'contain',
    marginHorizontal: width * 0.018,
    marginVertical: width * 0.01,
    tintColor: COLORS.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    padding: width * 0.01,
    color: COLORS.black,
    height: height * 0.042,
  },
});
