import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigation from './Navigation/StackNavigation';
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
<<<<<<< HEAD
        url: "http://192.168.0.40:5000/jwtid",
=======
        url: "http://10.3.206.20:5000/jwtid",
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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

    <UidContext.Provider value={{ uid, setUid }}>
      <StackNavigation />
    </UidContext.Provider>


  );
};





export default AppW;





