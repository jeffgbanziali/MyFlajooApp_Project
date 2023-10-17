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
import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { dateParser, isEmpty, formatPostDate } from "../../Context/Utils";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import LikeButton from "./LikeButton";
import FollowHandler from "../../ProfileUtils.js/FollowHandler";
import { useNavigation } from "@react-navigation/native";
import AddCommentButton from "./AddCommentButton";
import AllCommentView from "./AllCommentView";
import { UidContext } from "../../Context/AppContext";

const Posts = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const [showComments, setShowComments] = useState(false);
  const [commentsHeight, setCommentsHeight] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const uid = useContext(UidContext);

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

  console.log(usersData);

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
        toValue: 200, // Hauteur souhaitée du composant de commentaires
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <>
      <View
        style={{
          marginTop: 8,
          marginBottom: 5,
          backgroundColor: "black",
          position: "relative",
          borderRadius: 20,
          paddingBottom: 20,
          zIndex: 1,
        }}
      >
        <View key={post._id}>
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
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    alignSelf: "center",
                    marginBottom: 20,
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
                        borderWidth: 2,
                        borderColor: "red",
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
                          color: "white",
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
                        color: "#797777",
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
                    alignSelf: "center",
                  }}
                >
                  <Feather
                    name="more-horizontal"
                    size={18}
                    color="white"
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "400",
                    textAlign: "justify",
                    marginHorizontal: 30,
                    lineHeight: 20,
                    marginBottom: 10,
                  }}
                >
                  {post.message}
                </Text>
              </View>
              {post.picture && (
                <View
                  style={{
                    borderColor: "red",
                    width: "100%",
                    height: 500,
                  }}
                >
                  <Image
                    source={{
                      uri: post.picture,
                    }}
                    style={{
                      borderColor: "red",
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                </View>
              )}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <LikeButton post={post} />
                  </View>
                  <View>
                    <TouchableOpacity onPress={toggleComments}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 30,
                          justifyContent: "center",
                          alignSelf: "center",
                        }}
                      >
                        <FontAwesome5
                          name="comment"
                          size={25}
                          color="white"
                          style={{
                            textAlign: "center",
                            alignItems: "center",
                            alignSelf: "center",
                            resizeMode: "contain",
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Feather
                      name="send"
                      size={25}
                      color="white"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        resizeMode: "contain",
                      }}
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
                    alignSelf: "center",
                  }}
                >
                  <Feather
                    name="bookmark"
                    size={25}
                    color="white"
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      resizeMode: "contain",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  width: "35%",
                  marginLeft: 30,
                  marginTop: -10,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "gray",
                  }}
                >
                  {post.likers.length} likes
                </Text>
                <Text
                  style={{
                    color: "gray",
                  }}
                >
                  {post.comments.length} comments
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
      <Modal
        isVisible={showComments}
        onBackdropPress={toggleComments} // Pour fermer le modal en appuyant sur l'arrière-plan
        style={{ margin: 0, justifyContent: "flex-end" }} // Placez le modal en bas de l'écran
        backdropOpacity={0.5} // Opacité de l'arrière-plan
        animationIn="slideInUp" // Animation pour afficher le modal
        animationOut="slideOutDown" // Animation pour fermer le modal
        useNativeDriverForBackdrop
      >
        {/* Contenu du modal (composant de commentaires) */}
        <View
          style={{
            backgroundColor: "#494747",
            height: "85%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: "gray",
              height: 50,
            }}
          >
            <Text
              style={{
                color: "white",
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
              borderTopWidth: 2,
              borderColor: "gray",
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
