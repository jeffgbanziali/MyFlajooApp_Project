import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser, isEmpty } from '../../Context/Utils'
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import LikeButton from './LikeButton';
import FollowHandler from '../../ProfileUtils.js/FollowHandler';
import { useNavigation } from '@react-navigation/native';




const Posts = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer);
    const [showComments, setShowComments] = useState(false)

    const navigation = useNavigation();
    const goProfil = () => {
        navigation.navigate("ProfilFriends", { id: post.posterId })
    }


    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    }, [usersData])

    return (
        <View style={{
            marginTop: 8,
            marginBottom: 5,
            backgroundColor: "black",
            position: "relative",
            borderRadius: 20,
            paddingBottom: 20,
            zIndex: 1,

        }} >
            <View key={post._id}>
                {
                    isLoading ? (
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 20,
                                marginBottom: 20,
                                color: 'black'
                            }}
                        >
                            <FontAwesome name="spinner" size={24} color="black" />
                        </Text>
                    ) : (
                        <>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    alignContent: 'center',
                                    alignSelf: 'center',
                                    marginBottom: 20,
                                }}>
                                    <TouchableOpacity
                                        onPress={goProfil}
                                    >
                                        <Image source={
                                            !isEmpty(usersData[0]) &&
                                            usersData?.map((user) => {
                                                if (user._id === post.posterId)
                                                    return user.picture;
                                                else return null
                                            }
                                            ).join("")
                                        }

                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 30,
                                                marginTop: 10,
                                                borderWidth: 3,
                                                borderColor: "red",
                                                marginLeft: 30,
                                                resizeMode: "cover"
                                            }} />
                                    </TouchableOpacity>
                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            marginLeft: 6,

                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',

                                            }}>
                                            <Text style={{
                                                color: "white",
                                                marginLeft: 5,
                                                fontWeight: '600',
                                                marginTop: 10,
                                            }}>{!isEmpty(usersData[0]) &&
                                                usersData?.map((user) => {
                                                    if (user._id === post.posterId)
                                                        return user.pseudo;
                                                    else return null
                                                }
                                                ).join("")}</Text>
                                            <View
                                                style={{
                                                    width: 100,
                                                    marginLeft: 5,
                                                    marginTop: 10,
                                                    justifyContent: 'center',
                                                }}>
                                                {
                                                    post.posterId !== userData._id && <FollowHandler idToFollow={post.posterId} type={"friends"} />

                                                }
                                            </View>
                                        </View>
                                        <Text style={{
                                            color: "#797777",
                                            fontSize: 10,
                                            marginLeft: 5,
                                            marginTop: 4,
                                            fontWeight: '400',
                                            fontSize: 12,
                                            lineHeight: 12,
                                        }}>{
                                                dateParser(post.createdAt)
                                            }
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{
                                    backgroundColor: "#302929",
                                    width: 40,
                                    height: 40,
                                    borderRadius: 30,
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    alignSelf: 'center'
                                }}>
                                    <Feather name="more-horizontal" size={25} color="white"
                                        style={{
                                            textAlign: "center",
                                            alignItems: "center",
                                            alignSelf: "center",
                                            resizeMode: "contain"
                                        }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 15,
                                        fontWeight: '400',
                                        marginHorizontal: 30,
                                        lineHeight: 20,
                                        marginBottom: 10
                                    }}
                                >
                                    {post.message}
                                </Text>
                            </View>
                            <Image source={post.picture}
                                style={{
                                    width: '100%',
                                    height: 400,
                                    resizeMode: "cover",
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0
                                }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <LikeButton post={post} />
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => setShowComments(!showComments)}
                                        >
                                            <View style={{
                                                backgroundColor: "#161414",
                                                width: 50,
                                                height: 50,
                                                borderRadius: 30,
                                                marginRight: 10,
                                                justifyContent: 'center',
                                                alignSelf: 'center'
                                            }}>
                                                <Feather name="message-circle" size={25} color="white" style={{
                                                    textAlign: "center",
                                                    alignItems: "center",
                                                    alignSelf: "center",
                                                    resizeMode: "contain"
                                                }} />
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 4 }}>
                                            <Text style={{ color: 'white', fontWeight: '600' }}>
                                                {post.comments.length}
                                            </Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{
                                        backgroundColor: "#161414",
                                        width: 50,
                                        height: 50,
                                        borderRadius: 30,
                                        marginRight: 10,
                                        justifyContent: 'center',
                                        alignSelf: 'center'
                                    }}>
                                        <Feather name="send" size={25} color="white" style={{
                                            textAlign: "center",
                                            alignItems: "center",
                                            alignSelf: "center",
                                            resizeMode: "contain"

                                        }} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{
                                    backgroundColor: "#161414",
                                    width: 50,
                                    height: 50,
                                    borderRadius: 30,
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    alignSelf: 'center'
                                }}>
                                    <Feather name="bookmark" size={25} color="white" style={{
                                        textAlign: "center",
                                        alignItems: "center",
                                        alignSelf: "center",
                                        resizeMode: "contain"
                                    }} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                {
                                    showComments && (
                                        <View
                                            style={{
                                                alignContent: 'center',
                                                alignItems: 'center',
                                                alignSelf: 'center',
                                                justifyContent: 'center',
                                                marginTop: 10,
                                                backgroundColor: "#161414",
                                                width: "100%",
                                                height: 300,
                                                borderRadius: 30,
                                                marginTop: 10,
                                            }}

                                        >
                                            {


                                                <>
                                                    <CardComments post={post} />
                                                </>

                                            }
                                        </View>
                                    )
                                }
                            </View>


                        </>
                    )
                }
            </View>





        </View>

    );
}

