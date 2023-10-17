import React, { useState } from "react";
import {
  View,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import VideoRéels from "../../components/Réels/VideoRéels";

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
    videoSource: require("../../assets/Videos/AZE2.mp4"),
  },
  {
    id: 4,
    title: "Vidéo 4",
    description: "Description de la vidéo 3",
    videoSource: require("../../assets/Videos/AZE4.mp4"),
  },
];

const Réels = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const video = React.useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [status, setStatus] = React.useState({});

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <VideoRéels />
    </KeyboardAvoidingView>
  );
};

export default Réels;
