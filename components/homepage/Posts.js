import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';
import Thread from '../Thread/Thread';
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser, isEmpty } from '../Context/Utils'
import { FontAwesome } from '@expo/vector-icons';
import { UidContext } from '../Context/AppContext';
import { likePost, unlikePost } from '../../actions/post.actions'




const Posts = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer)
    const [showComments, setShowComments] = useState(false)


    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    }, [usersData])


    return (
        <View style={{
            marginTop: 8,
            marginBottom: 5,
            backgroundColor: "#343232",
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    alignContent: 'center',
                                    alignSelf: 'center',
                                    marginBottom: 20,
                                }}>
                                    <TouchableOpacity>
                                        <Image source={
                                            !isEmpty(usersData[0]) &&
                                            usersData.map((user) => {
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
                                        <Text style={{
                                            color: "white",
                                            marginLeft: 5,
                                            fontWeight: '600',
                                            marginTop: 10,
                                        }}>{!isEmpty(usersData[0]) &&
                                            usersData.map((user) => {
                                                if (user._id === post.posterId)
                                                    return user.pseudo;
                                                else return null
                                            }
                                            ).join("")}</Text>
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
                                            }</Text>
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
                            {
                                post.picture && (
                                    <Image source={{ uri: post.picture }}
                                        style={{
                                            width: '100%',
                                            height: 400,
                                            resizeMode: "cover",
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                            borderBottomLeftRadius: 0,
                                            borderBottomRightRadius: 0

                                        }} />
                                )

                            }
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>

                                        <LikesButton post={post} />

                                    </View>
                                    <View>
                                        <View style={{
                                            backgroundColor: "#161414",
                                            width: 50,
                                            height: 50,
                                            borderRadius: 30,
                                            marginRight: 10,
                                            justifyContent: 'center',
                                            alignSelf: 'center'
                                        }}>

                                            <TouchableOpacity
                                                onPress={() => setShowComments(!showComments)}
                                            >
                                                <Feather name="message-circle" size={25} color="white" style={{
                                                    textAlign: "center",
                                                    alignItems: "center",
                                                    alignSelf: "center",
                                                    resizeMode: "contain"
                                                }} />


                                            </TouchableOpacity>
                                            {
                                                showComments && (
                                                    <View>
                                                        {


                                                            <>
                                                                <CardComments post={post} />
                                                            </>

                                                        }
                                                    </View>
                                                )
                                            }
                                        </View>
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


                        </>
                    )
                }
            </View>





        </View>

    );
}

export default Posts



const LikesButton = ({ post }) => {

    const uid = useContext(UidContext)
    const [liked, setLiked] = useState(false)
    const dispatch = useDispatch()

    const like = async () => {
        dispatch(likePost(post._id, uid))
        setLiked(true)
    }

    const unlike = async () => {
        dispatch(unlikePost(post._id, uid))
        setLiked(false)
    }

    useEffect(() => {
        if (post.likers.includes(uid)) setLiked(true)
        else setLiked(false)
    }, [uid, post.likers, liked])


    return (

        <View>
            {
                uid && liked === false && (
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: "red",
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            marginRight: 10,
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                            onPress={like}
                        >
                            <Feather name="heart" size={25} color="white" style={{
                                textAlign: "center",
                                alignItems: "center",
                                alignSelf: "center",
                                resizeMode: "contain"
                            }} />

                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 4 }}>
                            <Text style={{ color: 'white', fontWeight: '600' }}>
                                {post.likers.length}
                            </Text>
                        </View>
                    </View>

                )
            }
            {
                uid && liked && (
                    <TouchableOpacity style={{
                        backgroundColor: "#161414",
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginRight: 10,
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                        onPress={unlike}
                    >
                        <Feather name="heart" size={25} color="white" style={{
                            textAlign: "center",
                            alignItems: "center",
                            alignSelf: "center",
                            resizeMode: "contain"
                        }} />
                    </TouchableOpacity>

                )
            }
        </View>
    )
}

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
        <View
            style={{
                backgroundColor: "#161414",
                width: 500,
                height: 150,
                borderRadius: 30,
                marginRight: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                zIndex: 1
            }}
        >
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
    leftPart: {},
    rightPart: {},
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
