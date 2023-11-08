import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as FileSystem from 'expo-file-system';

// ...

const uploadImageToFirebase = async (localUri, imageName) => {
    const storage = getStorage();
    const storageRef = ref(storage, 'PostImages/' + imageName);

    // Convertit l'image en blob
    const response = await fetch(localUri);
    const blob = await response.blob();

    // Télécharge le blob vers Firebase Storage
    await uploadBytes(storageRef, blob);

    // Récupère l'URL de téléchargement de l'image
    const imageUrl = await getDownloadURL(storageRef);

    return imageUrl;
};
const uploadStoryToFirebase = async (localUri, imageName) => {
    try {
        const storage = getStorage();
        const storageRef = ref(storage, 'StoryContainer/' + imageName);

        // Convertit l'image en blob
        const response = await fetch(localUri);
        const blob = await response.blob();

        // Télécharge le blob vers Firebase Storage en utilisant put
        const uploadTask = uploadBytes(storageRef, blob, { contentType: blob.type });

        // Gestion des événements de la tâche de téléchargement
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Progress: ${progress}%`);
            },
            (error) => {
                console.error('Error during upload:', error);
                throw new Error('Failed to upload file');
            },
            () => {
                // Téléchargement terminé avec succès, récupère l'URL de téléchargement
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File uploaded successfully:', downloadURL);
                    return downloadURL;
                });
            }
        );
    } catch (error) {
        console.error('Error during uploadStoryToFirebase:', error);
        throw new Error('Failed to upload file');
    }
};


const uploadRéelsToFirebase = async (localUri, fileName) => {
    try {
        const storage = getStorage();
        const storageRef = ref(storage, 'VideoRéelsContainer/' + fileName);

        console.log('Fetching blob from:', localUri);
        const response = await fetch(localUri);
        const blob = await response.blob();
        console.log('Blob fetched successfully:', blob);

        console.log('Uploading blob to Firebase Storage...');
        await uploadBytes(storageRef, blob);
        console.log('Blob uploaded successfully.');

        console.log('Getting download URL...');
        const mediaUrl = await getDownloadURL(storageRef);
        console.log('Download URL obtained:', mediaUrl);

        return mediaUrl;
    } catch (error) {
        console.error('Error during uploadRéelsToFirebase:', error);
        throw error;
    }
};



export { uploadImageToFirebase, uploadStoryToFirebase, uploadRéelsToFirebase };


const convertImageToArrayBuffer = async (localUri) => {
    try {
        const { uri } = await FileSystem.downloadAsync(localUri, FileSystem.documentDirectory + 'image.jpg');

        // Lit le fichier image en tant qu'ArrayBuffer
        const arrayBuffer = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

        // Convertit la chaîne Base64 en Uint8Array
        const buffer = new Uint8Array(arrayBuffer.length);
        for (let i = 0; i < arrayBuffer.length; i++) {
            buffer[i] = arrayBuffer.charCodeAt(i);
        }

        return buffer;
    } catch (error) {
        throw new Error(`Erreur lors de la conversion de l'image en ArrayBuffer : ${error.message}`);
    }
};

export { convertImageToArrayBuffer };




const firebaseConfig = {
    apiKey: "AIzaSyBrghzEzaaI_HgZbnRzKUlaHGNKizVF2aU",
    authDomain: "myflajooapp-15652.firebaseapp.com",
    projectId: "myflajooapp-15652",
    storageBucket: "myflajooapp-15652.appspot.com",
    messagingSenderId: "210714148369",
    appId: "1:210714148369:web:c2ab1fb38a1bbe53de7bb0",
    measurementId: "G-ZLPG5SHLYZ"
};

// Initialisez l'application Firebase
const app = initializeApp(firebaseConfig);

// Obtenez des références vers les services dont vous avez besoin
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
