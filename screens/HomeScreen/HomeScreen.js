import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories';
import Posts from '../../components/homepage/Posts';
import { POSTS } from '../../Data/MyPostUser';
import NavButtonHome from '../../components/homepage/NavButtonHome';
import { UidContext } from '../../components/Context/AppContext';



const HomeScreen = () => {
    const uid = useContext(UidContext);

    return (
        <>
            <SafeAreaView style={styles.container}>
                {
                    uid ? (
                        <>
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
                            </ScrollView></>
                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>You need to be logged in to see this page</Text>
                        </View>
                    )

                }


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



