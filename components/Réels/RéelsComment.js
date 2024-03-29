import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dateParser,
  formatPostDate,
  isEmpty,
  timestampParser,
} from "../Context/Utils";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useDarkMode } from "../Context/AppContext";
import { getVideoReels } from "../../actions/réels.action";

const RéelsComment = ({ réels }) => {
  const usersData = useSelector((state) => state.usersReducer);
  const { isDarkMode } = useDarkMode();
  const [loadRéels, setLoadRéels] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    if (loadRéels) {
      dispatch(getVideoReels());
      setLoadRéels(false);
    }
  }, [loadRéels, dispatch]);

  console.log(réels)


  return (
    <ScrollView>
      {réels.comments.map((comment) => {
        return (
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
              marginTop: 10,
            }}
            key={comment._id}
          >
            <View
              style={{
                width: 45,
                height: 45,
                marginRight: 10,
              }}
            >
              <Image
                source={{
                  uri:
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === comment.commenterId)
                          return user.picture || "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
                        else return null;
                      })
                      .join(""),
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
                alt="commenter-pic"
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginRight: 5,
                      color: isDarkMode ? "#F5F5F5" : "black",
                    }}
                  >
                    {comment.commenterPseudo}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "normal",
                      marginRight: 5,
                      color: "gray",
                    }}
                  >
                    {formatPostDate(comment.createdAt)}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    color: isDarkMode ? "#F5F5F5" : "black",
                    marginTop: 5,
                    fontSize: 16,
                  }}
                >
                  {comment.text}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 5,
                      color: "gray",
                    }}
                  >
                    Reply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginRight: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="heart"
                  size={20}
                  color={isDarkMode ? "#F5F5F5" : "black"}

                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default RéelsComment;
