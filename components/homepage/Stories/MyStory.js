import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const MyStory = () => {
  const [store, setStore] = useState(false);
  const navigation = useNavigation();

  const handleCreateStory = () => {
    console.log("Create Story");
    navigation.navigate("StoryCreate");
  };

  const userData = useSelector((state) => state.userReducer);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: 100,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: 10,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <TouchableOpacity onPress={handleCreateStory}>
        <View
          style={{
            width: 100,
            height: 140,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Image
            source={{ uri: userData.picture }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            marginLeft: 3,
            marginTop: 70,
          }}
        >
          <View
            style={{
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              resizeMode: "cover",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 30,
                height: 30,
                borderRadius: 30,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Entypo
                name="circle-with-plus"
                size={30}
                color="blue"
                style={{
                  alignSelf: "center",
                  alignContent: "center",
                  alignItems: "center",
                  resizeMode: "contain",
                }}
              />
            </View>
            <View
              style={{
                marginTop: 2,
                alignItems: "center",
                justifyContent: "center",
                resizeMode: "cover",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  fontWeight: "400",
                  marginTop: 10,
                  textAlign: "center",
                }}
              >
                Create Your Story
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyStory;
