import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Conversation from "./Conversation";
import Search from "../../components/MessagesUser/Search";
import ChatOnline from "../../components/MessagesUser/ChatOnline";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { UidContext } from "../../components/Context/AppContext";
import axios from "axios";
import { useSelector } from "react-redux";

const Message = () => {
  const [conver, setConver] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const uid = useContext(UidContext);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.14:4000/api/conversation/${uid}`
        );
        setConver(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    getConversation();
  }, [uid]);

  const navigation = useNavigation();

  const handleClickReturnHome = () => {
    console.log("clicked");
    navigation.navigate("HomeScreen");
  };
  const handleClickCallList = () => {
    console.log("clicked");
    navigation.navigate("CallList");
  };

  const handleClickToCamera = () => {
    console.log("clicked");
    navigation.navigate("Camera");
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "null"}
        style={{
          flex: 1,
          paddingBottom: 10,
          backgroundColor: "#2C2828",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 10,
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
              <TouchableOpacity onPress={handleClickReturnHome}>
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
              <TouchableOpacity onPress={handleClickToCamera}>
                <Ionicons
                  name="camera"
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
              <TouchableOpacity onPress={handleClickCallList}>
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
          </View>

          <View
            style={{
              backgroundColor: "#2C2828",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignContent: "flex-end",
              alignSelf: "flex-end",
              alignItems: "center",
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../assets/Images/woman-gdc9219422_1920.jpg")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                objectfit: "cover",
                borderWidth: 5,
                borderColor: "#3B4FB8",
              }}
            />
            <View
              style={{
                backgroundColor: "red",
                position: "absolute",
                left: 40,
                width: 24,
                height: 20,
                borderRadius: 25,
                justifyContent: "center",
                alignSelf: "center",
                alignItems: "center",
                marginLeft: 16,
                marginTop: -10,
                zIndex: 100,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 10,
                }}
              >
                124
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                alignContent: "center",
                alignItems: "center",
                marginBottom: 10,
                marginLeft: 15,
                color: "#FFFFFF",
              }}
            >
              Conversations
            </Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          style={{
            flex: 1,
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: -50,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              zIndex: 100,
              position: "absolute",
            }}
          >
            <View>
              <ChatOnline />
            </View>
          </ScrollView>

          <View
            style={{
              zIndex: 100,
              marginTop: 30,
              backgroundColor: "#FFFFFF",
              marginTop: 150,
              paddingTop: -50,
              height: "100%",
            }}
          >
            <View
              style={{
                zIndex: 100,
                marginTop: 10,
              }}
            >
              <Search />
            </View>
            <View
              style={{
                display: "flex",
                flexFlow: "row wrap",
                flexDirection: "column",
                justifyContent: "flex-start",
                //// width: "100%",

                marginBottom: 100,
                paddingBottom: -10,
                position: "relative",
              }}
            >
              <View>
                <ScrollView>
                  {conver.map((c, index) => (
                    <View key={index} onPress={() => setCurrentChat(c)}>
                      <Conversation
                        key={index}
                        conversation={c}
                        currentUser={uid}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Message;
