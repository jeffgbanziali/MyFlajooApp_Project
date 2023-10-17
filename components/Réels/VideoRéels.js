import { View, Text, Image, Dimensions, Animated, Easing } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const fakeVideos = [
  {
    id: 1,
    title: "Vidéo 1",
    description: "Description de la vidéo 1",
    videoSource: require("../../assets/Videos/AZE2.mp4"),
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
    videoSource: require("../../assets/Videos/AZE2.mp4"),
  },
  {
    id: 4,
    title: "Vidéo 4",
    description: "Description de la vidéo 3",
    videoSource: require("../../assets/Videos/AZE4.mp4"),
  },
];

const VideoRéels = () => {
  const video = useRef(null);

  const discAnimationValue = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    Animated.loop(
      Animated.timing(discAnimationValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [discAnimationValue]);

  return (
    <View
      style={{
        flex: 1,
        height: "40%",
      }}
    >
      {fakeVideos.map((videoData, index) => (
        <>
          <View
            key={videoData.id}
            style={{
              height: "100%",
            }}
          >
            <Video
              ref={video}
              source={videoData.videoSource}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              resizeMode="cover"
            />

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
                  width: 60,
                  height: 60,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                  marginRight: 20,
                }}
              >
                <Text>Bonjour</Text>
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
                  {videoData.title}
                </Text>
                <Text
                  style={{
                    color: "white",
                    marginVertical: 8,
                  }}
                >
                  {videoData.title}
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
                    {videoData.title}
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
        </>
      ))}

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
    </View>
  );
};

export default VideoRéels;
