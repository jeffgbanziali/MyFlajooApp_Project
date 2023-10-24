import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { darkRose } from "../../components/Button/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import { UidContext, useDarkMode } from "../../components/Context/AppContext";
import Loading from "../../components/Loading/Loading";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignIn = async () => {
    setIsLoadingSignIn(true);

    const data = { email, password };
    try {
      const response = await axios.post(
        "http://192.168.0.14:4000/api/user/login",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const user = response.data;
        if (user) {
          await AsyncStorage.setItem("user", JSON.stringify(user));
          console.log("Token saved");
        }

        console.log(user);
        alert("User logged in successfully");
        console.log(response);
        navigation.navigate('TabNavigation');
      } else {
        if (
          response.data.errors.email !== "" ||
          response.data.errors.password !== ""
        ) {
          setErrors(response.data.errors);
          console.log(response.data.errors);
        }
        alert("An error occurred");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingSignIn(false); // Arrête le chargement spécifique à la connexion une fois que la requête est terminée
    }
  };


  return (
    <>
      {isLoadingSignIn ? (
        <Loading />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: isDarkMode ? "#231C1C" : "#1A1D1E",
          }}
        >
          <View style={{
            marginTop: "20%",
          }}>
            <Text style={{
              fontSize: "30px",
              color: isDarkMode ? "black" : "white",
            }}
            >
              Sign into your account
            </Text>
          </View>



          <View
            style={{
              width: "40%",
              height: "18%",
              borderRadius: 100,
              marginTop: "10%",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
              }}
              source={{ uri: "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png" }}
            />
          </View>
          <View
            style={{
              overflow: "hidden",
              width: '90%',
              height: '40%',
              borderRadius: 20,
              backgroundColor: isDarkMode ? "#D13333" : "#022A36",
              marginTop: "10%",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <View>
              <Image
                source={require("../../assets/Logos/my_flajooo.png")}
                style={{
                  width: 150,
                  height: 90,
                  marginLeft: 10
                }} />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <TextInput
                style={styles.input}
                placeholderTextColor="gray"
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonTitle}>Sign in</Text>
              </TouchableOpacity>
              <View style={styles.footerView}>
                <Text style={styles.footerText}>
                  Don't have an account?{" "}
                  <Text
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.footerLink}
                  >
                    Sign up
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({


  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    height: 48,
    borderRadius: 10,
    borderColor: "#2e2e2d",
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    width: 300,
  },
  button: {
    backgroundColor: "red",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    width: 100,
    height: 48,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "white",
  },
  footerLink: {
    color: "#80F3BC",
    fontWeight: "300",
    fontSize: 16,
  },
});
export default SignInScreen;
