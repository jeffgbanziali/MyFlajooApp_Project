import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Animated,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { formatPostDate, isEmpty } from "../../Context/Utils";
import { UidContext, useDarkMode } from "../../Context/AppContext";
import LikeStoriesButton from "./LikeStoriesButton";
import { LinearGradient } from "expo-linear-gradient";

const StoriesStream = () => {
  const navigation = useNavigation(false);
  const { isDarkMode } = useDarkMode();

  const route = useRoute();
  const { id } = route.params;
  const { uid } = useContext(UidContext);
  const storiesData = useSelector((state) => state.storyReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const selectedStory = storiesData.find((story) => story._id === id);
  const user = usersData.find((user) => user._id === selectedStory.posterId);

  const goToHome = () => {
    console.log("clicked");
    navigation.navigate("HomeScreen");
  };

  const goProfil = (id) => {
    navigation.navigate("ProfilFriends", { id });
  };

  useEffect(() => {
    console.log("useEffect");
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            height: "100%",
            position: "relative",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 38,
            }}
          >
            <TouchableOpacity onPress={goToHome}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  marginLeft: 10,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="cross" size={30} color="white" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                height: 3,
                width: "80%",
                backgroundColor: "gray",
                marginLeft: 10,
              }}
            >
              <Animated.View
                style={{
                  height: "100%",
                  width: progressAnimation,
                  backgroundColor: "white",
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              position: "absolute",
              width: "100%",
              justifyContent: "space-between",
              marginLeft: "30%",
              marginTop: "18%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {!isEmpty(usersData[0]) &&
                usersData.map((user) => {
                  if (user._id === selectedStory.posterId) return user.pseudo;
                  else return null;
                })}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "#343232",
                  height: 30,
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 4,
                }}
              >
                <FontAwesome5 name="clock" size={10} color="white" />
                <Text
                  style={{
                    marginLeft: 4,
                    color: "white",
                    fontSize: 12,
                  }}
                >
                  {formatPostDate(selectedStory.createdAt)}
                </Text>
              </View>
              <TouchableOpacity onPress={() => goProfil(user._id)}>
                <View
                  style={{
                    marginLeft: 10,
                    height: 40,
                    width: 40,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri:
                        !isEmpty(usersData) &&
                        usersData
                          .map((user) => {
                            if (user._id === selectedStory.posterId)
                              return user.picture;
                            else return null;
                          })
                          .join(""),
                    }}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 30,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {selectedStory.media && selectedStory.text && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "black",
                position: "absolute",
                borderRadius: 30,
                width: "90%",
                height: "80%",
                top: "12%",
                class: "momo",
              }}
            >
              <Image
                source={{
                  uri: selectedStory.media,
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 30,

                  opacity: 0.9,
                }}
              />
              <LinearGradient
                  colors={["transparent", isDarkMode ? "black" : "#4F4F4F"]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 200, // Ajuste la hauteur du dégradé selon tes besoins
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  bottom: 20,
                  borderRadius: 30,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  {selectedStory.text}
                </Text>
              </View>
            </View>
          )}
          {!selectedStory.media && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "red",
                position: "absolute",
                borderRadius: 30,
                width: "90%",
                height: "80%",
                top: "12%",
                class: "momo",
              }}
            >
              <Image
                source={{
                  uri: selectedStory.media,
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 30,
                }}
              />
            </View>
          )}
          {!selectedStory.media && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "pink",
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                width: "90%",
                height: "80%",
                top: "12%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                }}
              >
                {selectedStory.text}
              </Text>
            </View>
          )}
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              position: "absolute",
              bottom: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "75%",
                height: 50,
                flexDirection: "row",
                marginLeft: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="write a message here to send..."
                placeholderTextColor="white"
                style={{
                  height: 45,
                  width: "100%",
                  borderRadius: 30,
                  borderColor: "white",
                  paddingLeft: 20,
                  fontSize: 18,
                  fontWeight: "normal",
                  overflow: "hidden",
                  color: "white",
                  borderWidth: 1,
                }}
              />
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                marginLeft: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LikeStoriesButton story={selectedStory} />
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="send" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StoriesStream;
