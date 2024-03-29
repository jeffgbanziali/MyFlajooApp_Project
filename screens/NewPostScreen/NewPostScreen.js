import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPosts, getPosts } from '../../actions/post.actions';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { uploadImageToFirebase } from '../../Data/FireStore';
import { collection, addDoc, getDoc } from 'firebase/firestore';
import { firestore } from '../../Data/FireStore';
import { useDarkMode } from '../../components/Context/AppContext';

const NewPostScreen = () => {
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const [loadPost, setLoadPost] = useState(true);
    const { isDarkMode } = useDarkMode();


    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts());
            setLoadPost(false);
        }
    }, [loadPost, dispatch]);
    const handleClickReturnHome = () => {
        navigation.navigate('TabNavigation');
    };
    const handleTakePicture = () => {
        navigation.navigate('Photo');
    };


    const handlePostSubmit = async () => {
        if (postText.trim() === '') {
            Alert.alert('Erreur', 'Veuillez entrer du texte pour votre post.');
            return;
        }

        const postData = {
            posterId: userData._id,
            message: postText,
            imageFileName: null,
        };

        try {
            if (selectedImage) {
                const imageName = `image-${Date.now()}.${selectedImage.uri.split('.').pop()}`;
                const imageUrl = await uploadImageToFirebase(selectedImage.uri, imageName);
                postData.imageFileName = imageUrl;
            }

            // Utilise le dispatch pour ajouter le post au store Redux
            dispatch(addPosts(postData));

            // Ajoute le document à la collection "posts" dans Firestore
            const docRef = await addDoc(collection(firestore, 'posts'), postData);
            const docSnapshot = await getDoc(docRef);

            console.log('Post créé avec succès! Document ID:', docRef.id);
            console.log('Document data:', docSnapshot.data());
            Alert.alert('Succès', 'Votre post a été publié avec succès !');
            setPostText('');
            setSelectedImage(null);
            setLoadPost(true);
            navigation.goBack('TabNavigation');
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
            } else {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });

                if (!result.canceled) {
                    setSelectedImage(result);
                }
            }
        } catch (error) {
            console.error('Erreur lors de la sélection de l\'image :', error);
            Alert.alert('Erreur', 'Une erreur s\'est produite lors de la sélection de l\'image.');
        }
    };

    return (
        <View style={{
            flex: 1, backgroundColor: isDarkMode ? "#171717" : "white",
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 50,
                    borderBottomWidth: 2,
                    borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
                    padding: 6
                }}>
                <View
                    style={{
                        flexDirection:
                            'row', alignItems:
                            'center'
                    }}>
                    <TouchableOpacity
                        onPress={handleClickReturnHome}
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
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
                                style={{
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
                            color: isDarkMode ? "#F5F5F5" : "black",
                            marginLeft: "3.5%",
                            alignSelf: 'center'
                        }}>
                        Create a new post
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={handlePostSubmit}>
                    <View
                        style={{
                            marginRight: "3.5%",
                            width: 100,
                            height: 40,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            backgroundColor: isDarkMode ? "lightblue" : "blue",
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: "white"
                            }}>
                            Add a post
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                width: "100%"
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: "3.5%"
                }}>
                    <View style={{
                        width: 70,
                        height: 70,
                        borderRadius: 100
                    }}>
                        <Image
                            source={{
                                uri: userData.picture
                            }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 100
                            }} />
                    </View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: isDarkMode ? "#F5F5F5" : "black",
                        marginLeft: "3.5%"
                    }}>
                        {userData.pseudo}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flex: 1,
                        backgroundColor: isDarkMode ? "#171717" : "white",
                    }}>
                    <View style={{
                        width: "100%",
                        height: "40%",
                        borderBottomWidth: 1,
                        borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
                    }}>
                        <TextInput
                            multiline placeholder="Write your post here..."
                            value={postText}
                            onChangeText={text => setPostText(text)}
                            style={{
                                height: 100,
                                width: "100%",
                                borderRadius: 10,
                                marginLeft: "3.5%",
                                fontSize: 25
                            }} />
                    </View>
                    <View style={{ marginTop: 2 }}>
                        <TouchableOpacity onPress={handleTakePicture}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 60, width: "100%",
                                alignItems: 'center',
                                backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
                                backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',
                                borderBottomWidth: 1,
                                borderColor: isDarkMode ? "#F5F5F5" : "lightgray",

                            }}>
                                <AntDesign
                                    style={{ marginLeft: "1.5%" }}
                                    name="camera" size={30} color="blue" />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'semibold',
                                        color: isDarkMode ? "#F5F5F5" : "black",
                                        marginLeft: "1.5%",
                                        alignSelf: 'center'
                                    }}>
                                    Take a Picture / Video
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={selectImage}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center', height: 60,
                                    width: "100%", alignItems: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
                                    backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
                                    backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',

                                }}>
                                <Ionicons
                                    style={{ marginLeft: "1.5%" }}
                                    name="image" size={30}
                                    color="green" />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'semibold',
                                        color: isDarkMode ? "#F5F5F5" : "black",
                                        marginLeft: "1.5%",
                                        alignSelf: 'center'
                                    }}>Add a Picture / Video</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={selectImage}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    height: 60, width: "100%",
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    backgroundColor: isPressed ? "#F5F5F5" : "#FFFFFF",
                                    backgroundColor: isDarkMode ? '#0D0C0C' : '#F3F2F2',
                                    borderColor: isDarkMode ? "#F5F5F5" : "lightgray",
                                }}>
                                <FontAwesome
                                    style={{ marginLeft: "1.5%" }}
                                    name="video-camera"
                                    size={30}
                                    color="red" />
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'semibold',
                                    color: isDarkMode ? "#F5F5F5" : "black",
                                    marginLeft: "1.5%",
                                    alignSelf: 'center'
                                }}>
                                    Start a live
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {selectedImage && (
                        <Image
                            source={{ uri: selectedImage.uri }}
                            style={{ width: 200, height: 200 }} />
                    )}
                </View>
            </View>
        </View>
    );
};

export default NewPostScreen;
