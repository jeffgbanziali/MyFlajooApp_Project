import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FriendsFollow from "./FriendsFollow";

const ProfileFriendsTools = ({ users }) => {
  return (
    <View
      style={{
        position: "relative",
        width: 371,
        height: 80,
        flex: 1,
        backgroundColor: "#494747",
        borderRadius: 30,
        marginTop: -40,
        display: "flex",
        borderWidth: 1,
        borderColor: "#EFEAEA",
        borderStyle: "solid",
        zIndex: 1,
        alignContent: "center",
        alignSelf: "center",
      }}
    >
      <FriendsFollow users={users} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileFriendsTools;
