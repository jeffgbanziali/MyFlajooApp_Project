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
  Pressable,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { formatPostDate, isEmpty } from "../../Context/Utils";
import { UidContext, useDarkMode } from "../../Context/AppContext";
import LikeStoriesButton from "./LikeStoriesButton";
import { LinearGradient } from "expo-linear-gradient";
import { Video, resizeMode } from "expo-av";
import AddStoryComment from "./AddStoryComment";

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
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));




  const goToHome = () => {
    console.log("clicked");
    navigation.navigate("TabNavigation");
  };

  const goProfil = (id) => {
    navigation.navigate("ProfilFriends", { id });
  };






  useEffect(() => {
    console.log("useEffect");
    const timer = setTimeout(() => {
      goToNextStory();
    }, 5000);


    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      setIsAnimationComplete(true);


      if (isAnimationComplete) {
        goToNextStory();
      }
    });


    return () => {
      clearTimeout(timer);
    };
  }, []);


  const goToNextStory = () => {
    const currentStoryIndex = storiesData.findIndex((story) => story._id === id);

    const nextStoryIndex = currentStoryIndex + 1;

    if (nextStoryIndex < storiesData.length) {
      const nextStory = storiesData[nextStoryIndex];

      navigation.replace("StoryStream", { id: nextStory._id });
    } else {
      navigation.replace("TabNavigation");
      console.log("plus de story")
    }
  };

  const handleNextStoryButtonPress = () => {

    goToNextStory();
  };

  const goToPrevStory = () => {
    const currentStoryIndex = storiesData.findIndex((story) => story._id === id);

    const prevStoryIndex = currentStoryIndex - 1;

    if (prevStoryIndex >= 0) {
      const prevStory = storiesData[prevStoryIndex];

      navigation.replace("StoryStream", { id: prevStory._id });
    } else {
      console.log("Vous êtes déjà à la première histoire");
    }
  };

  const handlePrevStoryButtonPress = () => {
    goToPrevStory();
  };





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
            width: "100%",
            position: "relative",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <Pressable
            onPress={handlePrevStoryButtonPress}
            style={{
              flex: 1,
              height: "70%",
              marginTop: "30%",
              width: "30%",
              position: "absolute",
              left: 0,
              overflow: "hidden",
              zIndex: 2
            }}
          >
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              height: "70%",
              marginTop: "30%",
              width: "30%",
              position: "absolute",
              right: 0,
              overflow: "hidden",
              zIndex: 2
            }}
            onPress={handleNextStoryButtonPress}>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 38,
              zIndex: 2
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
              marginTop: "20%",
              zIndex: 2

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
                width: "80%",
                height: "70%",
                top: "16%",
              }}
            >
              {selectedStory.mediaType === 'image' && (
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
              )}
              {selectedStory.mediaType === 'video' && (
                <Video
                  source={{ uri: selectedStory.media }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 30,
                  }}
                />
              )}

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


          {selectedStory.media && !selectedStory.text && (


            <View
              style={{
                flex: 1,
                flexDirection: "row",
                position: "absolute",
                borderRadius: 30,
                width: "100%",
                height: "100%",
                backgroundColor: "green"
              }}
            >

              {selectedStory.mediaType === 'image' && (
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
              )}
              {selectedStory.mediaType === 'video' && (
                <Video
                  source={{ uri: selectedStory.media }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  onError={(error) => console.error("Erreur de chargement de la vidéo:", error)}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 30,
                  }}
                />

              )}
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
                height: "78%",
                top: "14%",
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
              bottom: "4%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AddStoryComment story={selectedStory} />
            <View
              style={{
                width: 50,
                height: 50,
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LikeStoriesButton story={selectedStory} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StoriesStream;
