import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



import { useNavigation } from '@react-navigation/native';

const Logout = () => {

  const [uid, setUid] = useState(null);

  const navigation = useNavigation(false);
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await axios.get('http://192.168.0.34:5000/api/user/logout');
      setUid(null);
      navigation.navigate('Signin');

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}
          onPress={handleLogout}>
          <Text
            style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Logout;
