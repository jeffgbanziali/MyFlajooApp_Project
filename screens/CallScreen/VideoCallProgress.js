import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import VideoCallAction from '../../components/CallingComponent.js/VideoCallAction'

const VideoCallProgress = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "red"
            }}
        >
            <View
                style={{
                    width: 120,
                    height: 180,
                    backgroundColor: "blue",
                    position: "absolute",
                    right: 10,
                    top: "10%",
                    borderRadius: 20
                }}
            >

            </View>
            <VideoCallAction />

        </View>


    )
}

export default VideoCallProgress