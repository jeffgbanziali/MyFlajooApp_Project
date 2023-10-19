import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const navigation = useNavigation();
  const userData = useSelector((state) => state.userReducer);

  const handleClickReturnProfile = () => {
    console.log("clicked home");
    navigation.navigate("Settings");
  };

  const handleAccount = () => {
    console.log("clicked home");
    navigation.navigate("Infos");
  };

  


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginTop: 50,
          width: "98%",
          height: "94%",
          flexDirection: "column",
          backgroundColor: "lightblue",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            marginTop: 10,
            paddingBottom: 4,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "98%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => handleClickReturnProfile()}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
                borderRadius: 30,
              }}
            >
              <MaterialIcons name="arrow-back-ios" size={28} color="white" />
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              fontWeight: "normal",
              fontStyle: "italic",
              marginRight: 10,
            }}
          >
            Flajoo
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            width: "90%",
            backgroundColor: "blue",
            borderRadius: 20,
            padding: 4,
            flexDirection: "column",
          }}
        >
          <TouchableOpacity onPress={handleAccount}>
            <View
              style={{
                flexDirection: "row",
                padding: 4,
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: userData?.picture
                    ? userData.picture
                    : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png",
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                }}
              />

              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "normal",
                  marginLeft: 10,
                }}
              >
                {userData.pseudo}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AccountInfo;
