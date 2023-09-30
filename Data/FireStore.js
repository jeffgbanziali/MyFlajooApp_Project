import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage,ref, uploadBytes,getDownloadURL } from 'firebase/storage';



const uploadImageToFirebase = async (localUri, imageName) => {
    const storage = getStorage();

    const storageRef = ref(storage, 'PostImages/' + imageName);
    await uploadBytes(storageRef, localUri);

    // Récupère l'URL de téléchargement de l'image
    const imageUrl = await getDownloadURL(storageRef);

    return imageUrl;
};

export { uploadImageToFirebase };


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
