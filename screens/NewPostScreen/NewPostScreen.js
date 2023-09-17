import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPosts } from '../../actions/post.actions';
import * as ImagePicker from 'expo-image-picker';

const NewPostScreen = () => {
    const [postText, setPostText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();

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
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 10,
            }}
        >
            <Text>Saisissez votre nouveau post :</Text>
            <TextInput
                multiline
                placeholder="Écrivez votre post ici..."
                value={postText}
                onChangeText={text => setPostText(text)}
            />
            <TouchableOpacity onPress={selectImage}>
                <Text>Ajouter une image</Text>
            </TouchableOpacity>
            {selectedImage && (
                <Image
                    source={{ uri: selectedImage.uri }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            <Button title="Publier" onPress={handlePostSubmit} />
        </View>
    );
};

export default NewPostScreen;
