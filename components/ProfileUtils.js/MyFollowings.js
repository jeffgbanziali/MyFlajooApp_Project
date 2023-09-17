import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import FollowHandler from './FollowHandler';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MyFollowers = () => {
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const navigation = useNavigation();
    const handleClickReturnProfile = () => {
        console.log("clicked")
        navigation.navigate('Profile');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{
                flex: 1,
                backgroundColor: 'black',
            }}

        >
            <View style={{ flex: 1, marginTop: 50 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                    }}
                >

                    <TouchableOpacity
                        onPress={handleClickReturnProfile}
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            backgroundColor: "#161414",
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            marginLeft: "3.5%",
                            marginTop: "1.5%"
                        }}
                    >
                        <View>
                            <AntDesign name="arrowleft" size={28} color="#5F5858" style={{
                                alignSelf: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                resizeMode: "contain"
                            }} />
                        </View>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: 'semibold',
                            color: '#F6F6F6',
                            textAlign: 'center',
                            marginRight: "4.5%",
                        }}
                    >My Followings</Text>
                </View>

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
                            for (let i = 0; i < userData.following.length; i++) {
                                if (user._id === userData.following[i]) {
                                    return (
                                        <>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}
                                            >

                                                <View key={user._id}
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
                                                        width: 100,
                                                        padding: 5,
                                                        marginRight: 20,
                                                        marginTop: 10,
                                                        marginBottom: 10,
                                                        justifyContent: 'center',

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

export default MyFollowers;
