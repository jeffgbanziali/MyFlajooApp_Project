import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Chat from "./Chat";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import MesssageInput from "../../components/MessagesUser/MesssageInput";
import axios from "axios";
import MessagesUser from "../../components/MessagesUser/MessagesUser";
import { UidContext } from "../../components/Context/AppContext";

const Message = () => {
  const navigation = useNavigation();
  const [currentChat, setCurrentChat] = useState(null);
  const [chat, setChat] = useState([]);
const uid = useContext(UidContext)
  const route = useRoute();
  const { conversationId } = route.params;
  console.log("Messages Response de mon id :", uid);


  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.14:4000/api/message/${conversationId}`
        );
        console.log("Messages Response:", response.data);
        setChat(response.data);
        setCurrentChat(response.data); // Mettez à jour currentChat ici
      } catch (err) {
        console.error(err);
      }
    };
    getMessages();
  }, [conversationId]);

  console.log(chat);

  const handleClickReturnMessageList = () => {
    console.log("clicked");
    navigation.navigate("Messages");
  };
  const handleClickCall = () => {
    console.log("clicked");
  };

  const handleClickVideoCall = () => {
    console.log("clicked");
    navigation.navigate("Settings");
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          backgroundColor: "#2C2828",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "#161414",
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: "3.5%",
              marginTop: "1.5%",
            }}
          >
            <TouchableOpacity onPress={handleClickReturnMessageList}>
              <AntDesign
                name="arrowleft"
                size={28}
                color="#5F5858"
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 26,
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
              marginBottom: 10,
              color: "#FFFFFF",
            }}
          >
            Messages
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "#D9D9D9",
              width: 50,
              height: 50,
              borderRadius: 30,
              marginLeft: "11.5%",
              marginTop: "1.5%",
            }}
          >
            <TouchableOpacity onPress={handleClickCall}>
              <Ionicons
                name="ios-call"
                size={28}
                color="#000000"
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              backgroundColor: "#D9D9D9",
              width: 50,
              height: 50,
              borderRadius: 30,
              marginRight: "3.5%",
              marginTop: "1.5%",
            }}
          >
            <TouchableOpacity onPress={handleClickVideoCall}>
              <Ionicons
                name="videocam"
                size={28}
                color="#000000"
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "null"}
          style={{
            flex: 1,
            paddingBottom: 10,
            backgroundColor: "white",
            marginTop: 40,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          {currentChat ? (
            <>
              <ScrollView>
                {chat.map((mes) => (
                  <MessagesUser
                    message={mes}
                    own={mes.sender === uid}
                  />
                ))}
              </ScrollView>

              <View
                style={{
                  position: "absolute",
                  bottom: 10,
                  width: "100%",
                }}
              >
                <MesssageInput />
              </View>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Message;
