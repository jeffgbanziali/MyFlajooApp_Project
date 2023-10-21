import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { getStories } from "../../../actions/story.action";
import MyStory from "./MyStory";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../Context/Utils";
import { UidContext, useDarkMode } from "../../Context/AppContext";
import { Video } from "expo-av";

const Stories = () => {
  const [loadPosts, setLoadPosts] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const storiesData = useSelector((state) => state.storyReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const { isDarkMode } = useDarkMode();
  const { uid } = useContext(UidContext);

  useEffect(() => {
    if (loadPosts) {
      dispatch(getStories());
      setLoadPosts(false);
    }
  }, [loadPosts, dispatch]);

  useEffect(() => {
    !isEmpty(usersData) && setLoading(false);
  }, [usersData]);

  const navigation = useNavigation(false);

  const handleViewStory = (id, mediaType) => {
    console.log("Clicked story ID:", id);
    navigation.navigate("StoryStream", { id, mediaType });

  };


  const renderItem = ({ item: story }) => (
    <View key={story._id}>
      {story.media && (
        <TouchableOpacity
          onPress={() => {
            handleViewStory(story._id, story.mediaType);
          }}
        >
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.4,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            {
              story.mediaType === 'image' && (
                <Image
                  source={{ uri: story.media }}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 10,
                    marginLeft: 10,
                    resizeMode: "cover",
                  }}
                />
              )
            }
            {
              story.mediaType === 'video' && (


                <Video
                  source={{ uri: story.media }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  isLooping
                  shouldPlay={false}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 10,
                    marginLeft: 10,
                    resizeMode: "cover",
                  }}
                />
              )
            }



          </View>
        </TouchableOpacity>
      )}
      {!story.media && (
        <TouchableOpacity
          onPress={() => {
            handleViewStory(story._id);
          }}
        >
          <View
            style={{
              width: 100,
              height: 140,
              borderRadius: 10,
              borderWidth: 3,
              padding: 5,
              borderColor: "#494747",
              backgroundColor: "green",
              marginLeft: 10,
              alignItems: "center",
              justifyContent: "center",
              resizeMode: "cover",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "600",
                marginTop: 10,
              }}
            >
              {story.text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: -70,
        }}
      >
        <Image
          source={{
            uri:
              !isEmpty(usersData[0]) &&
              usersData
                .map((user) => {
                  if (user._id === story.posterId) return user.picture;
                  else return null;
                })
                .join(""),
          }}
          style={{
            width: 42,
            height: 42,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: "#3B4FB8",
            marginLeft: 10,
            resizeMode: "cover",
            position: "relative",
          }}
        />
        <View
          style={{
            borderRadius: 30,
            marginLeft: 60,
            marginTop: -28,
            alignItems: "center",
            justifyContent: "center",
            resizeMode: "cover",
          }}
        >
          <View
            style={{
              backgroundColor: "#09C03C",
              width: 12,
              height: 12,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: "#000000",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              marginLeft: -8,
              marginTop: 7,
              zIndex: 100,
            }}
          ></View>
        </View>
        <View
          style={{
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            resizeMode: "cover",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            {!isEmpty(usersData[0]) &&
              usersData.map((user) => {
                if (user._id === story.posterId) return user.pseudo;
                else return null;
              })}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{
        marginBottom: 10,
        height: 160,
        width: "100%",
        resizeMode: "cover",
        backgroundColor: isDarkMode ? "#171717" : "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          alignSelf: "center",
        }}
        data={storiesData}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        ListHeaderComponent={<MyStory />}
      />
    </View>
  );
};

export default Stories;
