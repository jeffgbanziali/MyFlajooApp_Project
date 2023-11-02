import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import axios from "axios";
import { DarkModeProvider, UidContext, useDarkMode } from "./components/Context/AppContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";
import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { getUsers } from "./actions/users.action";
import { StatusBar } from "expo-status-bar";
import { getPosts } from "./actions/post.actions";
import { getStories } from "./actions/story.action";
import { getVideoReels } from "./actions/réels.action";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { APP_API_URL } from "./config";

const App = () => {

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  store.dispatch(getUsers());
  store.dispatch(getPosts());
  store.dispatch(getStories());
  store.dispatch(getVideoReels());
  return (
    <Provider store={store}>
      <DarkModeProvider>
        <AppW />
      </DarkModeProvider>
    </Provider>
  );
};

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AppW = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();



  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${APP_API_URL}/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
          AsyncStorage.setItem('uid', res.data);
          console.log(AsyncStorage.getItem('uid'));
        })
        .catch((err) => console.log("No token", err));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid))
  }, [uid, dispatch]);

  return (

    <UidContext.Provider value={{ uid, setUid }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <StatusBar
        style={isDarkMode ? "light" : "white"}
        backgroundColor="#FF0000"
      />
    </UidContext.Provider>
  );
};

registerRootComponent(AppW);
export default App;




