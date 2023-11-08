import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const IncomingCall = () => {
    const userData = useSelector((state) => state.userReducer);

    const declineCall = () => {
        console.warn('on Decline')
    }
    const acceptCall = () => {
        console.warn('on Accept')
    }

    return (

        <>
            <View
                style={{
                    alignItems: 'center',
                    backgroundColor: "black",
                    opacity: 0.9,
                    width: '100%',
                    height: '100%',
                }}>
                <Image
                    source={{ uri: userData.picture || "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png" }}
                    style={{
                        height: '100%',
                        width: '100%',

                    }} />
            </View>
            <SafeAreaView
                style={{
                    width: '100%',
                    height: '100%',
                    position: "absolute",
                    alignItems: 'center',
                    zIndex: 1
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: "space-between",
                        zIndex: 2
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            height: '20%',
                            marginTop: "10%",
                            zIndex: 4
                        }}

                    >
                        <View
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 40,
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                            >
                                {userData.pseudo}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginTop: "2%",
                                    color: "white"
                                }}
                            >
                                Flajoooooooo Video...
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: '20%',
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-around",
                            zIndex: 2
                        }}

                    >
                        <TouchableOpacity
                            onPress={declineCall}
                            style={{
                                width: 100,
                                height: 100,
                                alignItems: 'center',
                                justifyContent: "center",
                                borderRadius: 100,
                                backgroundColor: "red"
                            }}
                        >
                            <MaterialCommunityIcons name="phone-hangup" size={50} color="white" />

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={acceptCall}
                            style={{
                                width: 100,
                                height: 100,
                                alignItems: 'center',
                                justifyContent: "center",
                                borderRadius: 100,
                                backgroundColor: "green"
                            }}
                        >
                            <FontAwesome5 name="phone-alt" size={40} color="white" />
                        </TouchableOpacity>

                    </View>
                </View>


            </SafeAreaView >
        </>

    )
}

export default IncomingCall