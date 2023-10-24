import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProfileFriendsUtils from "../../components/ProfileFriendsUtils/ProfileFriendsUtils";
import FollowHandler from "../../components/ProfileUtils.js/FollowHandler";
import { useSelector } from "react-redux";
import NavButtonProfile from "../../components/ProfileUtils.js/NavButtonProfile";
import ProfileFriendsTools from "../../components/ProfileFriendsUtils/ProfileFriendsTools";
import PostsUser from "../../components/ProfileUtils.js/PostsUser";
import { useDarkMode } from "../../components/Context/AppContext";

const ProfileFriends = () => {
  const route = useRoute();
  const { id } = route.params;
  const { isDarkMode } = useDarkMode();

  const navigation = useNavigation();
  const usersData = useSelector((state) => state.usersReducer);
  const handleClickReturnHome = () => {
    console.log("clicked");
    navigation.navigate("TabNavigation");
  };
  const handleClickSettings = () => {
    console.log("clicked");
    navigation.navigate("Settings");
  };

  const handleSendMEssage = (id) => {
    console.log("clicked");
    navigation.navigate("Chatlist", { id });
  };

  const users = usersData.find((user) => user._id === id);
  const user = usersData.find((user) => user._id === usersData.posterId);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: isDarkMode ? "#0D0C0C" : "#F3F2F2",
        flex: 1,
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? "#171717" : "white",
            borderRadius: 30,
            paddingBottom: 50,
            marginTop: 50,
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handleClickReturnHome}>
              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  backgroundColor: isDarkMode ? "#161414" : "#E3E4E5",
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginLeft: "3.5%",
                  marginTop: "1.5%",
                }}
              >
                <AntDesign
                  name="arrowleft"
                  size={28}
                  color={isDarkMode ? "#5F5858" : "black"}
                  style={{
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClickSettings}>
              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  backgroundColor: isDarkMode ? "#161414" : "#E3E4E5",

                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginRight: "3.5%",
                  marginTop: "1.5%",
                }}
              >
                <Entypo
                  name="dots-three-horizontal"
                  size={28}
                  color={isDarkMode ? "#5F5858" : "black"}
                  style={{
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: -16,
              padding: 5,
            }}
          >
            <TouchableOpacity>
              <Image
                source={{
                  uri: users.picture,
                }}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 100,
                  objectFit: "cover",
                  borderWidth: 5,
                  borderColor: "red",
                }}
              />

              <View
                style={{
                  backgroundColor: "#09C03C",
                  position: "absolute",
                  left: 65,
                  width: 20,
                  height: 20,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: "#000000",
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  marginLeft: 80,
                  marginTop: 100,
                  zIndex: 100,
                }}
              ></View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 30,
                color: isDarkMode ? "white" : "black",
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              {users.pseudo}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                width: "50%",
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 15, color: "gray" }}>{users.bio}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  marginRight: 4,
                }}
              >
                <FollowHandler idToFollow={id} type={"profile"} />
              </View>
              <View
                style={{
                  marginLeft: 4,
                }}
              >
                <TouchableOpacity onPress={() => handleSendMEssage(id)}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "blue",
                      borderRadius: 10,
                      height: 38,
                      width: 170,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "500",
                        justifyContent: "center",
                        fontSize: 20,
                      }}
                    >
                      Writing
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop: 12,
              flex: 1,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Follow by
            </Text>
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/53/d8/07/53d807f07a035d81ce767abd44c98e13.png",
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 100,
                objectFit: "cover",
                marginLeft: 8,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 8,
                fontWeight: "normal",
                color: "gray",
              }}
            >
              @Ferran_Torres
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 8,
                fontWeight: "normal",
                color: isDarkMode ? "white" : "black",
              }}
            >
              and 54 other persons
            </Text>
          </View>
        </View>
        <ProfileFriendsTools users={users} />
        <NavButtonProfile />
        <View
          style={{
            flex: 1,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <PostsUser />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileFriends;
