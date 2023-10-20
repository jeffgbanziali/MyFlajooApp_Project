import React, { useState } from "react";
import { KeyboardAvoidingView, Dimensions, FlatList } from "react-native";
import VideoRéels from "../../components/Réels/VideoRéels";
import { useSelector } from "react-redux";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Réels = () => {
  const reelsData = useSelector((state) => state.videoReelsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={reelsData}
        renderItem={({ item, index }) => (
          <VideoRéels item={item} isActive={activeVideoIndex === index} />
        )}
        onScroll={(e) => {
          const i = Math.round(
            e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight)
          );
          setActiveVideoIndex(i); // Use 'i' instead of 'index'
        }}
        pagingEnabled
        vertical
      />
    </KeyboardAvoidingView>
  );
};

export default Réels;
