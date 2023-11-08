import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";


const VideoCallAction = () => {

    const [isCameraOn, setIsCameraOn] = useState(true)
    const [isMicOn, setIsMicOn] = useState(true)

    const onToggleSound = () => {
        console.warn("onToggleSound")
        setIsMicOn(!isMicOn)
    }

    const onReverseCamera = () => {
        console.warn("onReverseCamera")
    }

    const onToggleCamera = () => {
        console.warn("onToggleCamera")
        setIsCameraOn(!isCameraOn)
    }

    const onTogglePhone = () => {
        console.warn("phone off")
    }

    const onSetting = () => {
        console.warn("phone off")
    }


    const handleGoBack = () => {
        console.warn('GoBack');
        navigation.pop()
    }


    return (
        <View
            style={{
                width: '100%',
                height: '20%',
                bottom: 0,
                position: "absolute",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1C1C1E",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,

            }}

        >
            <View
                style={{
                    height: '25%',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >

                <TouchableOpacity
                    style={{
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <MaterialIcons name="keyboard-arrow-up" size={50} color="#3A3837" />

                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: '100%',
                    height: '40%',
                    justifyContent: "space-around",
                    flexDirection: "row",
                }}
            >
                <TouchableOpacity
                    onPress={onToggleSound}
                    style={{
                        width: 66,
                        height: 66,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2D2C2C",
                        opacity: 0.7
                    }}
                >
                    <FontAwesome5 name={isMicOn ? "microphone" : "microphone-slash"} size={26} color="white" />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onToggleCamera}
                    style={{
                        width: 66,
                        height: 66,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2D2C2C",
                        opacity: 0.7
                    }}
                >
                    <FontAwesome5 name={isCameraOn ? "video" : "video-slash"} size={26} color="white" />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onTogglePhone}
                    style={{
                        width: 120,
                        height: 64,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "red"
                    }}
                >
                    <MaterialCommunityIcons name="phone-hangup" size={40} color="white" />

                </TouchableOpacity>
                <TouchableOpacity
                    onLongPress={onReverseCamera}
                    style={{
                        width: 66,
                        height: 66,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2D2C2C",
                        opacity: 0.7
                    }}
                >
                    <Ionicons name="ios-camera-reverse" size={34} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onSetting}
                    style={{
                        width: 66,
                        height: 66,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2D2C2C",
                        opacity: 0.7
                    }}
                >
                    <Entypo name="dots-three-horizontal" size={33} color="white" />

                </TouchableOpacity>
            </View>



        </View>
    )
}

export default VideoCallAction