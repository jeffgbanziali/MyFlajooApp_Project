import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories';
import Posts from '../../components/homepage/Posts';
import { POSTS } from '../../Data/MyPostUser';



const HomeScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Bonjour</Text>
            </View>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2828",

    }
});

export default HomeScreen;