import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { likeStory, dislikeStory } from "../../../actions/story.action";
import { UidContext } from "../../Context/AppContext";
import { AntDesign, Feather } from "@expo/vector-icons";

const LikeStoriesButton = ({ story }) => {
  const { uid } = useContext(UidContext);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likeStory(story._id, uid));
    setLiked(true);
    console.log(story._id);
  };

  const unlike = () => {
    dispatch(dislikeStory(story._id, uid));
    setLiked(false);
    console.log(story._id);
  };

  useEffect(() => {
    if (story.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, story.likers, liked]);

  return (
    <View>
      {uid && liked == false && (
        <>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              justifyContent: "center",
              alignSelf: "center",
            }}
            onPress={like}
          >
            <Feather
              name="heart"
              size={35}
              color="white"
              style={{
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </>
      )}
      {uid && liked && (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            justifyContent: "center",
            alignSelf: "center",
          }}
          onPress={unlike}
        >
          <AntDesign
            name="heart"
            size={35}
            color="red"
            style={{
              textAlign: "center",
              alignItems: "center",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LikeStoriesButton;
