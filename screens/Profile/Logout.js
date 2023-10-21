import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UidContext, useDarkMode } from "../../components/Context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Logout = () => {
  const { uid, setUid } = useContext(UidContext);
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("userId");
      await axios.get("http://192.168.0.14:4000/api/user/logout");
      setUid(undefined);
      await navigation.navigate("Signin");
      console.log("Logged out");
    } catch (error) {
      console.error(error);
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
          flexDirection: "row",
          alignItems: "center",
          padding: 6,
          width: "35%",
          height: "60%",
          backgroundColor: isDarkMode ? "#D13333" : "#72ACF1",
          borderRadius: 10,
        }}
        onPress={handleLogout}
      >

        <AntDesign name="logout"
          size={24}
          color={isDarkMode ? "blue" : "red"}
        />
        <Text
          style={{
            color: isDarkMode ? "white" : "0A0D10",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginLeft: 10,
            fontSize: 18,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Logout;
