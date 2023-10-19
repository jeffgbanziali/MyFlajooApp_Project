import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const UpdateName = () => {
  const [text, setText] = useState("");
  const [firstName, setFirstName] = useState("");
  const navigation = useNavigation();
  const userData = useSelector((state) => state.userReducer);

  const handleClickReturnInfo = () => {
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
          <TouchableOpacity onPress={() => handleClickReturnInfo()}>
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
        </View>

        <View
          style={{
            marginTop: 10,
            width: "90%",
            height: "20%",
            backgroundColor: "white",
            borderRadius: 10,
            flexDirection: "column",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "50%",
              borderTopRadius: 14,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderWidth: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "normal",
              }}
            >
              FirstName
            </Text>
            <TextInput
              style={{
                width: "100%",
                height: "70%",
                paddingLeft: 10,
              }}
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
              placeholder={userData.lastName}
              placeholderTextColor="black"
              fontSize="18"
              color="black"
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "50%",
              borderTopRadius: 14,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "normal",
              }}
            >
              LastName
            </Text>
            <TextInput
              style={{
                width: "100%",
                height: "70%",
                paddingLeft: 10,
                color: "black",
              }}
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={(text) => setText(text)}
              value={text}
              placeholder={userData.lastName}
              placeholderTextColor="black"
              fontSize="18"
              color="black"
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 50,
            width: "40%",
            height: "6%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "black",
              fontWeight: "normal",
            }}
          >
            Update{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UpdateName;
