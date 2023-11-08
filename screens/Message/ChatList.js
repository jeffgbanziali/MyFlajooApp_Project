import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import axios from "axios";
import MessagesUser from "../../components/MessagesUser/MessagesUser";
import { UidContext, useDarkMode } from "../../components/Context/AppContext";
import { io } from "socket.io-client";
import { APP_API_URL } from "../../config";
import { Image } from "react-native";

const Message = () => {
  const navigation = useNavigation();
  const [currentChat, setCurrentChat] = useState(null);
  const [chat, setChat] = useState([]);
  const [newChat, setNewChat] = useState("");
  const [arrivalChat, setArrivalChat] = useState(null);
  const [height, setHeight] = useState(40);
  const socket = useRef(io("ws://localhost:8900"));
  const { uid } = useContext(UidContext);
  const scrollRef = useRef();
  const route = useRoute();
  const { conversationId, user } = route.params;
  const { isDarkMode } = useDarkMode();





  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      console.log("Received message:", data);
      setArrivalChat({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalChat &&
      currentChat?.members?.includes(arrivalChat.senderId) &&
      setChat((prev) => [...prev, arrivalChat]);
  }, [arrivalChat, currentChat]);

  { /*useEffect(() => {
    socket.current.emit("addUser", uid);
    socket.current.on("getUsers", (users) => {
      console.log(users);
      setOnlineUser(
        uid.followings.filter((f) => users.some((u) => u._id === f))
      );
    });
  }, [uid]);*/}

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `${APP_API_URL}/api/message/${conversationId}`
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
      senderId: uid,
      text: newChat,
      conversationId: conversationId,
    };
    console.log("où est mon : ", conversationId);

    const uniqueSenders = [
      ...new Set(currentChat.map((message) => message.senderId)),
    ];
    const receiverId = uniqueSenders.find((sender) => sender !== uid);

    socket.current.emit("sendMessage", {
      senderId: uid,
      receiverId,
      text: newChat,
    });

    try {
      const response = await axios.post(
        `${APP_API_URL}/api/message/`,
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

  console.log("toi là ", user)



  const handleClickReturnMessageList = () => {
    console.log("clicked");
    navigation.navigate("Messages");
  };
  const handleClickCall = (user) => {
    console.log("Calling")
    navigation.navigate("CallingOn", { user: user })
  };

  const handleClickVideoCall = (user) => {
    console.warn("user called");
    navigation.navigate("VideoCall", { user: user });
  };



  






  return (
    <>

      <View
        style={{
          flex: 1,
          backgroundColor: "#2C2828",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
            marginTop: "12%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#161414",
                width: 40,
                height: 40,
                borderRadius: 30,
                marginLeft: "3.5%",
              }}
              onPress={handleClickReturnMessageList}>
              <AntDesign
                name="arrowleft"
                size={25}
                color="#5F5858"

              />
            </TouchableOpacity>
            <Image
              source={{ uri: user.picture ? user.picture : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png" }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginLeft: "4%"
              }}
            />
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                  alignItems: "center",
                  color: "#FFFFFF",
                  marginLeft: 10
                }}
              >
                {user.pseudo}
              </Text>
              <Text
                style={{
                  fontWeight: "normal",
                  fontSize: 14,
                  textAlign: "center",
                  alignItems: "center",
                  color: "#FFFFFF",
                  marginLeft: 10
                }}
              >
                Online
              </Text>
            </View>


          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "35%",
              justifyContent: "space-around",
              marginRight: "4%",
            }}>
            <TouchableOpacity onPress={() => handleClickCall(user)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                width: 40,
                height: 40,
                borderRadius: 30,
                marginTop: "1.5%",
              }}
            >
              <Ionicons
                name="ios-call"
                size={25}
                color="#000000"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClickVideoCall(user)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                width: 40,
                height: 40,
                borderRadius: 30,
              }}
            >
              <Ionicons
                name="videocam"
                size={24}
                color="#000000"

              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClickCall}
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                width: 40,
                height: 40,
                borderRadius: 30,
              }}
            >
              <Entypo
                name="dots-three-vertical"
                size={20}
                color="black" />

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
            width: "100%",
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
                    <MessagesUser message={mes} user={user} own={mes.senderId === uid} />
                  </View>
                ))}
              </ScrollView>

              <View
                style={{
                  position: "relative",
                  width: "100%",
                  height: "15%",
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  flexDirection: "row",
                  padding: 4
                }}
              >
                <View
                  style={{
                    width: "85%",
                    height: Math.max(50, height),
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#D9D9D9",
                    borderRadius: 30,
                    marginBottom: 10,
                    padding: 10
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <AntDesign name="smile-circle" size={28} color="gray" />
                  </TouchableOpacity>

                  <TextInput
                    value={newChat}
                    onChangeText={(text) => setNewChat(text)}
                    onContentSizeChange={(e) =>
                      setHeight(e.nativeEvent.contentSize.height)
                    }
                    style={{

                      width: "67%",
                      borderColor: "#D9D9D9",
                      borderWidth: 2,
                      marginLeft: "2%",
                      textAlignVertical: 'center',
                      height: Math.max(50, height),
                    }}
                    placeholder="Message..."
                    placeholderTextColor="#787373"
                    backgroundColor="#D9D9D9"
                    fontSize="20px"
                    multiline
                  />
                  <View
                    style={{
                      width: "23%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <FontAwesome name="paperclip" size={28} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <FontAwesome name="camera" size={25} color="gray" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Pressable
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    marginLeft: "2%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "gray",
                    marginBottom: 10
                  }}
                  onPress={handleSendMessage}
                >
                  <FontAwesome
                    name="send"
                    size={24}
                    color={newChat === "" ? "#FFFFFF" : "#3B4FB8"}
                  />
                </Pressable>
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
