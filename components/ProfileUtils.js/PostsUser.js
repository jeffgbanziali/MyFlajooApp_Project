import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { MyPostUser } from '../../Data/UserProfilePost';

const PostsUser = () => {
    return (
        <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 40,

        }}
        >
            {MyPostUser.map((post, index) => (
                <TouchableOpacity key={index} >
                    <PostImage key={index} post={post} />
                </TouchableOpacity>


            ))}

        </View>
    );
}

const styles = StyleSheet.create({})

export default PostsUser;


const PostImage = ({ post }) => {
    return (
        <View
            style={{

                borderRadius: 10,
                overflow: "hidden",
                marginRight: 10,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: "white",
                backgroundColor: "white"
            }}
        >
            <Image source={{ uri: post.imageUrl }}
                style={{
                    width: 130,
                    height: 200,


                    resizeMode: "cover",

                }} />

        </View>
    )
}