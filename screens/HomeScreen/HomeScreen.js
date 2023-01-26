import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories';
import Posts from '../../components/homepage/Posts';
import { POSTS } from '../../Data/MyPostUser';
import NavButtonHome from '../../components/homepage/NavButtonHome';
import { UidContext } from '../../components/Context/AppContext';
import Footer from '../../components/homepage/Footer';
import Thread from '../../components/Thread/Thread';



const HomeScreen = () => {
    const uid = useContext(UidContext);

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={styles.container}>

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
                            <Thread  />
                        </ScrollView>
                        <View>
                            <Footer />
                        </View>

                    </>

                </SafeAreaView>
            </KeyboardAvoidingView>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C2828",
        flex: 1,
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'green',
        padding: 8,
        alignItems: 'center'
    },
    indicatorText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default HomeScreen;



