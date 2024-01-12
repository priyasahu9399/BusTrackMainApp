import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS} from './../../constants';
import {images, icons} from './../../constants';
import BusLocationCart from './../../component/carts/buslocationCart';
import {data} from '../../constants';
import styles from './styles';
import BusDetail from "./../busdetail/index";
const {width, height} = Dimensions.get('window');

const TrackBus = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={styles.innercontainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.BusLocationCartdata}
          renderItem={({item}) => (
            <BusLocationCart
              name={item.name}
              driver={item.driver}
              image={item.image}
              driverlocation={item.driverlocation}
              icons={item.icons}
              onPress={() => navigation.navigate('BusDetail')}
            />
          )}
        />
      </View>
    </View>
  );
};

export default TrackBus;
