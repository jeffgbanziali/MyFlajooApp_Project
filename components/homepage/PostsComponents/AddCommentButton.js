import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';

const AddCommentButton = ({ post }) => {
    const [text, setText] = useState('')
    const usersData = useSelector(state => state.usersReducer)
    const userData = useSelector(state => state.userReducer)

    const dispatch = useDispatch()

    const handleComment = () => {
        if (text) {
            dispatch(addComment(post._id, userData._id, text, userData.pseudo))
                .then(() => dispatch(getPosts()))
                .then(() => setText(''))
        }
    }

    return (
        <View>

            {userData._id && (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        marginBottom: 10
                    }}
                >
                    <View
                        style={{
                            width: 45,
                            height: 45,
                            marginLeft:"2.5%"
                        }}
                    >
                        <Image
                            source={{ uri: userData.picture }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 100,
                                
                            }}
                            alt='commenter-pic'
                        />
                    </View>
                    <TextInput
                        style={{
                            width: '78%',
                            height: 50,
                            backgroundColor: '#494747',
                            paddingLeft: 12,
                            marginLeft: 2,
                        }}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Leave a comment'
                        placeholderTextColor="white"
                        fontSize="16"
                        color="white"
                    />
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#e6e6e6',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'black',
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={handleComment}
                        >
                            <FontAwesome name="send" size={20} color="blue" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

export default AddCommentButton
