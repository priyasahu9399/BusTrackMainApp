import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import DatePicker from 'react-native-date-picker';
import PersonPymentCart from './../../component/carts/personpymentCart';
import styles from './styles';
import {formattedDateServer} from './../../services/date';
const {width, height} = Dimensions.get('window');

const Payment = ({navigation}) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [visibletext, setVisibleText] = useState(false);

  return (
    <View showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innerContainer}>
        <View style={styles.pymtBox}>
          {visibletext === true && (
            <TextInput
              editable={false}
              style={styles.input}
              value={date}
            />
          )}
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Image source={icons.date} style={styles.date} />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          title="Select date"
          mode="date"
          open={open}
          date={new Date()}
          onConfirm={d => {
            setOpen(false);
            setDate(formattedDateServer(d));
            setVisibleText(true);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          theme="light"
          textColor={COLORS.black}
        />
        {/* </View> */}
        <FlatList
          data={data.PersonPymentCartdata}
          renderItem={({item}) => (
            <PersonPymentCart
              name={item.name}
              driverid={item.driverid}
              image={item.image}
              status={item.status}
              rupee={item.rupee}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Payment;
