import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from "../Context/AppContext"
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign, Entypo, Feather, Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { collection, addDoc, getDoc, } from 'firebase/firestore';
import { firestore, uploadRéelsToFirebase } from '../../Data/FireStore';
import * as ImagePicker from 'expo-image-picker';
import { Modal } from 'react-native';
import { Video } from 'expo-av';
import { addVideoReels, getVideoReels } from '../../actions/réels.action';


const CreateRéels = () => {
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showImage, setShowImage] = useState(false);
    const [showText, setShowText] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const [galleryMedia, setGalleryMedia] = useState([]);
    const navigation = useNavigation();
    const { isDarkMode } = useDarkMode();
    const [loadVideo, setLoadVideo] = useState(true);
    const [addText, setAddText] = useState(false);




    useEffect(() => {
        if (loadVideo) {
            dispatch(getVideoReels());
            setLoadVideo(false);
        }
    }, [loadVideo, dispatch]);


    const handleClickReturnHome = () => {
        navigation.navigate('TabNavigation');
        setLoadVideo(true);

    };


    const handleSumbitRéels = async () => {
        try {
            let mediaUrl = null;

            if (selectedVideo && selectedVideo.uri) {
                const mediaName = `video-${Date.now()}.${selectedVideo.assets[0].uri.split('.').pop()}`;
                mediaUrl = await uploadRéelsToFirebase(selectedVideo.uri, mediaName);
            }

            const réelsData = {
                posterId: userData._id,
                description: postText,
                videoPath: mediaUrl
            };

            // Utilise le dispatch pour ajouter la vidéo au store Redux
            dispatch(addVideoReels(réelsData));

            // Ajoute le document à la collection "videoRéels" dans ta base de données
            const docRef = await addDoc(collection(firestore, 'videoRéels'), réelsData);
            const docSnapshot = await getDoc(docRef);

            console.log('Vidéo créée avec succès! Document ID:', docRef.id);
            console.log('Document data:', docSnapshot.data());
            Alert.alert('Succès', 'Votre vidéo a été publiée avec succès !');
            setSelectedVideo(null);
            setLoadVideo(true);
            navigation.goBack('TabNavigation');
        } catch (error) {
            console.error('Erreur lors de la création de la vidéo :', error);

            let errorMessage = 'Une erreur s\'est produite lors de la création de la vidéo.';

            if (error.message) {
                errorMessage = error.message;
            } else if (error.response && error.response.data && error.response.data.errors) {
                errorMessage = Object.values(error.response.data.errors).join('\n');
            }

            Alert.alert('Erreur', errorMessage);
        }
    };





    const handleModalImage = async (item) => {
        try {
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            if (status !== 'granted') {
                Alert.alert('Permission refusée', 'La permission d\'accès à la bibliothèque de médias est requise.');
            } else {
                console.log('Permission accordée. Type de média :', item.mediaType);

                if (item.mediaType === 'video') {
                    console.log('C\'est une vidéo. Sélection de la vidéo :', item);
                    setSelectedVideo(item);
                    setSelectedImage(null);
                } else {
                    console.log('C\'est une image. Sélection de l\'image :', item);
                    setSelectedImage(item);
                    setSelectedVideo(null);
                }

                setShowImage(true);
            }
        } catch (error) {
            console.error('Erreur lors de la sélection de l\'élément multimédia :', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite lors de la sélection de l\'élément multimédia.');
        }
    };


    const closeImageModal = () => {
        setShowImage(false);
    };
    const handleText = () => {
        setShowText(!showText);
    };

    const closeModalText = () => {
        setShowText(false);
    };

    const goCamera = () => {
        console.log('camera');
        navigation.navigate("StoryCamera")
    }

    const selectVideo = async () => {
        try {
            console.log('Demande d\'autorisation...');
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== 'granted') {
                console.log('Autorisation refusée');
                Alert.alert('Permission refusée', 'La permission d\'accès à la bibliothèque de médias est requise.');
            } else {
                console.log('Autorisation accordée, ouverture de la bibliothèque de médias...');
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });

                if (!result.canceled) {
                    setSelectedVideo(result);
                    setShowImage(true);
                    console.log('Image sélectionnée :', result);

                } else {
                    console.log('Sélection d\'image annulée');
                }
            }
        } catch (error) {
            console.error('Erreur lors de la sélection de la video :', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite lors de la sélection de l\'image.');
        }
    };



    const handlePress = () => {
        setAddText(!addText);
    };





    return (

        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? "#171717" : "white",
                    position: "relative",

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 50,
                        borderBottomWidth: 1,
                        borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
                        padding: 6
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity
                            onPress={handleClickReturnHome}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: 30,
                                marginLeft: "3.5%"
                            }}>
                            <View>
                                <AntDesign
                                    name="arrowleft"
                                    size={25}
                                    color={isDarkMode ? "#F5F5F5" : "black"}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: isDarkMode ? "#F5F5F5" : "black",
                                marginLeft: "3.5%",
                                alignSelf: 'center'
                            }}>
                            Create Your Réels
                        </Text>

                    </View>
                    <Image
                        source={{
                            uri: userData.picture
                        }}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100
                        }} />

                </View>

                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 10
                }}>

                    <TouchableOpacity
                        onPress={handleText}
                        style={{
                            width: 100,
                            height: 120,
                            backgroundColor: "#4C1854",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",

                        }}>
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "blue",
                                borderRadius: 100,
                            }}
                        >
                            <FontAwesome5 name="video" size={24} color="white" />
                        </View>
                        <Text
                            style={{
                                color: isDarkMode ? "#F5F5F5" : "white",
                                fontSize: 14,
                                marginTop: 10,
                            }}
                        >
                            Camera
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 100,
                            height: 120,
                            backgroundColor: "#7D5C96",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "green",
                                borderRadius: 100,
                            }}>
                            <Feather name="music" size={24} color="white" />
                        </View>
                        <Text
                            style={{
                                color: isDarkMode ? "#F5F5F5" : "white",
                                fontSize: 16,
                                marginTop: 10,

                            }}
                        >
                            Music
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={goCamera}
                        style={{
                            width: 100,
                            height: 120,
                            backgroundColor: "#8C1616",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#340B3A",
                                borderRadius: 100,
                            }}
                        >
                            <Entypo
                                name="adjust"
                                size={30}
                                color={isDarkMode ? "#F5F5F5" : "#F5F5F5"}
                            />
                        </View>
                        <Text
                            style={{
                                color: isDarkMode ? "#F5F5F5" : "white",
                                marginTop: 10,

                                fontSize: 16
                            }}
                        >
                            Effects
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={goCamera}
                        style={{
                            width: 100,
                            height: 120,
                            backgroundColor: "#E5A708",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center"

                        }}>
                        <View
                            style={{
                                width: 60,
                                height: 60,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "yellow",
                                borderRadius: 100,
                            }}
                        >
                            <Feather name="smile" size={24} color="black" />
                        </View>
                        <Text
                            style={{
                                color: isDarkMode ? "#F5F5F5" : "white",
                                marginTop: 10,

                                fontSize: 16
                            }}
                        >
                            Selfie
                        </Text>

                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        height: "100%",
                        marginTop: 10,
                        flexDirection: "column",
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: "6%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                width: "30%",
                                justifyContent: "center",
                                padding: 10,
                                borderRadius: 10,
                                marginLeft: "4%",


                            }} >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: '300',
                                    color: isDarkMode ? "#F5F5F5" : "black",
                                    marginLeft: "3.5%",
                                    alignSelf: 'center'
                                }}>
                                Pellicule
                            </Text>
                            <View
                                style={{
                                    marginLeft: 4
                                }}
                            >
                                <MaterialIcons
                                    name="keyboard-arrow-down"
                                    size={24}
                                    color="black" />
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={selectVideo}
                            style={{
                                flexDirection: "row",
                                width: "45%",
                                justifyContent: "center",
                                marginRight: "4%",
                                padding: 8,
                                borderRadius: 20,
                                borderWidth: isDarkMode ? 1 : 2,
                                borderColor: isDarkMode ? "#F5F5F5" : "lightgray",

                            }} >
                            <View
                                style={{
                                    marginLeft: 4,

                                }}
                            >
                                <AntDesign
                                    name="picture"
                                    size={24}
                                    color={isDarkMode ? "#F5F5F5" : "black"}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '300',
                                    color: isDarkMode ? "#F5F5F5" : "black",
                                    marginLeft: "3.5%",
                                    alignSelf: 'center'
                                }}>
                                Multiple choices
                            </Text>


                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <FlatList
                            data={galleryMedia}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleModalImage(item)}
                                    style={{
                                        width: '30%',
                                        aspectRatio: 0.7,
                                        margin: '1%',
                                        borderRadius: 10,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image
                                        source={{ uri: item.uri }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </TouchableOpacity>
                            )}
                            numColumns={3}
                        />

                    </View>
                </View>

            </View>


            <Modal
                visible={showImage}
                transparent={true}
                animationType="slide"
                onRequestClose={closeImageModal}
            >
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    backgroundColor: isDarkMode ? "red" : "black",
                }}>
                    <View
                        style={{
                            width: "100%",
                            height: 40,
                            marginTop: "12%",
                            justifyContent: "center",
                            position: "absolute",
                            zIndex: 2,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "2%",
                            }}
                            onPress={closeImageModal}
                        >
                            <Entypo name="cross" size={36} color="white" />
                        </TouchableOpacity>
                    </View>

                    {selectedVideo && (
                        console.log('Selected Video URI:', selectedVideo.uri),


                        <Video
                            source={{ uri: selectedVideo.uri }}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            width="100%"
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode="cover"
                            shouldPlay
                            isLooping
                            onError={(error) => console.error('Erreur de lecture de la vidéo :', error)}
                        />

                    )}

                    <View
                        style={{
                            width: "100%",
                            height: "20%",
                            marginTop: "20%",
                            alignItems: "flex-end",
                            position: "absolute",
                            zIndex: 1,
                        }}
                    >
                        <TouchableOpacity
                            onPress={handlePress}
                            style={{
                                width: "25%",
                                justifyContent: "space-around",
                                alignItems: "center",
                                marginRight: "2%",
                                flexDirection: "row",
                                padding: 12,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: isDarkMode ? "#F5F5F5" : "#F5F5F5",
                                    marginRight: 12,
                                    fontWeight: "600",
                                }}
                            >
                                Text
                            </Text>
                            <Ionicons
                                name="text"
                                size={30}
                                color={isDarkMode ? "#F5F5F5" : "#F5F5F5"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "25%",
                                justifyContent: "space-around",
                                alignItems: "center",
                                marginRight: "2%",
                                marginTop: "2%",
                                flexDirection: "row",
                                padding: 12,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: isDarkMode ? "#F5F5F5" : "#F5F5F5",
                                    marginRight: 12,
                                    fontWeight: "600",
                                }}
                            >
                                Song
                            </Text>
                            <Ionicons
                                name="ios-musical-notes"
                                size={30}
                                color={isDarkMode ? "#F5F5F5" : "#F5F5F5"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "30%",
                                justifyContent: "space-around",
                                alignItems: "center",
                                marginRight: "2%",
                                marginTop: "2%",
                                flexDirection: "row",
                                padding: 12,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: isDarkMode ? "#F5F5F5" : "#F5F5F5",
                                    marginRight: 12,
                                    fontWeight: "600",
                                }}
                            >
                                Effects
                            </Text>
                            <Entypo
                                name="adjust"
                                size={30}
                                color={isDarkMode ? "#F5F5F5" : "#F5F5F5"}
                            />
                        </TouchableOpacity>
                    </View>
                    {addText && (
                        <View
                            style={{
                                width: "100%",
                                height: "20%",
                                backgroundColor: "red",
                                position: "absolute",
                                justifyContent: "center",
                                padding: 5,
                                bottom: "20%",
                            }}
                        >
                            <TextInput
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    paddingLeft: 12,
                                    fontSize: 10,
                                    fontWeight: "normal",
                                    overflow: "hidden",
                                    color: "white",
                                }}
                                multiline
                                numberOfLines={4}
                                maxLength={40}
                                value={postText}
                                onChangeText={(text) => setPostText(text)}
                                editable
                                placeholder="Leave a short text..."
                                placeholderTextColor={isDarkMode ? "#F5F5F5" : "white"}
                                fontSize="20"
                                color={isDarkMode ? "#F5F5F5" : "white"} />
                        </View>
                    )}
                    <View
                        style={{
                            width: "100%",
                            height: "10%",
                            bottom: "5%",
                            position: "absolute",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            paddingRight: 14,
                            zIndex: 1,
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleSumbitRéels}
                            style={{
                                width: "14%",
                                height: "60%",
                                backgroundColor: "#80BCF3",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                                borderRadius: 100,
                                flexDirection: "row",
                                zIndex: 1,
                            }}
                        >
                            <Ionicons
                                name="ios-send"
                                size={30}
                                color={isDarkMode ? "#F5F5F5" : "#F5F5F5"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


        </>


    );
};

export default CreateRéels;
