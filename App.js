import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import axios from "axios";
import { UidContext } from "./components/Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const AppW = () => {
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
      <App />
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

const App = () => {
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
        AsyncStorage.setItem("uid", newUid);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };

    if (!uid) {
      fetchToken();
    }
    if (uid) {
      dispatch(getUser(uid));
    }
    console.log("uid", uid);
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <StackNavigation />
      <StatusBar
        style="light" // Pour le texte en blanc
        backgroundColor="#FF0000"
      />
    </UidContext.Provider>
  );
};

export default AppW;
