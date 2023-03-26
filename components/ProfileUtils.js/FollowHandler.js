import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../Context/Utils';
import { followUser, unfollowUser } from '../../actions/user.action';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const FollowHandler = ({ idToFollow, type }) => {
    const userData = useSelector((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = useState(false);
    const dispatch = useDispatch();



    const handleFollow = () => {
        dispatch(followUser(userData._id, idToFollow));
        setIsFollowed(true);
    };

    const handleUnfollow = () => {
        dispatch(unfollowUser(userData._id, idToFollow));
        setIsFollowed(false);
    };

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if (userData.following.includes(idToFollow)) {
                setIsFollowed(true);
            } else setIsFollowed(false);
        }
    }, [userData, idToFollow]);


    return (
        <>
            {isFollowed && !isEmpty(userData) && (
                <TouchableOpacity onPress={handleUnfollow}>
                    {type === "suggestion" && (
                        <View
                            style={{
                                backgroundColor: '#4a5568',
                                borderRadius: 10,
                                padding: 10,
                                width: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: '#F6F6F6',
                                    textAlign: 'center',
                                }}
                            >Following</Text>
                        </View>
                    )}
                    {type === "profile" && (
                        <View >
                            <Text >Following</Text>
                        </View>
                    )}
                    {type === "card" && (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#EBF8FF',
                            borderRadius: 10,
                            height: 50,
                            padding: 2,
                            width: 150,
                        }} >
                            <FontAwesome5 name="user-check" size={25} color="#3B82F6" />
                            <Text
                                style={{
                                    color: '#3B82F6',
                                    textAlign: 'center',
                                    fontFamily: 'Roboto',
                                    fontWeight: 'semibold',
                                    justifyContent: 'center',
                                    fontSize: 20,
                                    marginLeft: 6,
                                }} >Friends</Text>
                        </View>
                    )}
                    {type === "friends" && (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'gray',
                                borderRadius: 8,
                                width: 50,
                                padding: 4,
                                borderRadius: 10,
                            }}
                        >
                            <FontAwesome5 name="user-check" size={16} color="black" />
                        </View>
                    )}
                </TouchableOpacity>
            )}
            {isFollowed === false && !isEmpty(userData) && (
                <TouchableOpacity onPress={handleFollow}>
                    {type === "suggestion" && (
                        <View
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 10,
                                padding: 10,
                                width: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                            }}
                            >Follow</Text>
                        </View>
                    )}
                    {type === "profile" && (
                        <View >
                            <Text >Follow</Text>
                        </View>
                    )}
                    {type === "card" && (
                        <View >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'red',
                                    borderRadius: 10,
                                    height: 50,
                                    padding: 2,
                                    width: 150,
                                }}>
                                <FontAwesome5 name="user-plus" size={25} color="white" />
                                <Text
                                    style={{
                                        color: 'white',
                                        textAlign: 'center',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'semibold',
                                        justifyContent: 'center',
                                        fontSize: 20,
                                        marginLeft: 6,
                                    }}
                                >Follow</Text>
                            </View>
                        </View>
                    )}
                    {type === "friends" && (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#EBF8FF',
                                borderRadius: 8,
                                width: 50,
                                padding: 4,
                                borderRadius: 10,
                            }}
                        >
                            <FontAwesome5 name="user-plus" size={16} color="black" />
                        </View>
                    )}
                </TouchableOpacity >
            )}
        </>
    )
}

export default FollowHandler