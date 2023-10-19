import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import FollowHandler from "../ProfileUtils.js/FollowHandler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const FriendsFollowers = () => {
  const route = useRoute();
  const { id } = route.params;
  const usersData = useSelector((state) => state.usersReducer);
  const users = usersData.find((user) => user._id === id);

  const navigation = useNavigation();
  const handleClickReturnProfile = () => {
    console.log("clicked");
    navigation.navigate("ProfilFriends", { id });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <View style={{ flex: 1, marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
           onPress={()=>handleClickReturnProfile(id)}
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
            <View>
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
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "semibold",
              color: "#F6F6F6",
              textAlign: "center",
              marginRight: "4.5%",
            }}
          >
            My Followers
          </Text>
        </View>
        <ScrollView>
          
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 10,
            }}
          >
            <>
              {usersData.map((user) => {
                for (let i = 0; i < users.followers.length; i++) {
                  if (user._id === users.followers[i]) {
                    return (
                      <>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                          key={user._id}
                        >
                          <View
                            style={{
                              padding: 5,
                              marginLeft: 20,
                              marginRight: 20,
                              marginTop: 10,
                              marginBottom: 10,
                              flexDirection: "row",
                            }}
                          >
                            <Image
                              source={{
                                uri:
                                  user.picture ||
                                  "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png",
                              }}
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: 100,
                                objectFit: "cover",
                              }}
                            />

                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#F6F6F6",
                                textAlign: "center",
                                marginLeft: 16,
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                              }}
                            >
                              {user.pseudo}
                            </Text>
                          </View>
                          <View
                            style={{
                              width: 100,
                              padding: 5,
                              marginRight: 20,
                              marginTop: 10,
                              marginBottom: 10,
                              justifyContent: "center",
                            }}
                          >
                            <FollowHandler
                              idToFollow={user._id}
                              type={"suggestion"}
                            />
                          </View>
                        </View>
                      </>
                    );
                  }
                }
                return null;
              })}
            </>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FriendsFollowers;
