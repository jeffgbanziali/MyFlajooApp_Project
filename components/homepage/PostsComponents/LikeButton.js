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
<<<<<<< HEAD

=======
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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
<<<<<<< HEAD
                uid && liked == false && (
=======
                uid && liked === false && (
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
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
<<<<<<< HEAD
                )
            }
=======

                )
            }
            <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 4 }}>
                <Text style={{ color: 'white', fontWeight: '600' }}>
                    {post.likers.length}
                </Text>
            </View>
>>>>>>> db6f96dd7e718529791f1c1a58ba5663596a5a4e
        </View>
    )
}

const styles = StyleSheet.create({})

export default LikeButton;
