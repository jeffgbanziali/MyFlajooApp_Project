import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { likePost, unlikePost } from '../../../actions/post.actions';
import { UidContext } from "../../Context/AppContext";
import { AntDesign, Feather } from '@expo/vector-icons';
import { Text } from 'react-native';

const LikeButton = ({ post }) => {
    const uid = useContext(UidContext)
    const [liked, setLiked] = useState(false)
    const dispatch = useDispatch()

    const like = () => {
        dispatch(likePost(post._id, uid))
        setLiked(true)
        console.log(post._id)

    }

    const unlike = () => {
        dispatch(unlikePost(post._id, uid))
        setLiked(false)
        console.log(post._id)
    }

    useEffect(() => {
        if (post.likers.includes(uid)) setLiked(true)
        else setLiked(false)
    }, [uid, post.likers, liked])

    return (

        <View>
            {
                uid && liked == false && (
                    <>
                        <TouchableOpacity style={{
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
                    </>

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
                        <AntDesign name="heart" size={24} color="red" style={{
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

const styles = StyleSheet.create({})

export default LikeButton;
