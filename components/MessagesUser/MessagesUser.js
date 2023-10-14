import React from "react";
import { Text } from "react-native";
import { View, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { dateParser, formatPostDate } from "../Context/Utils";

const MessagesUser = ({ message, own }) => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <View style={own ? styles.messageOwn : styles.messageOther}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: own ? userData.picture : message.sender.picture,
          }}
          style={{
            width: 26,
            height: 26,
            borderRadius: 100,
            marginRight: 10,
          }}
        />

        <Text style={own ? styles.textMessageOwn : styles.textMessageOther}>
          {" "}
          {message.text}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            color: "gray",
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
          }}
        >
          {formatPostDate(message.createdAt)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageOwn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  messageOther: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  textMessageOwn: {
    fontSize: 16,
    backgroundColor: "#6373C8",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 40,
  },
  textMessageOther: {
    fontSize: 16,
    backgroundColor: "#000000",
    color: "#FFFFFF",
    padding: 10,
    borderRadius: 40,
  },
});

export default MessagesUser;
