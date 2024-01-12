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

const {width, height} = Dimensions.get('window');

const Details = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View style={[styles.rowField, styles.marginTop]}>
          <Image style={styles.profileImg} source={images.blackbus} />
          <View style={styles.right_Box}>
            <Text numberOfLines={2} style={styles.name}>
              Shivam Bus
            </Text>
            <Text numberOfLines={2} style={styles.subtext}>
              Hazaribagh( Jharkhand)
            </Text>
          </View>
        </View>

        <View style={styles.marginTop}>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Owner name</Text>
            <Text style={styles.name}>Shiva kumar</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Driver name</Text>
            <Text numberOfLines={1} style={styles.name}>
              Rajesh kumar sing
            </Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Conductor name</Text>
            <Text style={styles.name}>Shiva kumar</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Student name</Text>
            <Text style={styles.name}>Prem kumar</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Routes</Text>
            <Text style={styles.name}>Hzb to Ranchi</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Timing</Text>
            <Text style={styles.name}>10:30 - 01:00 PM</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Contact no</Text>
            <Text style={styles.name}>9876XXX764</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Bus no</Text>
            <Text style={styles.name}>JH0A234543</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
