import React, { useContext, useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import Logout from "../Profile/Logout";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();

  const handleClickReturnProfile = () => {
    console.log("clicked home");
    navigation.navigate("HomeScreen");
  };

  const handleClickAppli = () => {
    console.log("clicked");
    navigation.navigate("buttonning");
  };

  const handleAccount = () => {
    console.log("clicked");
    navigation.navigate("AccountInfo");
  };

  const handleEditProfil = () => {
    console.log("clicked");
    navigation.navigate("EditProfil");
  };

  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleClickReturnProfile()}>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              width: 40,
              height: 40,
              borderRadius: 30,
            }}
          >
            <MaterialIcons name="arrow-back-ios" size={28} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>Settings</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "5%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleAccount}
          >
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={30}
              color="white"
            />
            <Text
              style={{
                marginLeft: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Account
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "5%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleClickAppli}
          >
            <Ionicons
              name="ios-notifications-outline"
              size={30}
              color="white"
            />
            <Text
              style={{
                marginLeft: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Application Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 12,
            width: "98%",
            height: "5%",
            flexDirection: "row",
            alignItems: "center",
            padding: 6,
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={handleEditProfil}
          >
            <FontAwesome5 name="user-edit" size={24} color="white" />
            <Text
              style={{
                marginLeft: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Edit your Profile
            </Text>
          </TouchableOpacity>
        </View>
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
          <Logout />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingBottom: 2,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Settings;
