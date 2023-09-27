import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const CreateStory = () => {
    const [storyText, setStoryText] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [cameraPermission, setCameraPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        // Demander la permission d'accéder à la caméra au chargement du composant.
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setCameraPermission(status === 'granted');
        })();
    }, []);

    const handleChooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            setSelectedImage(result.uri);
        }
    };

    const handleTakePhoto = async () => {
        if (cameraPermission) {
            const { uri } = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
            setSelectedImage(uri);
        }
    };

    const handleCreateStory = () => {
        // Ajoutez ici la logique pour enregistrer l'histoire avec le texte et l'image sélectionnée.
        console.log('Nouvelle histoire créée :', storyText);
        console.log('Image sélectionnée :', selectedImage);
        // Réinitialisez le texte et l'image après la création.
        setStoryText('');
        setSelectedImage(null);
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            }}
        >
            <Text>Create Your Story</Text>
            <TextInput
                placeholder="Saisissez votre histoire ici"
                value={storyText}
                onChangeText={(text) => setStoryText(text)}
                multiline={true}
            />
            <Button title="Ajouter une image depuis la galerie" onPress={handleChooseImage} />
            <Button title="Prendre une photo" onPress={handleTakePhoto} />
            {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
            <Button title="Créer l'histoire" onPress={handleCreateStory} />
        </View>
    );
};

export default CreateStory;
