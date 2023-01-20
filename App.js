import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import axios from 'axios';
import { UidContext } from './components/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';





axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const res = await axios({
            method: "get",
            url: "http://192.168.0.34:5000/jwtid",
            withCredentials: true,
          });
          setUid(res.data);
        } catch (error) {
          console.log("No token");
        }
      }
    };
    fetchToken();
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <StackNavigation />
    </UidContext.Provider>
  );
};


export default App;