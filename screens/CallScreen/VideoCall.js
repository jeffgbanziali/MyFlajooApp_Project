import { View, Text, Image, } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import VideoCallAction from '../../components/CallingComponent.js/VideoCallAction';
import { useNavigation, useRoute } from '@react-navigation/native';


const VideoCall = () => {
    const userData = useSelector((state) => state.userReducer);

    const navigation = useNavigation();
    const route = useRoute()

    const { user } = route.params

    console.log("il est là ", user)

    const handleGoBack = () => {
        console.warn('GoBack');
        navigation.pop()
    }
    return (

        <>
            <View
                style={{
                    alignItems: 'center',
                    backgroundColor: "black",
                    opacity: 0.8,
                    width: '100%',
                    height: '100%',
                }}>
                <Image
                    source={{ uri: user.picture ? user.picture : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png" }}

                    style={{
                        height: '100%',
                        width: '100%',
                        opacity: 0.5,

                    }} />
            </View>

            <View
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
                        height: '20%',
                        marginTop: "16%",
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
                                color: "white"
                            }}
                        >
                            {user.pseudo}
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                marginTop: "2%",
                                color: "white"
                            }}
                        >
                            flajooooo calling...
                        </Text>
                    </View>
                </View>
                <VideoCallAction />
            </View>
        </>

    )
}

export default VideoCall