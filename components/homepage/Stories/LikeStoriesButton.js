import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { likeStory, dislikeStory } from "../../../actions/story.action";
import { UidContext } from "../../Context/AppContext";
import { AntDesign, Feather } from "@expo/vector-icons";

const LikeStoriesButton = ({ story }) => {
  const { uid } = useContext(UidContext);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const like = () => {
    console.log('Like button pressed');
    dispatch(likeStory(story._id, { id: uid }));
    setLiked(true);
    console.log("Est-ce que tu existes, mon", story._id, 'ane', uid);
  };


  const unlike = () => {
    console.log('Unlike button pressed');
    dispatch(dislikeStory(story._id, { id: uid }));
    setLiked(false);
    console.log("est-ceque tu existe mon", story._id);
  };


  useEffect(() => {
    setLiked((prevLiked) => {
      if (story.likers.includes(uid)) return true;
      else return false;
    });
  }, [uid, story.likers]);
  


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
              alignItems: "center",
            }}
            onPress={like}
          >
            <Feather
              name="heart"
              size={35}
              color="white"

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
            alignItems: "center",
          }}
          onPress={unlike}
        >
          <AntDesign
            name="heart"
            size={35}
            color="red"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LikeStoriesButton;
