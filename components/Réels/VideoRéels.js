import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  Easing,
  Dimensions,
  ScrollView,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getVideoReels } from "../../actions/réels.action";
import { isEmpty } from "../Context/Utils";
import { useNavigation } from "@react-navigation/native";
import { UidContext, useDarkMode } from "../Context/AppContext";
import RéelsComment from "./RéelsComment";
import AddRéelsComment from "./AddRéelsComment";
import LikeRéelsButton from "./LikeRéelsButton";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const VideoRéels = () => {
  const video = useRef(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lastViewedVideo, setLastViewedVideo] = useState(0);
  const [status, setStatus] = useState({});
  const [showComments, setShowComments] = useState(false);
  const [commentsHeight, setCommentsHeight] = useState(new Animated.Value(0));
  const discAnimationValue = useRef(new Animated.Value(0)).current;
  const musicValue1 = useRef(new Animated.Value(0)).current;
  const musicValue2 = useRef(new Animated.Value(0)).current;
  const [loadPosts, setLoadPosts] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();
  const reelsData = useSelector((state) => state.videoReelsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const navigation = useNavigation();
  const { uid } = useContext(UidContext);

  useEffect(() => {
    if (loadPosts) {
      dispatch(getVideoReels());
      setLoadPosts(false);
    }
  }, [loadPosts, dispatch]);

  useEffect(() => {
    !isEmpty(usersData) && setLoading(false);
  }, [usersData]);

  const goProfil = (id) => {
    if (uid === id) {
      console.log("go to my profil", id);
      navigation.navigate("Profile", { id });
    } else {
      navigation.navigate("ProfilFriends", { id });
      console.log("go to profile friends", id);
    }
  };

  const toggleComments = () => {
    if (showComments) {
      Animated.timing(commentsHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setShowComments(false));
    } else {
      setShowComments(true);
      Animated.timing(commentsHeight, {
        toValue: 200, // Hauteur souhaitée du composant de commentaires
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleVideoLoad = async () => {
    await video.current.playAsync();
    setIsVideoPlaying(true);
  };

  const toggleVideoPlayback = () => {
    if (activeVideo) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const newActiveIndex = viewableItems[0].index;
      if (newActiveIndex !== activeVideo) {
        setActiveVideo(newActiveIndex);
        setLastViewedVideo(newActiveIndex);
        video.current.setPositionAsync(0);
      }
    }
  }).current;

  const discAnimation = {
    transform: [
      {
        rotate: discAnimationValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };
  const musicAnimation1 = {
    transform: [
      {
        translateX: musicValue1.interpolate({
          inputRange: [0, 1],
          outputRange: [8, -16],
        }),
      },
      {
        translateY: musicValue1.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -32],
        }),
      },
      {
        rotate: musicValue1.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
    opacity: musicValue1.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, 0],
    }),
  };
  const musicAnimation2 = {
    transform: [
      {
        translateX: musicValue2.interpolate({
          inputRange: [0, 1],
          outputRange: [8, -16],
        }),
      },
      {
        translateY: musicValue2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -40],
        }),
      },
      {
        rotate: musicValue2.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-45deg"],
        }),
      },
    ],
    opacity: musicValue2.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, 0],
    }),
  };

  useEffect(() => {
    if (video.current && lastViewedVideo !== activeVideo) {
      video.current.setPositionAsync(0);
      setLastViewedVideo(activeVideo);
    }
  }, [activeVideo, lastViewedVideo]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(discAnimationValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(musicValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(musicValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [discAnimationValue, musicValue1, musicValue2]);

  const bottomTabHeight = useBottomTabBarHeight();

  const renderItem = ({ item }) => (
    <>
      <View
        style={{
          width: windowWidth,
          height: windowHeight - bottomTabHeight,
        }}
      >
        <Video
          ref={video}
          source={{ uri: item.videoPath }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          resizeMode="cover"
          isLooping
          shouldPlay={isVideoPlaying}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onLoad={handleVideoLoad}
          onError={(error) => console.error("Erreur de lecture vidéo :", error)}
        />
        <TouchableOpacity
          onPress={toggleVideoPlayback}
          style={{
            position: "absolute",
            width: "100%",
            height: "74%",
            alignItems: "center",
            zIndex: 1,
            justifyContent: "center",
            marginTop: 110,
          }}
        >
          <FontAwesome5
            name={isVideoPlaying ? "pause" : "play"}
            size={60}
            color="white"
          />
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 60,
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "100%",
            flexDirection: "row",
            top: 50,
            position: "absolute",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => goProfil(item.posterId)}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                  flexDirection: "row",
                  marginLeft: 20,
                }}
              >
                <Image
                  source={{
                    uri:
                      !isEmpty(usersData) &&
                      usersData
                        .map((user) => {
                          if (user._id === item.posterId) return user.picture;
                          else return null;
                        })
                        .join(""),
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                borderRadius: "100%",
                marginLeft: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                {!isEmpty(usersData[0]) &&
                  usersData.map((user) => {
                    if (user._id === item.posterId) return user.pseudo;
                    else return null;
                  })}
              </Text>
              <Text style={{ color: "white" }}>Bonjour</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              borderRadius: "20%",
              marginRight: 20,
              padding: 6,
            }}
          >
            <EvilIcons name="eye" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: 16,
                marginLeft: 6,
              }}
            >
              {item.viewers.length}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 8,
            paddingBottom: 16,
          }}
        >
          <View style={{ flex: 4 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              {item.description}
            </Text>
            <Text
              style={{
                color: "white",
                marginVertical: 8,
              }}
            >
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 8,
                }}
              >
                <MaterialCommunityIcons
                  name="music-circle"
                  size={40}
                  color="black"
                />
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "pink",
                borderRadius: "100%",
              }}
            >
              <Animated.Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/651/651799.png",
                }}
                style={[
                  {
                    position: "absolute",
                    right: 40,
                    bottom: 16,
                    width: 16,
                    height: 16,
                    tintColor: "white",
                  },
                  musicAnimation1,
                ]}
              />
              <Animated.Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/651/651799.png",
                }}
                style={[
                  {
                    position: "absolute",
                    right: 40,
                    bottom: 16,
                    width: 16,
                    height: 16,
                    tintColor: "white",
                  },
                  musicAnimation2,
                ]}
              />
              <Animated.Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Disque_Vinyl.svg/1200px-Disque_Vinyl.svg.png",
                }}
                style={[
                  {
                    display: "flex",
                    width: 40,
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "pink",
                    borderRadius: "100%",
                  },
                  discAnimation,
                ]}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          right: 8,
          bottom: 160,
        }}
      >
        <View
          style={{
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          <LikeRéelsButton réels={item} />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {item.likers.length}
          </Text>
        </View>

        <View
          style={{
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={toggleComments}>
            <View
              style={{
                display: "flex",
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
              }}
            >
              <AntDesign name="message1" size={35} color="white" />
            </View>
          </TouchableOpacity>

          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {item.comments.length}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 24,
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
            }}
          >
            <MaterialCommunityIcons
              name="music-circle"
              size={40}
              color="black"
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            like
          </Text>
        </View>
      </View>
      <Modal
        isVisible={showComments}
        onBackdropPress={toggleComments} // Pour fermer le modal en appuyant sur l'arrière-plan
        style={{ margin: 0, justifyContent: "flex-end" }} // Placez le modal en bas de l'écran
        backdropOpacity={0.5} // Opacité de l'arrière-plan
        animationIn="slideInUp" // Animation pour afficher le modal
        animationOut="slideOutDown" // Animation pour fermer le modal
        useNativeDriverForBackdrop
      >
        <View
          style={{
            backgroundColor: isDarkMode ? "#171717" : "white",
            height: "85%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
              height: 50,
            }}
          >
            <Text
              style={{
                color: isDarkMode ? "#F5F5F5" : "black",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Post Comment
            </Text>
          </View>
          <ScrollView>
            <RéelsComment item={item} />
          </ScrollView>
          <View
            style={{
              width: "100%",
              height: "15%",
              borderTopWidth: 1,
              borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
            }}
          >
            <AddRéelsComment item={item} />
          </View>
        </View>
      </Modal>
    </>
  );

  return (
    <FlatList
      data={reelsData}
      renderItem={renderItem}
      onScroll={(e) => {
        const i = Math.round(
          e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight)
        );
        setActiveVideo(i);
      }}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 50,
      }}
      pagingEnabled
      vertical
    />
  );
};

export default VideoRéels;
