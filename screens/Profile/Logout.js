import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UidContext } from '../../components/Context/AppContext';
import { useNavigation } from '@react-navigation/native';



const Logout = () => {

  const { setUid } = useContext(UidContext);


  const navigation = useNavigation(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      await axios.get('http://192.168.0.34:5000/api/user/logout');
      setUid(undefined);
      //navigation.navigate('Signin');
      console.log('Logged out');

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
