import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty, formatPostDate } from "../../Context/Utils";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import LikeButton from "./LikeButton";
import FollowHandler from "../../ProfileUtils.js/FollowHandler";
import { useNavigation } from "@react-navigation/native";
import AddCommentButton from "./AddCommentButton";
import AllCommentView from "./AllCommentView";
import { UidContext, useDarkMode } from "../../Context/AppContext";
import { LinearGradient } from "expo-linear-gradient";

const Posts = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const video = useRef(null);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [showComments, setShowComments] = useState(false);
  const [commentsHeight, setCommentsHeight] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const { uid } = useContext(UidContext);
  const { isDarkMode } = useDarkMode();

  const goProfil = (id) => {
    if (uid === id) {
      console.log("go to my profil", id);
      navigation.navigate("Profile", { id });
    } else {
      navigation.navigate("ProfilFriends", { id });
      console.log("go to profile friends", id);
    }
  };
  useEffect(() => {
    !isEmpty(usersData)[0] && setIsLoading(false);
  }, [usersData]);

  const toggleComments = () => {
    if (showComments) {
      Animated.timing(commentsHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => setShowComments(false));
    } else {
      setShowComments(true);
      Animated.timing(commentsHeight, {
        toValue: 200,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <>
      {post.picture && post.message && !post.video && (
        <View
          key={post._id}
          style={{
            marginTop: 8,
            marginBottom: 5,
            backgroundColor: isDarkMode ? "#171717" : "white",
            position: "relative",
            width: "96%",
            height: 500,
            borderRadius: 20,
            zIndex: 1,
            shadowColor: isDarkMode ? "white " : "#000",
            shadowOffset: {
              width: 0,
              height: isDarkMode ? 1 : 2,
            },
            shadowOpacity: isDarkMode ? 0.16 : 0.6,
            shadowRadius: 3.84,
            elevation: 2,
          }}
        >
          {isLoading ? (
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20,
                color: "red",
              }}
            >
              <FontAwesome name="spinner" size={24} color="red" />
            </Text>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative ",
                  zIndex: 1,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => goProfil(post.posterId)}>
                    <Image
                      source={{
                        uri:
                          !isEmpty(usersData[0]) &&
                          usersData
                            .map((user) => {
                              if (user._id === post.posterId)
                                return user.picture || "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
                              else return null;
                            })
                            .join(""),
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginTop: 10,
                        marginLeft: 30,
                        resizeMode: "cover",
                        zIndex: 1,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                      marginLeft: 6,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          color: isDarkMode ? "white" : "white",
                          marginLeft: 5,
                          fontWeight: "600",
                          fontSize: 18,
                        }}
                      >
                        {!isEmpty(usersData[0]) &&
                          usersData.map((user) => {
                            if (user._id === post.posterId) return user.pseudo;
                            else return null;
                          })}
                      </Text>
                      <View
                        style={{
                          marginLeft: 8,
                          justifyContent: "center",
                        }}
                      >
                        {post.posterId !== userData._id && (
                          <FollowHandler
                            idToFollow={post.posterId}
                            type={"friends"}
                          />
                        )}
                      </View>
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: 4,
                        fontWeight: "400",
                        fontSize: 12,
                        lineHeight: 12,
                      }}
                    >
                      {formatPostDate(post.createdAt)}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#302929",
                    width: 35,
                    height: 35,
                    borderRadius: 30,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="more-horizontal"
                    size={18}
                    color="white"
                   
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderColor: "red",
                  width: "100%",
                  height: 500,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  colors={[isDarkMode ? "black" : "#4F4F4F", "transparent"]}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    height: 100,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <Image
                  source={{
                    uri: post.picture,
                  }}
                  style={{
                    borderColor: "red",
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 20,
                    opacity: isDarkMode ? 0.7 : 1,
                  }}
                />

                <LinearGradient
                  colors={["transparent", isDarkMode ? "black" : "#4F4F4F"]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 200,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  marginVertical: 10,
                  top: "70%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "26%",
                    }}
                  >
                    <LikeButton post={post} type={"postPicture"} />
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "normal",
                      }}
                    >
                      {post.likers.length}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "26%",
                    }}
                  >
                    <TouchableOpacity onPress={toggleComments}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome5
                          name="comment"
                          size={25}
                          color="white"

                        />
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "normal",
                      }}
                    >
                      {post.comments.length}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      name="send"
                      size={25}
                      color="white"

                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="bookmark"
                    size={25}
                    color="white"

                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  zIndex: 1,
                  height: "12%",
                  width: "90%",
                  marginLeft: 10,
                  top: "56%",
                }}
              >
                <Text
                  style={{
                    color: isDarkMode ? "white" : "#F5F5F5",
                    fontSize: 15,
                    fontWeight: "400",
                    textAlign: "justify",
                    lineHeight: 20,
                  }}
                >
                  {post.message}
                </Text>
              </View>
            </>
          )}
        </View>
      )}

      {!post.picture && post.message && (
        <View
          key={post._id}
          style={{
            marginTop: 8,
            marginBottom: 5,
            backgroundColor: isDarkMode ? "#171717" : "white",
            position: "relative",
            width: "96%",
            height: 200,
            borderRadius: 20,
            zIndex: 1,
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
          {isLoading ? (
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20,
                color: "red",
              }}
            >
              <FontAwesome name="spinner" size={24} color="red" />
            </Text>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative ",
                  zIndex: 1,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => goProfil(post.posterId)}>
                    <Image
                      source={{
                        uri:
                          !isEmpty(usersData[0]) &&
                          usersData
                            .map((user) => {
                              if (user._id === post.posterId)
                                return user.picture;
                              else return null;
                            })
                            .join(""),
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginTop: 10,
                        marginLeft: 30,
                        resizeMode: "cover",
                        zIndex: 1,
                      }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                      marginLeft: 6,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          color: isDarkMode ? "#F5F5F5" : "black",
                          marginLeft: 5,
                          fontWeight: "600",
                          fontSize: 18,
                        }}
                      >
                        {!isEmpty(usersData[0]) &&
                          usersData.map((user) => {
                            if (user._id === post.posterId) return user.pseudo;
                            else return null;
                          })}
                      </Text>
                      <View
                        style={{
                          marginLeft: 8,
                          justifyContent: "center",
                        }}
                      >
                        {post.posterId !== userData._id && (
                          <FollowHandler
                            idToFollow={post.posterId}
                            type={"friends"}
                          />
                        )}
                      </View>
                    </View>
                    <Text
                      style={{
                        color: isDarkMode ? "#F5F5F5" : "black",

                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: 4,
                        fontWeight: "400",
                        fontSize: 12,
                        lineHeight: 12,
                      }}
                    >
                      {formatPostDate(post.createdAt)}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#302929",
                    width: 35,
                    height: 35,
                    borderRadius: 30,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="more-horizontal"
                    size={18}
                    color="white"

                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  zIndex: 1,
                  height: "12%",
                  width: "90%",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    color: isDarkMode ? "#F5F5F5" : "black",
                    fontSize: 16,
                    fontWeight: "400",
                    textAlign: "justify",
                    lineHeight: 20,
                  }}
                >
                  {post.message}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  marginVertical: 40,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "26%",
                    }}
                  >
                    <LikeButton post={post} type={"postMessage"} />
                    <Text
                      style={{
                        color: isDarkMode ? "#F5F5F5" : "black",
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "normal",
                      }}
                    >
                      {post.likers.length}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "26%",
                    }}
                  >
                    <TouchableOpacity onPress={toggleComments}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesome5
                          name="comment"
                          size={25}
                          color={isDarkMode ? "#F5F5F5" : "black"}

                        />
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: isDarkMode ? "#F5F5F5" : "black",
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "normal",
                      }}
                    >
                      {post.comments.length}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      name="send"
                      size={25}
                      color={isDarkMode ? "#F5F5F5" : "black"}

                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="bookmark"
                    size={25}
                    color={isDarkMode ? "#F5F5F5" : "black"}

                  />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      )}

      <Modal
        isVisible={showComments}
        onBackdropPress={toggleComments}
        style={{ margin: 0, justifyContent: "flex-end" }}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        useNativeDriverForBackdrop
      >
        <View
          style={{
            backgroundColor: isDarkMode ? "#171717" : "white",
            height: "85%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
              height: 50,
            }}
          >
            <Text
              style={{
                color: isDarkMode ? "#F5F5F5" : "black",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Post Comment
            </Text>
          </View>
          <ScrollView>
            <AllCommentView post={post} />
          </ScrollView>
          <View
            style={{
              width: "100%",
              height: "15%",
              borderTopWidth: 1,
              borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
            }}
          >
            <AddCommentButton post={post} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Posts;
