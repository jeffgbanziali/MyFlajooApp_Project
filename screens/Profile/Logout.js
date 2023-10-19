import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UidContext } from "../../components/Context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Logout = () => {
  const { uid, setUid } = useContext(UidContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userId");
      await axios.get("http://192.168.0.14:4000/api/user/logout");
      setUid(undefined); // Utilise la fonction de mise à jour du contexte
      navigation.replace("Signin");
      console.log("Logged out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          padding: 6,
        }}
        onPress={handleLogout}
      >
        <View
          style={{
            marginTop: 12,
            width: "98%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        >
          <AntDesign name="logout" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginLeft: 10,
              fontSize: 18,
            }}
          >
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Logout;
