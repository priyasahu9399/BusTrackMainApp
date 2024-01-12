import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const UserCart = ({
  onPress,
  name,
  driver,
  time,
  image,
  navigation,
  ImgBox,
  proImg,
}) => {
  const [timefalse, setTimefalse] = useState(true);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.userBox}>
      <Image style={[styles.profileImg, proImg]} source={image} />
      <View style={styles.right_Box}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.subtext}>
          {driver}
        </Text>
        {time && <Text style={styles.subtext}>{time}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userBox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    backgroundColor: COLORS.lightgray,
    width: width * 0.92,
    padding: width * 0.03,
    borderRadius: 10,
    marginVertical: height * 0.01,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_Box: {
    marginLeft: width * 0.04,
    width: width * 0.6,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    marginBottom: -4,
  },
  subtext: {
    ...FONTS.fiveHundred,
    color: COLORS.lightgray2,
    fontSize: 11,
    marginBottom: -2,
  },

  profileImg: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'stretch',
    borderRadius: 30,
    // borderWidth: 1,
    // borderColor: COLORS.gray20,
  },
});

export default UserCart;
