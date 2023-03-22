import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser, isEmpty } from '../../Context/Utils'
import { ScrollView } from 'react-native-gesture-handler'

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
                        <View key={comment._id}>
                            <View style={{
                                marginRight: 10
                            }}>
                                <Image
                                    source={{ uri: commenterPicture }}
                                    style={{
                                        width: 50,
                                        height: 50
                                    }}
                                    alt='commenter-pic'
                                />
                            </View>
                            <View style={{
                                flex: 1
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 5
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            marginRight: 5,
                                            color: 'blue'
                                        }}>
                                            {comment.commenterPseudo}
                                        </Text>
                                        {comment.commenterId !== userData._id && (
                                            <TouchableOpacity >
                                                <Text >Reply</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                    <Text >{comment.timestamp}</Text>
                                </View>
                                <Text>{comment.text}</Text>
                            </View>
                        </View>
                    </ScrollView>
                )
            })}
            {userData._id && (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    <TextInput
                        style={{
                            width: '75%',
                            height: 50,
                            backgroundColor: '#e6e6e6',
                            borderRadius: 50,
                            paddingLeft: 10
                        }}
                        onChangeText={text => setText(text)}
                        value={text}
                        placeholder='Leave a comment'
                    />
                    <TouchableOpacity style={{
                        width: '20%',
                        height: 50,
                        backgroundColor: '#e6e6e6',
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={handleComment}>
                        <Text
                            style={{
                                color: '#666666'
                            }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}


export default AddCommentButton