export default Posts


const CardComments = ({ post }) => {
    const [text, setText] = useState("");
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    const handleComment = () => {

        if (text) {
            dispatch(addComment(post._id, userData._id, text, userData.pseudo))
                .then(() => dispatch(getPosts()))
                .then(() => setText(''));
        }
    };

    return (
        <View>
            {post.comments.map((comment) => {
                let commentContainerStyle = {};
                let leftPartStyle = {};
                let rightPartStyle = {};

                if (comment.commenterId === userData._id) {
                    commentContainerStyle = { ...styles.commentContainer, ...styles.clientCommentContainer };
                } else {
                    commentContainerStyle = styles.commentContainer;
                }

                let commenterPicture = null;
                if (!isEmpty(usersData[0])) {
                    commenterPicture = usersData
                        .map((user) => {
                            if (user._id === comment.commenterId) return user.picture;
                            else return null;
                        })
                        .join("");
                }

                return (
                    <ScrollView>
                        <View style={commentContainerStyle} key={comment._id}>
                            <View style={leftPartStyle}>
                                <Image
                                    source={{ uri: commenterPicture }}
                                    style={styles.commenterPicture}
                                    alt="commenter-pic"
                                />
                            </View>
                            <View style={rightPartStyle}>
                                <View style={styles.commentHeader}>
                                    <View style={styles.pseudo}>
                                        <Text style={styles.pseudoText}>{comment.commenterPseudo}</Text>
                                        {comment.commenterId !== userData._id && (
                                            <TouchableOpacity style={styles.replyButton}>
                                                <Text style={styles.replyButtonText}>Reply</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                    <Text style={styles.timestamp}>{(comment.timestamp)}</Text>
                                </View>
                                <Text>{comment.text}</Text>

                            </View>
                        </View>
                    </ScrollView>

                );
            })}
            {userData._id && (
                <View style={styles.commentForm}>
                    <TextInput
                        style={styles.commentInput}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="Leave a comment"
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={handleComment}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = {
    commentContainer: {
        flexDirection: "row",
        marginBottom: 10
    },
    clientCommentContainer: {
        backgroundColor: "#e6e6e6"
    },
    leftPart: {
        marginRight: 10

    },
    rightPart: {
        flex: 1

    },
    commenterPicture: {
        width: 50,
        height: 50
    },
    commentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    },
    pseudo: {
        flexDirection: "row",
        alignItems: "center"
    },
    pseudoText: {
        fontWeight: "bold",
        marginRight: 5,
        color: "white"
    },

    commentForm: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    commentInput: {
        width: "80%",
        height: 50,
        backgroundColor: "#e6e6e6",
        borderRadius: 50,
        paddingLeft: 10
    },
    submitButton: {
        width: "20%",
        height: 50,
        backgroundColor: "#e6e6e6",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    submitButtonText: {
        color: "#666666"

    }
};
