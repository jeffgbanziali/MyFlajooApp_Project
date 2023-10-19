import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import axios from "axios";
import { UidContext } from "./components/Context/AppContext";
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
      <AppW />
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

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://192.168.0.14:4000/jwtid",
          withCredentials: true,
        });
        const newUid = res.data;
        setUid(newUid);
        console.log(newUid);

        // Enregistre l'uid dans AsyncStorage
        AsyncStorage.setItem("uid", JSON.stringify(newUid));
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };

    // Récupère l'uid depuis AsyncStorage lors du montage du composant
    const retrieveUid = async () => {
      try {
        const storedUid = await AsyncStorage.getItem("uid");
        const parsedUid = JSON.parse(storedUid);

        if (parsedUid) {
          setUid(parsedUid);
        } else {
          // Si l'uid n'est pas enregistré dans AsyncStorage, récupère-le du serveur
          fetchToken();
        }
      } catch (error) {
        console.log("Error retrieving uid from AsyncStorage:", error);
      }
    };

    // Appelle retrieveUid pour récupérer et définir l'uid
    retrieveUid();

    if (!uid) {
      fetchToken();
    }
    if (uid) {
      dispatch(getUser(uid));
    }
    console.log("uid", uid);
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={{ uid, setUid }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>

      <StatusBar
        style="light" // Pour le texte en blanc
        backgroundColor="#FF0000"
      />
    </UidContext.Provider>
  );
};

registerRootComponent(AppW);
export default App;
