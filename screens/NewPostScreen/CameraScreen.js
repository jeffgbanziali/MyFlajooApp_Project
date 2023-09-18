import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);


    const navigation = useNavigation();
    const handleClickReturnNewPost = () => {
        console.log("clicked")
        navigation.navigate('NewPostScreen');
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const toggleCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    const toggleFlashMode = () => {
        setFlash(
            flash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
        );
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const { uri } = await cameraRef.current.takePictureAsync();
                console.log('Photo taken:', uri);

                const asset = await MediaLibrary.createAssetAsync(uri);
                console.log('Photo enregistrée localement:', asset);

            } catch (error) {
                console.error('Erreur lors de la prise de la photo :', error);
            }
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>Pas d'accès à la caméra</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={type}
                flashMode={flash}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        height: "100%",
                        justifyContent: "space-between"

                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: "space-between",
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleClickReturnNewPost}
                            style={{
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: 30,
                                marginLeft: "3.5%",
                                marginTop: 50,
                            }}
                        >
                            <View>
                                <AntDesign name="arrowleft" size={25} color="white" style={{
                                    alignSelf: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    resizeMode: "contain"
                                }} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cameraActions}>
                            <TouchableOpacity
                                style={styles.cameraAction}
                                onPress={toggleCameraType}
                            >
                                <View style={styles.cameraActionText}>
                                    {type === Camera.Constants.Type.back ? <MaterialIcons name="flip-camera-android" size={24} color="white" /> : <MaterialIcons name="flip-camera-android" size={24} color="white" />}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cameraAction}
                                onPress={toggleFlashMode}
                            >
                                <Text style={styles.cameraActionText}>
                                    {flash === Camera.Constants.FlashMode.off ? <MaterialCommunityIcons name="flash" size={24} color="white" /> : <MaterialCommunityIcons name="flash-off" size={24} color="white" />}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        
                    >
                        <TouchableOpacity
                            style={styles.captureButton}
                            onPress={takePicture}
                        >
                            <View style={styles.captureButtonText}>
                                <AntDesign
                                    style={{
                                    }}
                                    name="camera" size={40} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Camera>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    cameraActions: {
        flexDirection: 'row',
        marginTop: 50,
        
    },
    cameraAction: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 100,
        marginLeft: "1.5%",
    },
    cameraActionText: {
        color: 'white',
    },
    captureButton: {
        alignSelf: 'center',
        display: 'flex',
        backgroundColor: 'gray',
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 100,
        marginBottom: 40,

    },
    captureButtonText: {
        color: 'white',
    },
});

export default CameraScreen;
