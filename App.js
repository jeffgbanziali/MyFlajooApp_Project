import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './Navigation/StackNavigation';
import axios from 'axios';
import { UidContext } from './components/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';






//const store = createStore(rootReducer);

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
  //const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get("http://192.168.0.34:5000/jwtid");
          setUid(res.data);
          await AsyncStorage.setItem('userId', res.data);
          console.log("Token", res.data);
        } catch (error) {
          console.log("No token");
        }
      }
    };
    fetchToken();
  }, []);

  //{/*useEffect(() => {
  //if (uid) {
  //dispatch(GET_USER(uid));
  //}}/

  return (
    <UidContext.Provider value={{ uid, setUid }}>
      <StackNavigation />
    </UidContext.Provider>
  );
};





export default App;


