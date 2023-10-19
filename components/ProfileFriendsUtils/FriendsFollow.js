import { Link, useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/base";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, NavLink } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Followers = ({ users }) => {
  const navigation = useNavigation();

  const id = users._id;

  const handleFollowing = () => {
    navigation.navigate("FriendsFollowing", { id });
  };

  const handleFollowers = () => {
    navigation.navigate("FriendsFollowers", { id });
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
              color: "#F6F6F6",
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
          <TouchableOpacity onPress={() => handleFollowers(id)}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#F6F6F6",
                textAlign: "center",
              }}
            >
              {users.followers ? users.followers.length : 0}
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
          <TouchableOpacity onPress={() => handleFollowing(id)}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#F6F6F6",
                textAlign: "center",
              }}
            >
              {users.following ? users.following.length : 0}
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
