import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useSelector } from "react-redux";
import { UidContext } from "../../components/Context/AppContext";

const Conversation = ({ conversation, currentUser }) => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log(currentUser._id);

    const getFriendInfo = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.14:4000/api/user/friends/${friendId}`
        );
        setUser(response.data);
        console.log("Updated user state:", response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getFriendInfo();
  }, [currentUser, conversation]);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
  };

  const handleClickMessage = () => {
    console.log("clicked");
    navigation.navigate("Chatlist", { conversationId: conversation._id });
    console.log("Montre moi le chemin", conversation._id );
  };
  return (
    <View>
      <TouchableOpacity
        style={containerStyle}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={handleClickMessage}
      >
        <Image
          source={{
            uri: "https://www.10wallpaper.com/wallpaper/2880x1800/2102/Assassins_Creed_Eivor_AC_2021_Game_HD_Poster_2880x1800.jpg",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            objectfit: "cover",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          jeff
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Conversation;
