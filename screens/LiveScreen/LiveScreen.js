import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';

const LiveScreen = () => {
    const [isCameraPermissionGranted, setCameraPermissionGranted] = useState(null);
    const [isRecording, setRecording] = useState(false);

    const cameraRef = useRef(null);
    const recordingRef = useRef(new Audio.Recording());

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            const audioStatus = await Audio.requestPermissionsAsync();
            setCameraPermissionGranted(cameraStatus.status === 'granted');
            setAudioPermissionGranted(audioStatus.status === 'granted');
        })();
    }, []);

    const toggleRecording = async () => {
        if (isRecording) {
            try {
                await recordingRef.current.stopAndUnloadAsync();
                setRecording(false);
                // Handle the saved recording (recordingRef.current.getURI())
            } catch (error) {
                console.error('Error stopping recording:', error);
            }
        } else {
            try {
                await recordingRef.current.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                await recordingRef.current.startAsync();
                setRecording(true);
            } catch (error) {
                console.error('Error starting recording:', error);
            }
        }
    };

    if (isCameraPermissionGranted === null) {
        return <View><Text>Requesting camera permission...</Text></View>;
    }

    if (isCameraPermissionGranted === false) {
        return <View><Text>Camera permission denied. Please grant camera access in your device settings.</Text></View>;
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front} ref={cameraRef}>
                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={toggleRecording} style={{ alignSelf: 'center', marginBottom: 20 }}>
                        <Text style={{ fontSize: 20, color: isRecording ? 'red' : 'white' }}>
                            {isRecording ? 'Stop Recording' : 'Start Recording'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};

export default LiveScreen;
