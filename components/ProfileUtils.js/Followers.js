import { Link, useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/base";
import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, NavLink } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useDarkMode } from "../Context/AppContext";

const Followers = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [followersPopop, setFollowersPopop] = useState([]);
  const [followingPopop, setFollowingPopop] = useState([]);

  const handleFollowing = () => {
    navigation.navigate("Myfollowing");
  };

  const handleFollowers = () => {
    navigation.navigate("Myfollowers");
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          zIndex: 1,
          position: "relative",
          marginTop: 18,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: isDarkMode ? "#F5F5F5" : "black",
              textAlign: "center",
            }}
          >
            200 K {""}
          </Text>
          <Text
            style={{
              color: "#787373",
              textAlign: "center",
            }}
          >
            Post
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            zIndex: 1,
          }}
        >
          <TouchableOpacity onPress={handleFollowers}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: isDarkMode ? "#F5F5F5" : "black",
                textAlign: "center",
              }}
            >
              {userData.followers ? userData.followers.length : 0}
            </Text>
            <Text
              style={{
                color: "#787373",
              }}
            >
              Followers
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            zIndex: 1,
          }}
        >
          <TouchableOpacity onPress={handleFollowing}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: isDarkMode ? "#F5F5F5" : "black",
                textAlign: "center",
              }}
            >
              {userData.following ? userData.following.length : 0}
            </Text>
            <Text
              style={{
                color: "#787373",
              }}
            >
              Following
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Followers;
