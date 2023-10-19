import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";
import { useSelector } from "react-redux";

const BioUpdate = () => {
  const [text, setText] = useState("");
  const userData = useSelector((state) => state.userReducer);

  const navigation = useNavigation();

  const handleClickReturnProfile = () => {
    console.log("clicked home");
    navigation.navigate("EditProfil");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          marginTop: 50,
          paddingBottom: 2,
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "row",
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: 40,
              height: 40,
              borderRadius: 30,
            }}
          >
            <TouchableOpacity onPress={() => handleClickReturnProfile()}>
              <MaterialIcons
                name="arrow-back-ios"
                size={28}
                color="white"
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
              fontSize: 25,
              color: "#fff",
              fontWeight: "normal",
            }}
          >
            ProfileEdit
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "500",
              marginRight: 10,
            }}
          >
            To Save
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "column",
          height: "40%",
          marginTop: 10,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
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
              width: 50,
              height: 50,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "600",
              marginLeft: 10,
            }}
          >
            {userData.pseudo}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "60%",
            borderRadius: 14,
            padding: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "lightblue",
              fontWeight: "normal",
            }}
          >
            You can add a short bio to tell more about yourself.
          </Text>
          <TextInput
            style={{
              width: "100%",
              height: "60%",
              paddingLeft: 12,
              marginTop: 10,
            }}
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Write your bio"
            placeholderTextColor="white"
            fontSize="22"
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default BioUpdate;
