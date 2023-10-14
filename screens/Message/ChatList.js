import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import MessagesUser from "../../components/MessagesUser/MessagesUser";
import { UidContext } from "../../components/Context/AppContext";
import { io } from "socket.io-client";

const Message = () => {
  const navigation = useNavigation();
  const [currentChat, setCurrentChat] = useState(null);
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [arrivalChat, setArrivalChat] = useState(null);
  const [height, setHeight] = useState(40);
  const socket = useRef(io("ws://localhost:8900"));
  const uid = useContext(UidContext);
  const scrollRef = useRef();
  const route = useRoute();
  const { conversationId } = route.params;

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log("Received message:", data);
      setArrivalChat({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalChat &&
      currentChat?.members?.includes(arrivalChat.sender) &&
      setChat((prev) => [...prev, arrivalChat]);
  }, [arrivalChat, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", uid);
    socket.current.on("getUSers", (users) => {
      console.log(users);
      setOnlineUser(
        uid.followings.filter((f) => users.some((u) => u._id === f))
      );
    });
  }, [uid]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.14:4000/api/message/${conversationId}`
        );
        console.log("Messages Response:", response.data);
        setChat(response.data);
        setCurrentChat(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getMessages();
  }, [conversationId]);
  

  useEffect(() => {
    setCurrentChat(chat);
  }, [chat.length]); 

  console.log(currentChat);

  const handleSendMessage = async () => {
    console.log("handleSendMessage called");
    console.log("newChat:", newChat);
    const message = {
      sender: uid,
      text: newChat,
      conversationId: conversationId,
    };
    console.log("où est mon : ", conversationId);

    const uniqueSenders = [
      ...new Set(currentChat.map((message) => message.sender)),
    ];
    const receiverId = uniqueSenders.find((sender) => sender !== uid);

    socket.current.emit("sendMessage", {
      senderId: uid,
      receiverId,
      text: newChat,
    });

    try {
      const response = await axios.post(
        "http://192.168.0.14:4000/api/message/",
        message
      );

      setChat((prevChat) => [...prevChat, response.data]);
      setCurrentChat((prevCurrentChat) => [...prevCurrentChat, response.data]); 
      setNewChat("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef?.current?.scrollToEnd({ animated: true });
  }, [chat]);

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
              <ScrollView
                ref={(ref) => {
                  scrollRef.current = ref;
                }}
                onContentSizeChange={() =>
                  scrollRef.current.scrollToEnd({ animated: true })
                }
              >
                {chat.map((mes, index) => (
                  <View
                    key={index}
                    style={{
                      position: "relative",
                      bottom: 10,
                      width: "100%",
                    }}
                  >
                    <MessagesUser message={mes} own={mes.sender === uid} />
                  </View>
                ))}
              </ScrollView>

              <View
                style={{
                  position: "relative",
                  width: "100%",
                  height: "12%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <TextInput
                    value={newChat}
                    onChangeText={(text) => setNewChat(text)}
                    onContentSizeChange={(e) =>
                      setHeight(e.nativeEvent.contentSize.height)
                    }
                    style={{
                      flex: 1,
                      borderColor: "#D9D9D9",
                      borderWidth: 2,
                      borderRadius: 30,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      marginRight: 10,
                      height: Math.max(40, height),
                    }}
                    placeholder="Message..."
                    placeholderTextColor="#787373"
                    backgroundColor="#D9D9D9"
                    multiline
                  />
                  <Pressable
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      justifyContent: "center",
                      backgroundColor: "gray",
                    }}
                    onPress={handleSendMessage}
                  >
                    <FontAwesome
                      name="send"
                      size={24}
                      color={newChat === "" ? "#FFFFFF" : "#3B4FB8"}
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        alignContent: "center",
                        marginRight: 4,
                      }}
                    />
                  </Pressable>
                </View>
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
