import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS} from './../../constants';
import {images, icons} from './../../constants';
import styles from './styles';
import Stars from 'react-native-stars';
import JourneyMap from './../journeyMap/index';

const {width, height} = Dimensions.get('window');

const BusDetail = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <Image source={images.blackbus} style={styles.busimg} />
        <View style={styles.border}></View>
        <View style={styles.marginTop}>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Owner name</Text>
            <Text style={styles.name}>Shiva kumar</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Driver name</Text>
            <Text numberOfLines={1} style={styles.name}>
              Rajesh kumar
            </Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Conductor name</Text>
            <Text style={styles.name}>Shiva kumar</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Price</Text>
            <Text style={styles.name}>₹10/km</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Contact no</Text>
            <Text style={styles.name}>9876XXX764</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Rating</Text>

            <View>
              <Stars
                disabled={true}
                default={3}
                spacing={0.05}
                starSize={17}
                count={5}
                fullStar={icons.colorstar}
                emptyStar={icons.emptystar}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('JourneyMap')}>
          <Text style={styles.orangeText}>Track Bus</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BusDetail;
