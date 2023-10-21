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
import Loading from "./components/Loading/Loading";
import SplashScreen from "./components/SplashScreen/SpashScreen";

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
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Ajoutez ici le chargement des ressources nécessaires avant que l'application ne soit prête
        // Par exemple, chargez des polices, des images, etc.
        // await Font.loadAsync(Entypo.font);

        // Simulez un délai de chargement (à remplacer par le chargement réel de vos ressources)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Error preparing app:", error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync(); // Cache l'écran de démarrage une fois que l'application est prête
      }
    };

    // Lance la préparation de l'application
    prepareApp();
  }, []);

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
        console.log("New uid:", newUid);

        // Enregistre l'uid dans AsyncStorage
        AsyncStorage.setItem("uid", JSON.stringify(newUid));
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    const retrieveUid = async () => {
      try {
        const storedUid = await AsyncStorage.getItem("uid");
        const parsedUid = JSON.parse(storedUid);

        if (parsedUid) {
          setUid(parsedUid);
        } else {
          // Si l'uid n'est pas enregistré dans AsyncStorage, récupère-le du serveur
          await fetchToken();
        }
      } catch (error) {
        console.error("Error retrieving uid from AsyncStorage:", error);
      }
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);


    if (!uid) {
      fetchToken();
    }
    if (uid) {
      dispatch(getUser(uid));
    }
    console.log("uid", uid);
  }, [uid, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      {appIsReady ? (
        <UidContext.Provider value={{ uid, setUid }}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>

          <StatusBar
            style={isDarkMode ? "light" : "white"}
            backgroundColor="#FF0000"
          />
        </UidContext.Provider>
      ) : (
        // Vous pouvez personnaliser ce composant de chargement
        <Loading />
      )}
    </View>

  );
};

registerRootComponent(AppW);
export default App;




