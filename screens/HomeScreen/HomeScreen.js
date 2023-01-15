import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories';
import Posts from '../../components/homepage/Posts';
import { POSTS } from '../../Data/MyPostUser';
import NavButtonHome from '../../components/homepage/NavButtonHome';




const HomeScreen = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header />

                        <Stories />
                        <ScrollView>
                            <View
                                style={{
                                    alignItems: 'center',
                                    marginTop: -20,
                                }}
                            >
                                <NavButtonHome />
                            </View>
                            {POSTS.map((post, index) => (
                                <Posts key={index} post={post} />
                            ))}
                        </ScrollView>                

            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2828",
        flex: 1,
    }
});

export default HomeScreen;



