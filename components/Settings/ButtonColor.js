import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useDarkMode } from "../Context/AppContext";

const ButtonColor = () => {
  // Utilisez useState pour gérer l'état du mode (sombre ou normal)

  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigation = useNavigation();
  const handleClickReturnProfile = () => {
    console.log("clicked");
    navigation.navigate("Settings");
  };

  const backgroundColorLight = "#F3F2F2";
  const backgroundColorDark = "#2C2828";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDarkMode
          ? backgroundColorDark
          : backgroundColorLight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          alignItems: "center",
          marginLeft: 12,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            width: 40,
            height: 40,
            borderRadius: 30,
          }}
        >
          <TouchableOpacity onPress={handleClickReturnProfile}>
            <MaterialIcons
              name="arrow-back-ios"
              size={28}
              color={isDarkMode ? "white" : "black"}
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
            fontSize: 20,
            color: isDarkMode ? "white" : "black",
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          Application settings
        </Text>
      </View>

      <View
        style={{
          marginTop: 12,
          flexDirection: "column",
          padding: 6,
          margin: 8,
          backgroundColor: isDarkMode ? "#171717" : "white",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 6,
            borderRadius: 10,
          }}
        >
          {/* Affichez le texte en fonction du mode actuel */}
          <View
            style={{
              marginLeft: 12,
              flexDirection: "row",
            }}
          >
            {isDarkMode ? (
              <FontAwesome5 name="moon" size={24} color="white" />
            ) : (
              <MaterialCommunityIcons
                name="white-balance-sunny"
                size={24}
                color="yellow"
              />
            )}
            <Text
              style={{
                fontSize: 20,
                color: isDarkMode ? "white" : "black",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {isDarkMode ? "Mode Sombre" : "Mode Normal"}
            </Text>
          </View>

          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: "gray", true: "darkgray" }}
            thumbColor={isDarkMode ? "white" : "black"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 6,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              marginLeft: 12,
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="notifications"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
            <Text
              style={{
                fontSize: 20,
                color: isDarkMode ? "white" : "black",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Notifications
            </Text>
          </View>

          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </View>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 6,
              borderRadius: 10,
              marginLeft: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="language"
                size={24}
                color={isDarkMode ? "white" : "black"}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: isDarkMode ? "white" : "black",
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                Language
              </Text>
            </View>

            <MaterialIcons
              name="arrow-forward-ios"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonColor;
