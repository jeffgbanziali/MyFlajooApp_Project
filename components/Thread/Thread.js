import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.actions";
import { isEmpty } from "../Context/Utils";
import Posts from "../homepage/PostsComponents/Posts";

const Thread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const posting = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
    <View>
      {!isEmpty(posting) &&
        Array.isArray(posting) &&
        posting.map((post) => {
          return (
            <View
              style={{
                alignItems: "center",
              }}
              key={post._id}
            >
              <Posts post={post} />
            </View>
          );
        })}
    </View>
  );
};

export default Thread;
