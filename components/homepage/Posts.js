import { View, Text, Image, TouchableOpacity } from 'react-native'
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
                            <PostHeader post={post} />
                            {
                                post.picture && (
                                    <PostImage post={post} />
                                )

                            }
                            <PostFooter post={post} />


                        </>
                    )
                }
            </View>





        </View>

    );
}

export default Posts

const PostHeader = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer)


    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    }, [usersData])

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={
                            !isEmpty(usersData[0]) &&
                            usersData.map((user) => {
                                if (user._id === post.posterId) {
                                    return user.picture
                                }
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

                    <Text style={{
                        color: "white",
                        marginLeft: 5,
                        fontWeight: '600'
                    }}>{!isEmpty(usersData[0]) &&
                        usersData.map((user) => {
                            if (user._id === post.posterId) {
                                return user.pseudo
                            }
                        }
                        ).join("")}</Text>
                    <Text style={{
                        color: "#797777",
                        fontSize: 10,
                        marginRight: 10,
                        marginTop: 30,
                        marginHorizontal: -35,
                        fontWeight: '400',
                        fontSize: 10,
                        lineHeight: 12,



                    }}>{
                            dateParser(post.createdAt)
                        }</Text>
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
        </>

    )
}


const PostImage = ({ post }) => {
    return (
        <View>
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

        </View>
    )
}

const PostFooter = ({ post }) => {
    const [showComments, setShowComments] = useState(false)
    return (
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
                                <CardComment post={post} />
                            )
                        }
                    </View>
                    <CommentNumber post={post} />

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
    )
}

const CommentNumber = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer)


    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false)
    }, [usersData])
    return (
        <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>
                {post.comments.length}
            </Text>
        </View>

    )
}


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

const Caption = ({ post }) => {
    return (
        <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>
                {post.user}
            </Text>
            <Text style={{ color: '#B7AFAF', textAlign: 'justify' }}> {''}
                {post.caption}

                <CommentsSection post={post} />
                <Comments post={post} />
            </Text>
        </View>

    )
}

const CommentsSection = ({ post }) => {
    return (
        <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: 'gray' }}>
                    View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {''}
                    {post.comments.length > 1 ? "comments" : "comment"}
                </Text>
            )}
        </View>


    )
}

const Comments = ({ post }) => {
    return (
        <>
            {post.comments.map((comment, index) => (
                <View key={index} style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 5 }}>
                    <Text style={{ color: '#B7AFAF', textAlign: 'justify' }}> {''}
                        {comment.comment}
                    </Text>
                </View>
            ))}

        </>

    )
}


const CardComment = ({ post }) => {

    const [text, setText] = useState('')
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()


    const handleComment = () => { }

    return (
        <View>
            {
                post.comments.map((comment) => (
                    <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 5 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>
                            {comment.user}
                        </Text>
                        <Text style={{ color: '#B7AFAF', textAlign: 'justify' }}> {''}
                            {comment.comment}
                        </Text>
                    </View>

                ))

            }
        </View>
    )


}

