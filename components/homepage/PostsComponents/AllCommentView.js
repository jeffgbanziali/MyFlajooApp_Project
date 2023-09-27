import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateParser, formatPostDate, isEmpty, timestampParser } from '../../Context/Utils'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

const AllCommentView = ({ post }) => {

    const [text, setText] = useState('')
    const usersData = useSelector(state => state.usersReducer)
    const userData = useSelector(state => state.userReducer)

    const dispatch = useDispatch()
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
                                    width: 45,
                                    height: 45,
                                    marginRight: 10,
                                }}
                            >
                                <Image
                                    source={{ uri: "https://i.pinimg.com/originals/53/d8/07/53d807f07a035d81ce767abd44c98e13.png" }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
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
                                                color: 'white'
                                            }}
                                        >
                                            {comment.commenterPseudo}
                                        </Text>
                                        <Text

                                            style={{
                                                fontWeight: 'normal',
                                                marginRight: 5,
                                                color: 'gray'
                                            }}
                                        >
                                            {
                                                formatPostDate(post.createdAt)
                                            }
                                        </Text>

                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'column',

                                    }}
                                >
                                    
                                    <Text

                                        style={{
                                            color: "white",
                                            marginTop: 5,
                                            fontSize: 16,
                                        }}
                                    >
                                        {comment.text}
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            marginTop: 5,
                                            color: 'gray'
                                        }}>
                                            Reply
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View

                                style={{
                                    flexDirection: 'row',
                                    marginRight: 10,
                                }}
                            >
                                <TouchableOpacity>
                                    <Feather name="heart" size={20} color="white" style={{
                                        textAlign: "center",
                                        alignItems: "center",
                                        alignSelf: "center",
                                        resizeMode: "contain"
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )
            })}
        </View>
    )
}

export default AllCommentView