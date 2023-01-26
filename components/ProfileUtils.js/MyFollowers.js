import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import FollowHandler from './FollowHandler';

const MyFollowers = () => {
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                backgroundColor: '#2C2828',
            }}

        >
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#F6F6F6',
                        textAlign: 'center',
                    }}
                >My Followers</Text>

                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: "space-between",
                        paddingTop: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 10,
                    }}

                >
                    <>
                        {usersData.map((user) => {
                            for (let i = 0; i < userData.followers.length; i++) {
                                if (user._id === userData.followers[i]) {
                                    return (
                                        <>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                }}
                                                key={user._id}
                                            >

                                                <View
                                                    style={{
                                                        padding: 5,
                                                        marginLeft: 20,
                                                        marginRight: 20,
                                                        marginTop: 10,
                                                        marginBottom: 10,
                                                        flexDirection: 'row',
                                                    }}
                                                >
                                                    <Image source={user.picture}
                                                        style={{
                                                            width: 80,
                                                            height: 80,
                                                            borderRadius: 100,
                                                            objectfit: 'cover',
                                                            borderWidth: 5,
                                                            borderColor: "#3B4FB8",
                                                        }}

                                                    />
                                                    <Text
                                                        style={{
                                                            fontSize: 20,
                                                            fontWeight: 'bold',
                                                            color: '#F6F6F6',
                                                            textAlign: 'center',
                                                            marginLeft: 10,
                                                            justifyContent: 'center',
                                                            alignContent: 'center',
                                                            alignItems: 'center',
                                                            alignSelf: 'center',
                                                        }}
                                                    >{user.pseudo}</Text>

                                                </View>
                                                <View
                                                    style={{
                                                        backgroundColor: "#3B4FB8",
                                                        width: 80,
                                                        height: 30,
                                                        marginLeft: 20,
                                                        marginRight: 20,
                                                        marginTop: 10,
                                                        marginBottom: 10,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        alignContent: 'center',
                                                        alignItems: 'center',
                                                        alignSelf: 'center',

                                                    }}
                                                >
                                                    <FollowHandler idToFollow={user._id} type={"suggestion"} />
                                                </View>
                                            </View>
                                        </>
                                    );
                                }
                            }
                            return null;
                        })}
                    </>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default MyFollowers