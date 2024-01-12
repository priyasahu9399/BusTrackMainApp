import React, {useState} from 'react';
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
import InputText from './../../component/input/inputText';
import LongButton from './../../component/button/longButton';
import SignUp from './../signUp/index';

const {width, height} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <View>
          <Image source={images.signin} style={styles.signin} />
          <Text style={styles.heading}>Sign In</Text>
        </View>

        <InputText
          label="Phone no"
          placeholder="Enter register phone no."
          maxLength={10}
          keyboardType="numeric"
        />

        <InputText
          label="Password"
          placeholder="Atleast 6 character"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.blueTextbox}>
          <Text style={styles.blueText}>Forget password</Text>
        </TouchableOpacity>
        <LongButton
          children="Login"
          onPress={() => navigation.navigate('SignUp')}
          buttonStyle={{marginBottom: height * 0.03}}
        />
      </ScrollView>
    </View>
  );
};

export default SignIn;
