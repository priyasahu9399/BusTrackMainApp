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
  ImageBackground,
} from 'react-native';

import {COLORS, FONTS} from './../../constants';
import {images, icons} from './../../constants';
import LongButton from './../../component/button/longButton';
import InputText from './../../component/input/inputText';
import CheckBox from 'react-native-check-box';
import styles from './styles';
import StackScreen from "./../../navigation/StackNavigator/index";


const {width, height} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ImageBackground
        source={images.signup}
        resizeMode="cover"
        style={[styles.bgimage, styles.innercontainer]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Signup</Text>

          <InputText label="School name" placeholder="Enter school name" />
          <InputText label="School ID" placeholder="Enter school id no." />
          <InputText label="Students name" placeholder="Enter Student name" />
          <InputText
            label="Mobile no"
            placeholder="Enter Mobile no"
            keyboardType="numeric"
          />
          <InputText label="Address" placeholder="Enter Address" />
          <InputText label="Routes" placeholder="Enter Routes" />
          <InputText label="Bus no" placeholder="Enter Bus no" />

          <View style={styles.row}>
            <CheckBox
              isChecked={checked}
              onClick={() => setChecked(!checked)}
              checkBoxColor={COLORS.primary}
            />
            <Text style={styles.agree}>Agree with</Text>
            <TouchableOpacity>
              <Text style={styles.blueText}>Term & Condition</Text>
            </TouchableOpacity>
          </View>

          <LongButton
            children="Register"
            buttonStyle={{marginBottom:height*.03}}
            onPress={() => navigation.navigate('StackScreen')}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignUp;
