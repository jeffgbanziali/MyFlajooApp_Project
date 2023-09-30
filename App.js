import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import axios from 'axios';
import { UidContext } from './components/Context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.action';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getUsers } from './actions/users.action';
import { StatusBar } from 'expo-status-bar';




const AppW = () => {
  const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)),
  );

  store.dispatch(getUsers())
  return (
    <Provider store={store}>
      <App />
      
    </Provider>
  );
};


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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: "http://192.168.0.14:3000/jwtid",
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
    console.log("uid", uid);


  }, [uid, dispatch]);

  return (

    <UidContext.Provider value={uid}>
      <StackNavigation />
      <StatusBar
        style="light" // Pour le texte en blanc
        backgroundColor="#FF0000"
      />
    </UidContext.Provider >


  );
};





export default AppW;





