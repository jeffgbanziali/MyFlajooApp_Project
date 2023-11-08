import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

const VoiceCallAction = () => {

    const [isActiveSound, setIsActiveSound] = useState(true)
    const [isMicOn, setIsMicOn] = useState(true)

    const onToggleSound = () => {
        console.warn("onToggleSound")
        setIsMicOn(!isMicOn)
    }

    const onGoToVideoCall = () => {
        console.warn("Start a video call")
    }

    const onActiveSound = () => {
        console.warn("onToggleCamera")
        setIsActiveSound(!isActiveSound)
    }

    const onTogglePhone = () => {
        console.warn("phone off")
    }

    const onSetting = () => {
        console.warn("phone off")
    }


    return (
        <View
            style={{
                width: '100%',
                height: '9%',
                bottom: "2%",
                position: "absolute",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 6
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
                onPress={onGoToVideoCall}
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
                <FontAwesome5 name={"video"} size={26} color="white" />

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
                onPress={onActiveSound}
                style={{
                    width: 66,
                    height: 66,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isActiveSound ? "#2D2C2C" : "#6F6F6F",
                    opacity: isActiveSound ? 0.7 : 1
                }}
            >
                <Ionicons name="volume-high" size={35} color="white" />
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
    )
}

export default VoiceCallAction