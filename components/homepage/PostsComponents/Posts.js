import { View, Text, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { dateParser, isEmpty } from '../../Context/Utils'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import LikeButton from './LikeButton';
import FollowHandler from '../../ProfileUtils.js/FollowHandler';
import { useNavigation } from '@react-navigation/native';
import AddCommentButton from './AddCommentButton';





const Posts = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector((state) => state.usersReducer)
    const userData = useSelector((state) => state.userReducer);
    const [showComments, setShowComments] = useState(false)

    const navigation = useNavigation();
    const goProfil = () => {
        navigation.navigate("ProfilFriends")
    }


    useEffect(() => {
        !isEmpty(usersData)[0] && setIsLoading(false);
    }, [usersData]);


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
                                color: 'red'
                            }}
                        >
                            <FontAwesome name="spinner" size={24} color="red" />
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
                                        <Image
                                            source={
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
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                            }}>
                                            <Text style={{
                                                color: "white",
                                                marginLeft: 5,
                                                fontWeight: '600',
                                                fontSize: 18,
                                            }}>
                                                {
                                                    !isEmpty(usersData[0]) &&
                                                    usersData
                                                        .map((user) => {
                                                            if (user._id === post.posterId) return user.pseudo;
                                                            else return null;
                                                        })
                                                }
                                            </Text>
                                            <View
                                                style={{
                                                    marginLeft: 5,
                                                    justifyContent: 'center',
                                                }}>
                                                {
                                                    post.posterId !== userData._id && (
                                                        <FollowHandler idToFollow={post.posterId} type={"friends"} />
                                                    )

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
                            {
                                post.picture && (

                                    <View
                                    >
                                        <Image
                                            source={
                                                {
                                                    uri: post.picture
                                                }
                                            }
                                            style={{
                                                borderColor: "red",
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

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <View >
                                        <LikeButton post={post} />
                                    </View>
                                    <View >
                                        <TouchableOpacity
                                            onPress={() => setShowComments(!showComments)}
                                        >
                                            <View style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 30,
                                                justifyContent: 'center',
                                                alignSelf: 'center'
                                            }}>
                                                <FontAwesome5 name="comment" size={30} color="white" style={{
                                                    textAlign: "center",
                                                    alignItems: "center",
                                                    alignSelf: "center",
                                                    resizeMode: "contain"
                                                }} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignSelf: 'center'
                                    }}>
                                        <Feather name="send" size={30} color="white" style={{
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
                            <View
                                style={{
                                    flexDirection: 'column',
                                    width: "35%",
                                    marginLeft: 30,
                                    marginTop: -10,
                                    justifyContent: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "gray"
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
                            <View>
                                {
                                    showComments && (
                                        <View
                                            style={{
                                                marginTop: 10,
                                                backgroundColor: "black",
                                                width: "100%",
                                                marginTop: 10,
                                            }}

                                        >
                                            {
                                                <>
                                                    <AddCommentButton post={post} />
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


