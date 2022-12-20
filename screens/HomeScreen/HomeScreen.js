import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories';
import Posts from '../../components/homepage/Posts';
import { POSTS } from '../../Data/MyPostUser';



const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Posts post={post} key={index} />
                ))}

            </ScrollView>

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