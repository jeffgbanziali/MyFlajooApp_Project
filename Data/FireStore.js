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

export { uploadImageToFirebase };


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
