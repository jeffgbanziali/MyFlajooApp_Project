import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';

const StoryCamera = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);


    const navigation = useNavigation();
    const handleClickReturnStoryCreate = () => {
        console.log("clicked")
        navigation.navigate('StoryCreate');
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
                            height: "42%",
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleClickReturnStoryCreate}
                            style={{
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: 30,
                                marginLeft: "4.5%",
                                marginTop: 50,
                            }}
                        >
                            <View>
                                <AntDesign name="arrowleft"
                                    size={25} color="white" style={{
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
                                    {type === Camera.Constants.Type.back ? <MaterialIcons name="flip-camera-android" size={30} color="white" /> : <MaterialIcons name="flip-camera-android" size={30} color="white" />}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cameraAction}
                                onPress={toggleFlashMode}
                            >
                                <Text style={styles.cameraActionText}>
                                    {flash === Camera.Constants.FlashMode.off ? <MaterialCommunityIcons name="flash" size={30} color="white" /> : <MaterialCommunityIcons name="flash-off" size={30} color="white" />}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.cameraAction}

                            >
                                <Entypo name="time-slot" size={30} color="white" />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cameraAction}

                            >
                                <Entypo
                                    name="adjust"
                                    size={30}
                                    color="#F5F5F5"
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cameraAction}

                            >
                                <Ionicons
                                    name="musical-notes"
                                    size={30} color="#F5F5F5" />

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
        flexDirection: 'column',
        marginTop: 40,
        justifyContent: 'space-around',
        marginRight: "4.5%",

    },
    cameraAction: {
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

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

export default StoryCamera;
