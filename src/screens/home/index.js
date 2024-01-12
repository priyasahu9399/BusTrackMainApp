import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import UserCart from './../../component/carts/userCart';
import Details from './../details/index';
import styles from './styles';
const Home = ({navigation}) => {
  const [activeUser, setActiveUser] = useState(1);

  return (
    <View showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innerContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.UserCartdata}
          renderItem={({item}) => (
            <UserCart
              name={item.name}
              driver={item.driver}
              time={item.time}
              image={item.image}
              onPress={() => navigation.navigate('Details')}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

// <FlatList
//   data={data.PersonPymentCartdata}
//   renderItem={({item}) => (
//     <PersonPymentCart
//       name={item.name}
//       driverid={item.driverid}
//       image={item.image}
//       status={item.status}
//       rupee={item.rupee}
//     />
//   )}
// />;
