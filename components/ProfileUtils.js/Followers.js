import { Link, useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/base';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, NavLink } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';





const Followers = () => {

    const navigation = useNavigation();
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const [followersPopop, setFollowersPopop] = useState([]);
    const [followingPopop, setFollowingPopop] = useState([])

    const handleFollowing = () => {
        navigation.navigate('Myfollowing');
    }

    const handleFollowers = () => {
        navigation.navigate('Myfollowers');
    }

    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 100,
                top: -65,
                zIndex: 1,
                position: 'relative',

            }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    zIndex: 1,
                }}>
                    <View style={{
                        marginRight: 10,
                    }}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#F6F6F6',
                            textAlign: 'center',
                        }}>
                            200 K   {''}
                        </Text>
                        <Text style={{
                            color: '#787373',

                        }}>
                            Post
                        </Text>
                    </View>

                    <Divider orientation="vertical" width={5} />

                </View>
                <View style={{
                    flexDirection: 'row',
                    zIndex: 1,
                }}>
                    <View>
                        <TouchableOpacity
                            onPress={handleFollowers}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#F6F6F6',
                                textAlign: 'center',
                            }}>
                                {
                                    userData.followers ? userData.followers.length : 0
                                }
                            </Text>
                            <Text style={{
                                color: '#787373',


                            }}>
                                Followers
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    zIndex: 1,
                }} >
                    <Divider orientation="vertical" width={5} />
                    <View style={{
                        marginLeft: 10,
                    }}>
                        <TouchableOpacity
                            onPress={handleFollowing}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#F6F6F6',
                                textAlign: 'center',
                            }}>
                                {
                                    userData.following ? userData.following.length : 0
                                }
                            </Text>
                            <Text style={{
                                color: '#787373',


                            }}>
                                Following
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </>

    );
}


export default Followers;
