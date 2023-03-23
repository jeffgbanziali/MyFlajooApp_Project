import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser, isEmpty, timestampParser } from '../../Context/Utils'
import { ScrollView } from 'react-native-gesture-handler'
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
            {post.comments.map(comment => {
                if (!isEmpty(usersData[0])) {
                    commenterPicture = usersData
                        .map(user => {
                            if (user._id === comment.commenterId) return user.picture
                            else return null
                        })
                        .join('')
                }

                return (
                    <ScrollView>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: 10,
                                marginTop: 10
                            }}
                            key={comment._id}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                }}
                            >
                                <Image
                                    source={{ uri: "https://i.pinimg.com/originals/53/d8/07/53d807f07a035d81ce767abd44c98e13.png" }}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderColor: "red",
                                        borderRadius: 100
                                    }}
                                    alt='commenter-pic'
                                />
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginBottom: 5
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                marginRight: 5,
                                                color: 'blue'
                                            }}
                                        >
                                            {comment.commenterPseudo}
                                        </Text>
                                        <Text

                                            style={{
                                                color: "gray"
                                            }}
                                        >
                                            {comment.text}
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text

                                        style={{
                                            fontWeight: 'normal',
                                            marginRight: 5,
                                            color: 'gray'
                                        }}
                                    >
                                        {
                                            timestampParser(comment.timestamp)
                                        }
                                    </Text>
                                    <View

                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginLeft: 10
                                        }}
                                    >
                                        <TouchableOpacity>
                                            <Text
                                                style={{
                                                    fontWeight: 'normal',
                                                    marginRight: 5,
                                                    color: 'red'
                                                }}>
                                                Like
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={{
                                                fontWeight: 'normal',
                                                marginRight: 5,
                                                color: 'white'
                                            }}>
                                                Reply
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )
            })}
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
                    <TextInput
                        style={{
                            width: '84%',
                            height: 40,
                            backgroundColor: 'gray',
                            borderRadius: 50,
                            paddingLeft: 10,
                            marginLeft: 10,
                        }}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Leave a comment'
                    />
                    <View
                        style={{
                            width: 50,
                            height: 50,
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
                                height: 50,
                                backgroundColor: 'gray',
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={handleComment}
                        >
                            <FontAwesome name="send" size={24} color="blue" />
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </View>
    )
}

export default AddCommentButton
