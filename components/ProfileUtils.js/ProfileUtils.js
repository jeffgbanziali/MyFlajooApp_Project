import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Followers from "./Followers";
import { useDarkMode } from "../Context/AppContext";

const ProfileUtils = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <View
      style={{
        position: "relative",
        width: 371,
        height: 80,
        flex: 1,
        backgroundColor: isDarkMode ? "#171717" : "white",
        borderRadius: 30,
        marginTop: -40,
        display: "flex",
        borderWidth: 1,
        borderColor: "#EFEAEA",
        borderStyle: "solid",
        zIndex: 1,
        alignContent: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Followers />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileUtils;
