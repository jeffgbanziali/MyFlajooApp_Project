import React from 'react';
import {  StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories';



const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2828",
        flex: 1
    }
});

export default HomeScreen;