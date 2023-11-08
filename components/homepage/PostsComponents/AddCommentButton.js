import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useDarkMode } from "../../Context/AppContext";
import { addComment, getPosts } from "../../../actions/post.actions";

const AddCommentButton = ({ post }) => {
  const { isDarkMode } = useDarkMode();

  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [loadPost, setLoadPost] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (text.length > 0) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }, [text]);

  const handleComment = () => {
    if (userData._id && text) {
      dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getPosts()))
        .then(() => setText(""));
    }
  };

  console.log(userData)

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);


  return (
    <View>
      {userData._id && (
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              marginLeft: "2.5%",
            }}
          >
            <Image
              source={{ uri: userData.picture || "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png" }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
              }}
              alt="commenter-pic"
            />
          </View>
          <TextInput
            style={{
              width: "78%",
              height: 50,
              paddingLeft: 12,
              marginLeft: 2,
            }}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Leave a comment..."
            placeholderTextColor={isDarkMode ? "#F5F5F5" : "black"}
            fontSize="16"
            color={isDarkMode ? "#F5F5F5" : "black"}
          />
          {isButtonVisible && (
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                paddingRight: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={handleComment}
              >
                <Ionicons name="send" size={30} color="blue" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default AddCommentButton;
