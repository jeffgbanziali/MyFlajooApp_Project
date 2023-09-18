import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Animated,
} from 'react-native';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories/Stories';
import Thread from '../../components/Thread/Thread';

const HomeScreen = () => {
    const [borderColor, setBorderColor] = useState('gray');
    const headerTranslateY = new Animated.Value(-200); // Définissez la valeur initiale à -threshold
    const threshold = 200; // Réglez la valeur du seuil en pixels pour déclencher l'animation

    useEffect(() => {
        // Démarrez le délai pour l'animation
        setTimeout(() => {
            // Définissez l'animation de l'en-tête en fonction du défilement
            Animated.timing(headerTranslateY, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }, 3000); // 3000 millisecondes (3 secondes)
    }, []);

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView
                    onScroll={(event) => {
                        const offsetY = event.nativeEvent.contentOffset.y;
                        setBorderColor(
                            offsetY > threshold ? 'gray' : '#2C2828'
                        );
                    }}
                    scrollEventThrottle={16}
                >
                    <Animated.View
                        style={[
                            styles.header,
                            {
                                borderBottomColor: borderColor,
                                transform: [
                                    {
                                        translateY: headerTranslateY.interpolate({
                                            inputRange: [-threshold, 0, threshold],
                                            outputRange: [-threshold, 0, -threshold],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        <Header />
                    </Animated.View>
                    <Stories />
                    <Thread />
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C2828',
        flex: 1,
    },
    header: {
        position: 'relative',
        zIndex: 1,
    },
});

export default HomeScreen;
