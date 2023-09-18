import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts } from '../../actions/post.actions';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';

const NewPostScreen = () => {
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const navigation = useNavigation();
    const handleClickReturnHome = () => {
        console.log("clicked")
        navigation.navigate('HomeScreen');
    }
    const handleTakePicture = () => {
        console.log("clicked")
        navigation.navigate('Photo');
    }
    const handleStartLive = () => {
        console.log("clicked")
        navigation.navigate('Live');
    }

    const handlePostSubmit = async () => {
        if (postText.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer du texte pour votre post.');
            return;
        }

        const postId = {
            message: postText,
            image: selectedImage, // Ajoutez l'objet d'image sélectionnée dans votre post
        };

        try {
            await dispatch(addPosts(postId));
            Alert.alert('Succès', 'Votre post a été publié avec succès !');
            setPostText('');
            setSelectedImage(null); // Réinitialisez l'image sélectionnée après la publication
        } catch (error) {
            console.error('Erreur lors de la création du post :', error);
            let errorMessage = 'Une erreur s\'est produite lors de la création du post.';

            if (error.response && error.response.data && error.response.data.errors) {
                errorMessage = Object.values(error.response.data.errors).join('\n');
            }

            Alert.alert('Erreur', errorMessage);
        }
    };

    const selectImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission refusée', 'La permission d\'accès à la bibliothèque de médias est requise.');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setSelectedImage(result);
            }
        } catch (error) {
            console.error('Erreur lors de la sélection de l\'image :', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite lors de la sélection de l\'image.');
        }
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#2C2828',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 50,
                    borderBottomWidth: 2,
                    borderBottomColor: '#5F5858',
                    padding: 6,
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        onPress={handleClickReturnHome}
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: 30,
                            marginLeft: "3.5%",
                        }}
                    >
                        <View>
                            <AntDesign name="arrowleft" size={25} color="#5F5858" style={{
                                alignSelf: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                resizeMode: "contain"
                            }} />
                        </View>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "black",
                            marginLeft: "3.5%",
                            alignSelf: 'center',
                        }}

                    >
                        Create a new post

                    </Text>
                </View>
                <TouchableOpacity
                    onPress={handlePostSubmit}
                >
                    <View
                        style={{
                            marginRight: "3.5%",
                            width: 100,
                            height: 40,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            backgroundColor: 'lightblue',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: "white",
                            }}
                        >
                            Add a post
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    flex: 1,
                    width: "100%",

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginLeft: "3.5%",
                    }}

                >

                    <View
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 100,
                        }}

                    >
                        <Image
                            source={
                                {
                                    uri: userData.picture
                                }
                            }
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 100,
                            }}
                        />

                    </View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "black",
                            marginLeft: "3.5%",
                        }}
                    >
                        {userData.pseudo}
                    </Text>
                </View>

                <View
                    style={{
                        marginTop: 20,
                        backgroundColor: '#2C2828'
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: "40%",
                            borderBottomWidth: 1,
                            borderColor: '#5F5858',
                        }}
                    >
                        <TextInput
                            multiline
                            placeholder="Write your post here..."
                            value={postText}
                            onChangeText={text => setPostText(text)}
                            style={{
                                height: 100,
                                width: "100%",
                                borderRadius: 10,
                                marginLeft: "3.5%",
                                fontSize: 25,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 2,
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleTakePicture}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: 60,
                                    width: "100%",
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: '#5F5858',
                                }}
                            >
                                <AntDesign
                                    style={{
                                        marginLeft: "1.5%",
                                    }}
                                    name="camera" size={30} color="blue" />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'semibold',
                                        color: "black",
                                        marginLeft: "1.5%",
                                        alignSelf: 'center',
                                    }}
                                >Take a Picture / Video</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectImage}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: 60,
                                    width: "100%",
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: '#5F5858',
                                }}
                            >
                                <Ionicons
                                    style={{
                                        marginLeft: "1.5%",
                                    }}
                                    name="image" size={30} color="green" />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'semibold',
                                        color: "black",
                                        marginLeft: "1.5%",
                                        alignSelf: 'center',
                                    }}
                                >Add a Picture / Video</Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleStartLive}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: 60,
                                    width: "100%",
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: '#5F5858',
                                }}
                            >
                                <FontAwesome
                                    style={{
                                        marginLeft: "1.5%",
                                    }}
                                    name="video-camera" size={30} color="red" />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'semibold',
                                        color: "black",
                                        marginLeft: "1.5%",
                                        alignSelf: 'center',
                                    }}
                                >
                                    Start a live
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                    {selectedImage && (
                        <Image
                            source={{ uri: selectedImage.uri }}
                            style={{ width: 200, height: 200 }}
                        />
                    )}

                </View>


            </View>

        </View>
    );
};

export default NewPostScreen;
