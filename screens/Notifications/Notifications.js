import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createPeerConnection, addStream, start, stop } from "expo-av";

const Notifications = () => {
    const [peerConnection, setPeerConnection] = useState(null);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);

    const handleStartCall = async () => {
        // Créez un flux audio et vidéo local
        const localStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });

        // Créez une connexion pair-à-pair
        const peerConnection = await createPeerConnection();

        // Ajoutez le flux audio et vidéo local à la connexion pair-à-pair
        await addStream(peerConnection, localStream);

        // Démarrez l'appel
        start(peerConnection);

        // Mettez à jour les états
        setLocalStream(localStream);
        setPeerConnection(peerConnection);
    };

    const handleStopCall = () => {
        // Arrêtez l'appel
        stop(peerConnection);

        // Mettez à jour les états
        setLocalStream(null);
        setPeerConnection(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Appel audio/video</Text>

            {peerConnection && (
                <View style={styles.callContainer}>
                    <View style={styles.localStreamContainer}>
                        <Text>Flux local</Text>
                        <Video
                            style={styles.localStream}
                            source={localStream}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.remoteStreamContainer}>
                        <Text>Flux distant</Text>
                        <Video
                            style={styles.remoteStream}
                            source={remoteStream}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            )}

            <Button
                title="Démarrer l'appel"
                onPress={handleStartCall}
            />
            <Button
                title="Arrêter l'appel"
                onPress={handleStopCall}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    callContainer: {
        width: 200,
        height: 200,
    },
    localStreamContainer: {
        flex: 1,
    },
    localStream: {
        width: "100%",
        height: "100%",
    },
    remoteStreamContainer: {
        flex: 1,
    },
    remoteStream: {
        width: "100%",
        height: "100%",
    },
});

export default Notifications;
