import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';



const Posts = ({ post }) => {
    return (
        <View style={{
            marginTop: 8,
            marginBottom: 5,
            backgroundColor: "#343232",
            position: "relative",
            borderRadius: 20,
            paddingBottom: 20,
            zIndex: 1,


        }}>

            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} />
            <View style={{ backgroundColor: '#000000', borderRadius: 30, paddingBottom: 10, marginBottom: 8 }}>
                <Likes post={post} />
            </View>

            <View style={{ backgroundColor: '#3D3939', borderRadius: 30, paddingBottom: 10 }}>
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>



        </View>

    );
}

export default Posts

const PostHeader = ({ post }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={{ uri: post.profile_picture }}

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
                }}>{post.user}</Text>
                <Text style={{
                    color: "#797777",
                    fontSize: 10,
                    marginRight: 40,
                    marginTop: 30,
                    marginHorizontal: -35,
                    fontWeight: '400',
                    fontSize: 10,
                    lineHeight: 12,



                }}>{post.time}</Text>
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
    )
}


const PostImage = ({ post }) => {
    return (
        <View>
            <Image source={{ uri: post.imageUrl }}
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
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{
                    backgroundColor: "#161414",
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>
                    <Feather name="heart" size={25} color="white" style={{
                        textAlign: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        resizeMode: "contain"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
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
                </TouchableOpacity>
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

const Likes = ({ post }) => {
    return (
        <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 4 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>
                {post.likes.toLocaleString("en")} likes
            </Text>
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
                    <Text style={{ color: 'white', fontWeight: '600' }}>
                        {comment.user}
                    </Text>
                    <Text style={{ color: '#B7AFAF', textAlign: 'justify' }}> {''}
                        {comment.comment}
                    </Text>
                </View>
            ))}

        </>

    )
}