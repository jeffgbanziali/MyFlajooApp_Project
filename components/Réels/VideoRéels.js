import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";

const fakeVideos = [
  {
    id: 1,
    title: "Vidéo 1",
    description: "Description de la vidéo 1",
    videoSource: require("../../assets/Videos/AZE.mov"),
  },
  {
    id: 2,
    title: "Vidéo 2",
    description: "Description de la vidéo 2",
    videoSource: require("../../assets/Videos/AZE2.mp4"),
  },
  {
    id: 3,
    title: "Vidéo 3",
    description: "Description de la vidéo 3",
    videoSource: require("../../assets/Videos/AZE3.mp4"),
  },
  {
    id: 4,
    title: "Vidéo 4",
    description: "Description de la vidéo 3",
    videoSource: require("../../assets/Videos/AZE4.mp4"),
  },
];

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const VideoRéels = () => {
  const video = useRef(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lastViewedVideo, setLastViewedVideo] = useState(0);
  const [status, setStatus] = useState({});
  const discAnimationValue = useRef(new Animated.Value(0)).current;
  const musicValue1 = useRef(new Animated.Value(0)).current;
  const musicValue2 = useRef(new Animated.Value(0)).current;

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

  const renderItem = ({ item, index }) => (
    <>
      <View
        style={{
          width: windowWidth,
          height: windowHeight - bottomTabHeight,
        }}
      >
        <Video
          ref={video}
          source={item.videoSource}
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
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            alignItems: "center",
            zIndex: 1,
            justifyContent: "center",
          }}
          onPress={toggleVideoPlayback}
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
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%",
                flexDirection: "row",
                marginLeft: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://ds.static.rtbf.be/article/image/1239x1920/1/a/d/3cf2559725a9fdfa602ec8c887440f32-1676281590.jpg",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "100%",
                }}
              />
            </View>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                borderRadius: "100%",
                marginLeft: 10,
              }}
            >
              <Text style={{ color: "white" }}>Bonjouraerriehierher</Text>
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
                fontWeight: "bold",
              }}
            >
              345K
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
              {item.title}
            </Text>
            <Text
              style={{
                color: "white",
                marginVertical: 8,
              }}
            >
              {item.title}
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
          bottom: 180,
        }}
      >
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
            <FontAwesome name="heart" size={40} color="red" />
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
            <AntDesign name="message1" size={40} color="white" />
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
              size={50}
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
    </>
  );

  return (
    <FlatList
      data={fakeVideos}
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
