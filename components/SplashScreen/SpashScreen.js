// SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const animationDuration = 3000;

    useEffect(() => {
        Animated.parallel([
            // Animation de rotation pendant le chargement
            Animated.timing(spinValue, {
                toValue: 1,
                duration: animationDuration,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            // Animation de redimensionnement une fois le chargement terminé
            Animated.timing(scaleValue, {
                toValue: 1.5,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start(() => {
            // Navigue vers la page principale // Remplace 'Main' par le nom de ta page principale
        });
    }, [navigation, spinValue, scaleValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../assets/Logos/my_flajoo2.jpeg')}
                style={[styles.logo, { transform: [{ rotate: spin }, { scale: scaleValue }] }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
