import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';



const Posts = ({ post }) => {
    return (
        <View style={{
            marginTop: 30,
            marginBottom: 60,
            backgroundColor: "#423C3C",
            position: "relative",
            borderRadius: 20,

        }}>
            <Divider />
            <PostHeader post={post} />
            <PostImage post={post} />
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
                width: 50,
                height: 50,
                borderRadius: 30,
                marginRight: 10,
            }}>
                <Feather name="more-horizontal" size={34} color="white"
                    style={{
                        textAlign: "center",
                        marginTop: "15%",
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
                    borderRadius: 20,
                  
                }} />

        </View>
    )
}

