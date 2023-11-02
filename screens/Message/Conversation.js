import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { APP_API_URL } from "../../config";
import { formatPostDate } from "../../components/Context/Utils";

const Conversation = ({ conversation, currentUser }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    console.log(currentUser._id);

    const getFriendInfo = async () => {
      try {
        const response = await axios.get(
          `${APP_API_URL}/api/user/${friendId}`
        );
        setUser(response.data);
        console.log("Updated user state:", response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getFriendInfo();
  }, []);

  const containerStyle = {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
    width: "100%"
  };

  const handleClickMessage = () => {
    console.log("clicked");
    navigation.navigate("Chatlist", {
      conversationId: conversation._id,
      user: user
    });
    console.log("Montre moi le chemin", conversation._id, user);
  };
  return (
    <TouchableOpacity
      style={containerStyle}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={handleClickMessage}
    >


      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={{
            uri: user?.picture ? user.picture : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            objectfit: "cover",
          }}
        />
        <View
          style={{
            display: "flex",
            width: "87%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-between",

          }}>
          <View
            style={{
              justifyContent: "center",
              marginLeft: "4%",
            }}>
            <Text
              style={{
                fontSize: 16,
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {user?.pseudo}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 6,
                alignItems: "center",
                fontWeight: "500",
              }}
            >
              {conversation.message}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: 8,
                alignItems: "center",
                fontWeight: "normal",
              }}
            >
              {formatPostDate(conversation.createdAt)}
            </Text>
          </View>
        </View>

      </View>

    </TouchableOpacity>
  );
};

export default Conversation;
